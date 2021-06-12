import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import _ from "lodash";
import * as yup from "yup";

import LocationSearch from "components/admin/LocationSearch";
import CreateLocationDialog from "components/admin/CreateLocationDialog";

import { Location } from "modules/locations/entities/location.entity";

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

export interface StallFields {
  contact?: string;
  deliveryAvailable?: string;
  description?: string;
  dietaryRestrictions?: string;
  favorites?: string;
  foodTheyServe?: string;
  nameOfHawker?: string;
  openingHours?: string;
  priceRange?: string;
  recommendedBy: string;
  stallName?: string;
  stallNumber?: string;
  whatAreTheConcernsThisHawkerIsFacing?: string;
}

export interface StallInformation extends StallFields {
  location?: Location;
}

interface UseStallFormProps {
  fields: StallInformation;
  onSubmit: (values: StallFields) => Promise<void>;
}

export function useStallForm({ fields, onSubmit }: UseStallFormProps) {
  const {
    contact,
    deliveryAvailable,
    description,
    dietaryRestrictions,
    favorites,
    foodTheyServe,
    location,
    nameOfHawker,
    openingHours,
    priceRange,
    recommendedBy,
    stallName,
    stallNumber,
    whatAreTheConcernsThisHawkerIsFacing,
  } = fields;

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
    onSubmit,
  });

  const [locationInput, setLocationInput] =
    React.useState<Location | null>(location);

  return { formik, locationInput, setLocationInput };
}

interface EditStallFormProps {
  imageLinks?: string[];
  form: ReturnType<typeof useStallForm>;
}

export default function EditStallForm({
  imageLinks,
  form,
}: EditStallFormProps) {
  const [isAddLocation, setIsAddLocation] = React.useState(false);
  const { formik, locationInput, setLocationInput } = form;

  return (
    <>
      <CreateLocationDialog
        description={formik.values.description}
        open={isAddLocation}
        setOpen={setIsAddLocation}
        setLocationInput={setLocationInput}
      />
      <div className="my-8">
        <Grid container spacing={4} className="my-4">
          {imageLinks &&
            imageLinks.map((link) => (
              <Grid item xs={6} key={link}>
                <img src={link} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <LocationSearch value={locationInput} setValue={setLocationInput} />
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
      </div>
    </>
  );
}
