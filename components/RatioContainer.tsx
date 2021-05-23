import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  percentage: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      height: 0,
      paddingTop: (props) => props.percentage,
      borderStyle: "solid",
      borderColor: theme.palette.common.black,
      borderWidth: theme.spacing(2),
    },
  })
);

interface RatioContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  percentage: string;
}

export default function RatioContainer({
  percentage,
  className,
  children,
  ...rest
}: RatioContainerProps) {
  const classes = useStyles({ percentage });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
}
