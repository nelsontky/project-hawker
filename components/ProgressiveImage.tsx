import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";

interface StyleProps {
  blur: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: (props) => ({
      filter: props.blur ? "blur(8px)" : "none",
      transition: "filter 0.2s ease-out",
    }),
  })
);

interface ProgressiveImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  compressedBase64: string;
}

export default function ProgressiveImage({
  compressedBase64,
  src,
  className,
  ...rest
}: ProgressiveImageProps) {
  const { blur, src: imageSrc } = useProgressiveImage({
    compressedSrc: compressedBase64,
    src,
  });

  const classes = useStyles({ blur });

  return (
    <img src={imageSrc} className={clsx(className, classes.root)} {...rest} />
  );
}
