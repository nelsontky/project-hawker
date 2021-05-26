import Link from "next/link";
import { Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import RatioContainer from "components/RatioContainer";

import { Stall } from "modules/stalls/entities/stall.entity";
import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";

interface StyleProps {
  blur: boolean;
  src: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "3px 6px 4px -2px rgba(0,0,0,0.62)",
      transition: "transform 0.2s, box-shadow 0.2s, filter 0.2s ease-out",

      "&:hover": {
        transform: `translateY(-${theme.spacing(3)}px)`,
        boxShadow: `3px 18px 4px -2px rgba(0,0,0,0.62)`,
      },
    },
    ratioContainer: (props) => ({
      backgroundImage: `url(${props.src})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      filter: props.blur ? "blur(8px)" : "none",
    }),
  })
);

interface StallLinkProps {
  stall: Stall;
  locationSlug: string;
}

export default function StallLink({ stall, locationSlug }: StallLinkProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const image = stall.images[0];
  const { src, blur } = useProgressiveImage({
    compressedSrc: image.compressedBase64,
    src: image.link,
  });

  const classes = useStyles({ src, blur });

  return (
    <Link href={`/${locationSlug}/${stall.slug}`}>
      <a>
        <div className={classes.root}>
          <RatioContainer
            className={classes.ratioContainer}
            percentage={isSmall ? "100%" : "56.25%"}
          ></RatioContainer>
        </div>
        <div className="text-center mt-4">
          <Typography variant="h6" className="font-bold leading-none">
            {stall.name}
          </Typography>
        </div>
      </a>
    </Link>
  );
}
