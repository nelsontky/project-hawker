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
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import { Location } from "modules/locations/entities/location.entity";

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
}

export default function CreateLocationDialog({
  open,
  setOpen,
  setLocationInput,
}: CreateLocationDialogProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      region: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      alert(JSON.stringify(values, null, 2));
      formikHelpers.resetForm();
    },
  });

  const handleAdd = () => {
    formik.submitForm();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Create new location</DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
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
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary" autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
