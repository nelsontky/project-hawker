import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface StyleProps {
  image: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      background: "no-repeat center",
      backgroundImage: (props) =>
        `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${props.image})`,
      backgroundSize: "cover",
      height: "80vh",
    },
  })
);

interface BannerTopProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  image: string;
}

export default function BannerTop({
  image,
  children,
  className,
  ...rest
}: BannerTopProps) {
  const classes = useStyles({ image });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
}
