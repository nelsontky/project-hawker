import { Chip } from "@material-ui/core";
import _ from "lodash";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { PostStatus } from "modules/scrape-facebook/entities/scrape-facebook.entity";

interface StyleProps {
  status: PostStatus;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: (props) => {
      const backgroundColor =
        props.status === PostStatus.APPROVED
          ? theme.palette.success.main
          : props.status === PostStatus.REJECTED
          ? theme.palette.error.main
          : theme.palette.warning.main;

      return {
        backgroundColor,
        color: theme.palette.getContrastText(backgroundColor),
      };
    },
  })
);

interface StatusChipProps {
  status: PostStatus;
  className?: string;
}

export default function StatusChip({ status, className }: StatusChipProps) {
  const classes = useStyles({ status });
  return (
    <Chip
      className={clsx(classes.root, className)}
      color="primary"
      label={_.capitalize(status)}
    />
  );
}
