import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import _ from "lodash";
import * as yup from "yup";

import LocationSearch from "components/admin/LocationSearch";
import CreateLocationDialog from "components/admin/CreateLocationDialog";

import { Location } from "modules/locations/entities/location.entity";

export interface StallFields {
  contact?: string;
  deliveryAvailable?: string;
  moreAboutThisHawker?: string;
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

export type IOnSubmit = (
  values?: StallFields,
  locationInput?: string
) => Promise<void>;

interface UseStallFormProps {
  fields: StallInformation;
  onSubmit: IOnSubmit;
  validationSchema?: ReturnType<typeof yup.object>;
}

const getInitialValues = (fields: StallInformation) => {
  const {
    contact,
    deliveryAvailable,
    moreAboutThisHawker,
    dietaryRestrictions,
    favorites,
    foodTheyServe,
    nameOfHawker,
    openingHours,
    priceRange,
    recommendedBy,
    stallName,
    stallNumber,
    whatAreTheConcernsThisHawkerIsFacing,
  } = fields;

  return {
    moreAboutThisHawker: moreAboutThisHawker ?? "",
    stallName: stallName ?? "",
    recommendedBy: recommendedBy ?? "",
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
  };
};

export function useStallForm({
  fields,
  onSubmit,
  validationSchema,
}: UseStallFormProps) {
  const { location } = fields;
  const initialValues = getInitialValues(fields);

  const [locationInput, setLocationInput] =
    React.useState<Location | null>(location);

  React.useEffect(() => {
    setLocationInput(location);
  }, [location]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      onSubmit(values, locationInput?.id);
    },
    enableReinitialize: true,
  });

  return { formik, locationInput, setLocationInput };
}

interface EditStallFormProps {
  imageLinks?: string[];
  form: ReturnType<typeof useStallForm>;
  readonly?: boolean;
}

export default function EditStallForm({
  imageLinks,
  form,
  readonly,
}: EditStallFormProps) {
  const [isAddLocation, setIsAddLocation] = React.useState(false);
  const { formik, locationInput, setLocationInput } = form;

  return (
    <>
      <CreateLocationDialog
        moreAboutThisHawker={formik.values.moreAboutThisHawker}
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
            <LocationSearch value={locationInput} setValue={setLocationInput} disabled={readonly} />
            <Button
              onClick={() => {
                setIsAddLocation(true);
              }}
            >
              Create new location
            </Button>
          </Grid>
          {Object.keys(formik.values).map((field, i) => (
            <Grid
              item
              xs={field === "moreAboutThisHawker" ? 12 : 6}
              key={field}
            >
              <TextField
                multiline={
                  field === "moreAboutThisHawker" ||
                  field === "whatAreTheConcernsThisHawkerIsFacing"
                }
                rows={
                  field === "moreAboutThisHawker" ||
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
                disabled={readonly}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
