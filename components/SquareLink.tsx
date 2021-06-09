import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Waypoint } from "react-waypoint";

import RatioContainer from "components/RatioContainer";
import FadeUp from "components/FadeUp";

import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";
import { Image } from "modules/images/entities/image.entity";

interface StyleProps {
  blur: boolean;
  src: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      "&:hover $ratioContainer": {
        transform: `translateY(-${theme.spacing(3)}px)`,
        boxShadow: `3px 18px 4px -2px rgba(0,0,0,0.62)`,
      },

      "&:hover $textContainer": {
        color: theme.palette.secondary.main,
      },
    },
    textContainer: {
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
    ratioContainer: (props) => ({
      boxShadow: "3px 6px 4px -2px rgba(0,0,0,0.62)",
      transition: "transform 0.2s, box-shadow 0.2s, filter 0.2s ease-out",
      backgroundImage: `url(${props.src})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: props.blur ? "blur(8px)" : "none",
    }),
  })
);

interface StallLinkProps {
  image: Image;
  href: string;
  children?: React.ReactNode;
  scroll?: boolean;
}

export default function StallLink({ image, href, children, scroll }: StallLinkProps) {
  const { src, blur } = useProgressiveImage({
    compressedSrc: image.compressedBase64,
    src: image.link,
  });
  const classes = useStyles({ src, blur });
  const [isShow, setIsShow] = React.useState(false);

  return (
    <Waypoint
      onEnter={() => {
        setIsShow(true);
      }}
    >
      <div className={classes.root}>
        <FadeUp in={isShow}>
          <Link href={href} scroll={scroll}>
            <a>
              <RatioContainer
                className={classes.ratioContainer}
                percentage="100%"
              ></RatioContainer>
              <div className={classes.textContainer}>
                <Typography variant="h6" className="font-bold leading-none">
                  {children}
                </Typography>
              </div>
            </a>
          </Link>
        </FadeUp>
      </div>
    </Waypoint>
  );
}
