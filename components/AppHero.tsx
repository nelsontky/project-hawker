import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";
import RotateAnimateImage from "components/RotateAnimateImage";

import { useProgressiveImage } from "lib/hooks/use-progressive-image.hook";

interface StyleProps {
  blur: boolean;
  src: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      minHeight: "100vh",
      color: theme.palette.common.white,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    background: (props) => ({
      position: "absolute",
      top: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      background: "no-repeat center",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.src})`,
      backgroundSize: "cover",
      
      filter: props.blur ? "blur(8px)" : "none",
      transition: "filter 0.2s ease-out",
    }),
    storyLink: {
      maxWidth: "300px",
      margin: "auto",
    },
  })
);

const IMAGE_LINK =
  "images/hawker-centers/ghim-moh-market-and-hawker-centre/ghim-moh-market-and-hawker-centre.jpg";
const COMPRESSED_BASE64 =
  "data:image/png;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAAAAdwEA6AMAAAB3AQDoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAACEAAAADoAQAAQAAABQAAAAAAAAA/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAFAAhAwEiAAIRAQMRAf/EABoAAQACAwEAAAAAAAAAAAAAAAAFCAIDBAf/xAAwEAABAgQEAgcJAAAAAAAAAAABAgMABAURBhIhMRNxFBUiQVGRlCRTVYGhscHR0v/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIBEAAgIBBAMBAAAAAAAAAAAAAAECEQMhMUGBBBMUMv/aAAwDAQACEQMRAD8A9qwRjhurS7cpVJmXYqLacylGwS8kWGYG9grXUfMaR2YlxfQqY4wzPqVMuvAqAlQFhIBtrqAN4piwSBZdLlEbauTSB+YnJSqKZl0tCn0UhO15wa+Qics6j+de6DLHPhFhJ7H2H0rHs08hBFyospNhfc9q9uWsTLr1HRlW5VJEm1wkTCNPrFX36mtakZadRMxtZPS0k/aIebU2+4pTrNCTmFwRMpO0GHl26arsRYsjesS2PWtH+ISXqWv6hFOeE17uj+oT+4RX6IjemRsxMWWKZLqYlJZtTwCFFKPEbi/f4czELWJRqnYjm5JgBTLK8qeIAokabm0IRzYm3uVlsdaUIGJJFnInh8NpVrDvRrGD7TaXk5G0pzKJNoQgLZG57NVuXkIQhFaJWf/Z";

export default function AppHero() {
  const { src, blur } = useProgressiveImage({
    src: IMAGE_LINK,
    compressedSrc: COMPRESSED_BASE64,
  });
  const classes = useStyles({ src, blur });

  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <Grid container className="h-full text-center py-10" justify="center">
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
          <Typography variant="h2" className="font-bold mb-8">
            Stories of our hawker heroes
          </Typography>
          <Typography className="mb-4">
            Project Hawker is a passion project aiming to be a consolidated
            place to list all hawkers and their stories. We are also working on
            helping to future-proof these hawkers (e.g. by being on listed
            online and on delivery apps).
          </Typography>
          <Typography className="mb-4">
            But we can't do this alone. We need the help of all hawker
            supporters to bring these hawkers to light.
          </Typography>
          <Typography className="font-bold">
            Help us reach out to them and let their stories be heard.
          </Typography>
          <div className="mt-12">
            <ImageLink
              src="/images/icons/contribute.png"
              href="http://projecthawker.com/submit"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.storyLink}
            />
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
