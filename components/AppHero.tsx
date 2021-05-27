import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";
import RotateAnimateImage from "components/RotateAnimateImage";
import ProgressiveImage from "components/ProgressiveImage";

import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";
import { IMAGES_AND_COMPRESSED } from "constants/images-and-compressed";

interface StyleProps {
  blur: boolean;
  src: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    background: (props) => ({
      position: "absolute",
      top: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,

      background: "no-repeat center",
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${props.src})`,
      backgroundSize: "cover",

      filter: props.blur ? "blur(8px)" : "none",
      transition: "filter 0.2s ease-out",
    }),
    logo: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      backgroundColor: "white",
      borderRadius: "40px",
      padding: theme.spacing(8),
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(32),
      textAlign: "justify",
    },
    contribute: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translate(-50%, 25%)",
      width: 300,
    },
  })
);

const IMAGE_LINK = IMAGES_AND_COMPRESSED.appHeroBg.link;
const COMPRESSED_BASE64 = IMAGES_AND_COMPRESSED.appHeroBg.compressedBase64;

export default function AppHero() {
  const { src, blur } = useProgressiveImage({
    src: IMAGE_LINK,
    compressedSrc: COMPRESSED_BASE64,
  });
  const classes = useStyles({ src, blur });

  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <Grid container className="h-full py-10" justify="center">
        <Grid
          item
          xs={3}
          className="hidden md:flex pr-20 pl-4 flex-col justify-evenly"
        >
          <RotateAnimateImage
            origin="30% 0%"
            angle="5"
            src="/images/hawkermain01.png"
          />
          <RotateAnimateImage
            origin="60% 0%"
            angle="-10"
            src="/images/hawkermain02.png"
          />
        </Grid>
        <Grid item xs={10} md={6} className="flex flex-col justify-center">
          <div className={classes.content}>
            <ProgressiveImage
              className={classes.logo}
              src={IMAGES_AND_COMPRESSED.appHeroHeader.link}
              compressedBase64={
                IMAGES_AND_COMPRESSED.appHeroHeader.compressedBase64
              }
              width={IMAGES_AND_COMPRESSED.appHeroHeader.width}
              height={IMAGES_AND_COMPRESSED.appHeroHeader.height}
            />
            <Typography className="mb-1">
              is a passion project aiming to be a{" "}
              <span className="font-bold">
                consolidated place to list all hawkers and their stories.
              </span>
            </Typography>
            <Typography className="mb-1">
              We are also working on{" "}
              <span className="font-bold">
                helping to future-proof these hawkers (e.g. by being on listed
                online and on delivery apps).
              </span>
            </Typography>
            <Typography className="mb-1">
              But we can't do this alone. We need the help of all hawker
              supporters to bring these hawkers to light.
            </Typography>
            <Typography className="font-bold">
              Help us reach out to them and let their stories be heard.
            </Typography>
            <div className={classes.contribute}>
              <ImageLink
                src="/images/icons/contribute.png"
                href="http://projecthawker.com/submit"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          className="hidden md:flex pl-20 pr-4 flex-col justify-evenly"
        >
          <RotateAnimateImage
            origin="55% 0%"
            angle="-2"
            src="/images/hawkermain03.png"
          />
          <RotateAnimateImage
            origin="35% 0%"
            angle="7"
            src="/images/hawkermain04.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}
