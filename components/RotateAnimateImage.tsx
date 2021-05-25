import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  angle?: string;
  origin?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      transition: "transform 0.2s",
      transformOrigin: (props) => props.origin,
      "&:hover": {
        transform: (props) => `rotate(${props.angle ?? "5"}deg)`,
      },
    },
  })
);

interface RotateAnimateImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  angle?: string;
  origin?: string;
}

export default function RotateAnimateImage({
  className,
  angle,
  origin,
  ...rest
}: RotateAnimateImageProps) {
  const classes = useStyles({ angle, origin });

  return <img className={clsx(classes.root, className)} {...rest} />;
}
