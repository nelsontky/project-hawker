import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import * as yup from "yup";
import _ from "lodash";

import EditStallForm, {
  useStallForm,
  StallInformation,
  StallFields,
} from "components/admin/EditStallForm";

import { useAppSelector } from "lib/hooks/redux.hook";

const validationSchema = yup.object({
  stallName: yup
    .string()
    .transform((value) => value.trim())
    .required("Stall name is required"),
});

interface StallFormDialog {
  stallInformation: StallInformation;
  imageLinks?: string[];
  open: boolean;
  close: () => void;
  onSubmit: (values: StallFields) => Promise<void>;
}

export default function StallFormDialog({
  stallInformation,
  imageLinks,
  open,
  close,
  onSubmit,
}: StallFormDialog) {
  const token = useAppSelector((state) => state.admin.token);

  const form = useStallForm({
    fields: stallInformation,
    onSubmit,
    validationSchema,
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
