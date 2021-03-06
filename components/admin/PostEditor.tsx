import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import _ from "lodash";
import axios from "axios";
import * as yup from "yup";

import StatusChip from "components/admin/StatusChip";
import InstructionTooltip from "components/admin/InstructionTooltip";
import EditStallForm, { useStallForm } from "components/admin/EditStallForm";

import {
  PostStatus,
  ScrapeFacebook,
} from "modules/scrape-facebook/entities/scrape-facebook.entity";
import { convertMbasicToFacebook } from "lib/utils/convert-mbasic-to-facebook";
import { useSnackbar } from "lib/hooks/use-snackbar.hook";
import { useAppSelector } from "lib/hooks/redux.hook";

const validationSchema = yup.object({
  moreAboutThisHawker: yup
    .string()
    .transform((value) => value.trim())
    .required("More about this hawker is required"),
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
  const isApproved = !!post.stall;

  const { id, status, postUrl, imageNames, ...rest } = post;

  const onSubmit = async () => {
    const confirm = window.confirm(
      `Are you sure you want to proceed? This action cannot be undone!`
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
          message:
            "Make sure you have filled up the location, and have saved the entry beforehand",
          severity: "error",
        });
      }
    }
  };

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

  const form = useStallForm({ fields: rest, onSubmit, validationSchema });
  const { formik, locationInput } = form;

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
        <EditStallForm
          form={form}
          imageLinks={imageNames.map((name) => `/images/facebook/${name}`)}
          readonly={isApproved}
        />
        <CardActions>
          {isApproved ? (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              component="a"
              href={`/admin/stalls?edit=${encodeURIComponent(post.stall.id)}`}
              target="_blank"
            >
              Edit Stall
            </Button>
          ) : (
            <>
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
            </>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
