import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";
import { Image } from "modules/images/entities/image.entity";

interface StyleProps {
  src: string;
  blur: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: "80vh",
    },
    background: (props) => ({
      position: "absolute",
      top: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,

      background: "no-repeat center",
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${props.src})`,
      backgroundSize: "cover",

      filter: props.blur ? "blur(8px)" : "none",
      transition: "filter 0.2s ease-out",
    }),
  })
);

interface BannerTopProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  image: Image;
}

export default function BannerTop({
  image,
  children,
  className,
  ...rest
}: BannerTopProps) {
  const { src, blur } = useProgressiveImage({
    src: image.link,
    compressedSrc: image.compressedBase64,
  });
  const classes = useStyles({ src, blur });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.background} />
      {children}
    </div>
  );
}
