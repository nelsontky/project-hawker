import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link, { LinkProps } from "next/link";
import { Typography } from "@material-ui/core";

interface StyleProps {
  color?: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      transition: "transform 0.2s",

      "&:hover": {
        transform: "scale(1.2)",
      },
    },

    caption: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      position: "absolute",
      backgroundColor: (props) => props.color ?? theme.palette.primary.main,
      left: "50%",
      bottom: theme.spacing(2),
      transform: "translateX(-50%)",
    },
  })
);

interface ImageLinkProps extends LinkProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  color?: string;
  fontVariant?: any;
}

export default function ImageLink({
  src,
  children,
  className,
  target,
  rel,
  color,
  fontVariant,
  ...rest
}: ImageLinkProps) {
  const classes = useStyles({ color });

  return (
    <div className={clsx(classes.root, className)}>
      <Link {...rest}>
        <a target={target} rel={rel}>
          <img src={src} />
          {children && (
            <div className={classes.caption}>
              <Typography variant={fontVariant ?? "h6"}>{children}</Typography>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}
