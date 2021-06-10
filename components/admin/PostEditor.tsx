import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import _ from "lodash";
import * as yup from "yup";
import axios from "axios";

import StatusChip from "components/admin/StatusChip";
import LocationSearch from "components/admin/LocationSearch";
import CreateLocationDialog from "components/admin/CreateLocationDialog";
import InstructionTooltip from "components/admin/InstructionTooltip";

import {
  PostStatus,
  ScrapeFacebook,
} from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { convertMbasicToFacebook } from "lib/utils/convert-mbasic-to-facebook";
import { Location } from "modules/locations/entities/location.entity";
import { useSnackbar } from "lib/hooks/use-snackbar.hook";
import { useAppSelector } from "lib/hooks/redux.hook";

const validationSchema = yup.object({
  description: yup
    .string()
    .transform((value) => value.trim())
    .required("Description is required"),
  stallName: yup
    .string()
    .transform((value) => value.trim())
    .required("Stall name is required"),
  recommendedBy: yup
    .string()
    .transform((value) => value.trim())
    .required("Recommender is required"),
});

interface PostEditorProps {
  post: ScrapeFacebook;
  mutate?: Function;
}

export default function PostEditor({ post, mutate }: PostEditorProps) {
  const { open } = useSnackbar();
  const token = useAppSelector((state) => state.admin.token);

  const {
    id,
    contact,
    deliveryAvailable,
    description,
    dietaryRestrictions,
    favorites,
    foodTheyServe,
    imageNames,
    location,
    nameOfHawker,
    openingHours,
    postUrl,
    priceRange,
    recommendedBy,
    stallName,
    stallNumber,
    status,
    whatAreTheConcernsThisHawkerIsFacing,
  } = post;

  const formik = useFormik({
    initialValues: {
      description,
      stallName: stallName ?? "",
      recommendedBy: recommendedBy,
      contact: contact ?? "",
      deliveryAvailable: deliveryAvailable ?? "",
      dietaryRestrictions: dietaryRestrictions ?? "",
      favorites: favorites ?? "",
      foodTheyServe: foodTheyServe ?? "",
      openingHours: openingHours ?? "",
      priceRange: priceRange ?? "",
      nameOfHawker: nameOfHawker ?? "",
      stallNumber: stallNumber ?? "",
      whatAreTheConcernsThisHawkerIsFacing:
        whatAreTheConcernsThisHawkerIsFacing ?? "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const confirm = window.confirm(
        `Are you sure you want to proceed? This action cannot be undone!\n${JSON.stringify(
          { location: location?.name, ...values },
          null,
          2
        )}`
      );

      if (confirm) {
        try {
          await axios.put(`/api/v1/scrape-facebook/approve/${id}`, undefined, {
            headers: { "admin-token": token },
          });
          if (mutate) {
            mutate();
          }
          open({
            message: "Post approved!",
          });
        } catch {
          open({
            message: "Make sure you have filled up the location, and have saved the entry beforehand",
            severity: "error",
          });
        }
      }
    },
  });

  const onReject = async () => {
    try {
      await axios.put(
        `/api/v1/scrape-facebook/${id}`,
        { status: PostStatus.REJECTED },
        {
          headers: { "admin-token": token },
        }
      );
      if (mutate) {
        mutate();
      }
      open({
        message: "Post rejected!",
      });
    } catch {
      open({
        message: "An error has occurred. Please try again",
        severity: "error",
      });
    }
  };

  const [locationInput, setLocationInput] =
    React.useState<Location | null>(location);
  const [isAddLocation, setIsAddLocation] = React.useState(false);

  const onSave = async () => {
    try {
      await axios.put(
        `/api/v1/scrape-facebook/${id}`,
        { ...formik.values, locationId: locationInput?.id },
        {
          headers: { "admin-token": token },
        }
      );
      if (mutate) {
        mutate();
      }
      open({
        message: "Post updated!",
      });
    } catch {
      open({
        message: "An error has occurred. Please try again",
        severity: "error",
      });
    }
  };

  return (
    <>
      <CreateLocationDialog
        description={formik.values.description}
        open={isAddLocation}
        setOpen={setIsAddLocation}
        setLocationInput={setLocationInput}
      />
      <Card className="my-8">
        <CardContent>
          <StatusChip className="mb-4" status={status} />
          <Typography component="p" className="underline">
            <a
              href={convertMbasicToFacebook(postUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook link
            </a>
          </Typography>
          <Grid container spacing={4} className="my-4">
            {imageNames.map((name) => (
              <Grid item xs={6} key={name}>
                <img src={`/images/facebook/${name}`} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <LocationSearch
                value={locationInput}
                setValue={setLocationInput}
              />
              <Button
                onClick={() => {
                  setIsAddLocation(true);
                }}
              >
                Create new location
              </Button>
            </Grid>
            {Object.keys(formik.values).map((field, i) => (
              <Grid item xs={field === "description" ? 12 : 6} key={field}>
                <TextField
                  required={i < 2}
                  multiline={
                    field === "description" ||
                    field === "whatAreTheConcernsThisHawkerIsFacing"
                  }
                  rows={
                    field === "description" ||
                    field === "whatAreTheConcernsThisHawkerIsFacing"
                      ? 4
                      : undefined
                  }
                  variant="outlined"
                  fullWidth
                  name={field}
                  label={_.startCase(field)}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                />
              </Grid>
            ))}
          </Grid>
          <CardActions>
            <InstructionTooltip />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={formik.submitForm}
            >
              Approve
            </Button>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              onClick={onSave}
            >
              Save
            </Button>
            <Button variant="contained" fullWidth onClick={onReject}>
              Reject
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
