import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link, { LinkProps } from "next/link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: 180,
      height: 180,
      transition: "transform 0.2s",

      "&:hover": {
        transform: "scale(1.2)",
      },
    },

    caption: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
      left: "50%",
      bottom: theme.spacing(4),
      transform: "translateX(-50%)",
    },
  })
);

interface ImageLinkProps extends LinkProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function ImageLink({
  src,
  children,
  className,
  target,
  rel,
  ...rest
}: ImageLinkProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Link {...rest}>
        <a target={target} rel={rel}>
          <img src={src} />
          <div className={classes.caption}>
            <Typography variant="h6">{children}</Typography>
          </div>
        </a>
      </Link>
    </div>
  );
}
