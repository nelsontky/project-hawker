import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import _ from "lodash";
import axios from "axios";

import { Location } from "modules/locations/entities/location.entity";
import { useAppSelector } from "lib/hooks/redux.hook";

const REGION_OPTIONS = [
  "North",
  "South",
  "East",
  "West",
  "Central",
  "North-East",
  "South-East",
  "South-West",
  "North-West",
];

const validationSchema = yup.object({
  name: yup
    .string()
    .transform((value) => value.trim())
    .required("Name is required"),
  region: yup
    .string()
    .transform((value) => value.trim())
    .required("Region is required"),
  postalCode: yup
    .string()
    .transform((value) => value.trim())
    .required("Postal code is required"),
});

interface CreateLocationDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLocationInput: React.Dispatch<React.SetStateAction<Location>>;
  description?: string;
}

export default function CreateLocationDialog({
  open,
  setOpen,
  setLocationInput,
  description,
}: CreateLocationDialogProps) {
  const handleClose = () => {
    setOpen(false);
  };
  const token = useAppSelector((state) => state.admin.token);
  const formik = useFormik({
    initialValues: {
      name: "",
      region: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      try {
        const response = await axios.post<Location>(
          "/api/v1/locations",
          values,
          { headers: { "admin-token": token } }
        );
        setLocationInput(response.data);
        formikHelpers.resetForm();
        handleClose();
      } catch {
        formikHelpers.setFieldError(
          "name",
          "You may have tried to add a location with the same name as another existing location"
        );
        formikHelpers.setFieldError(
          "postalCode",
          "You may have tried to add a location with the same postal code as another existing location"
        );
      }
    },
  });

  const handleAdd = () => {
    formik.submitForm();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Create new location</DialogTitle>
      <DialogContent>
        {description && description.length > 0 && (
          <Typography variant="caption">{`Description: ${description}`}</Typography>
        )}
        <Grid className="mt-4" container spacing={4}>
          {Object.keys(formik.values).map((field, i) => (
            <Grid item xs={i < 1 ? 12 : 6} key={field}>
              {field === "region" ? (
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                >
                  <InputLabel>{_.startCase(field)}</InputLabel>
                  <Select
                    label={_.startCase(field)}
                    value={formik.values[field]}
                    onChange={(e) => {
                      formik.setFieldValue("region", e.target.value);
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {REGION_OPTIONS.map((region) => (
                      <MenuItem key={region} value={region}>
                        {region}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched[field] && formik.errors[field] && (
                    <FormHelperText>{formik.errors[field]}</FormHelperText>
                  )}
                </FormControl>
              ) : (
                <TextField
                  required
                  variant="outlined"
                  fullWidth
                  name={field}
                  label={_.startCase(field)}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={formik.isSubmitting}
          onClick={handleClose}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          disabled={formik.isSubmitting}
          onClick={handleAdd}
          color="primary"
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
