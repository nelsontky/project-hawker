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

import EditStallForm, {
  useStallForm,
  StallInformation,
  StallFields,
} from "components/admin/EditStallForm";

import { Location } from "modules/locations/entities/location.entity";
import { useAppSelector } from "lib/hooks/redux.hook";

interface StallFormDialog {
  stallInformation: StallInformation;
  imageLinks?: string[];
  open: boolean;
  close: () => void;
}

export default function StallFormDialog({
  stallInformation,
  imageLinks,
  open,
  close,
}: StallFormDialog) {
  const token = useAppSelector((state) => state.admin.token);

  const form = useStallForm({
    fields: stallInformation,
    onSubmit: async (values: StallFields) => {},
  });
  const { formik } = form;

  return (
    <Dialog open={open}>
      <DialogTitle>Edit stall</DialogTitle>
      <DialogContent>
        <EditStallForm form={form} imageLinks={imageLinks} />
      </DialogContent>
      <DialogActions>
        <Button disabled={formik.isSubmitting} onClick={close} color="primary">
          Cancel
        </Button>
        <Button
          disabled={formik.isSubmitting}
          onClick={close}
          color="primary"
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
