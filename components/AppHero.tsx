import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";
import RotateAnimateImage from "components/RotateAnimateImage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "no-repeat center",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/hawker-centers/ghim-moh-market-and-hawker-centre/ghim-moh-market-and-hawker-centre.jpg)",
      backgroundSize: "cover",
      minHeight: "100vh",
      color: theme.palette.common.white,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    storyLink: {
      height: "120px",
      width: "268px",
      margin: "auto",
    },
  })
);

export default function AppHero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className="h-full text-center py-10" justify="center">
        <Grid
          item
          xs={3}
          className="hidden md:flex pr-20 pl-4 flex-col justify-evenly"
        >
          <RotateAnimateImage
            layout="responsive"
            width="711"
            height="636"
            origin="30% 0%"
            angle="5"
            src="/images/hawkermain01.png"
          />
          <RotateAnimateImage
            origin="60% 0%"
            angle="-10"
            layout="responsive"
            width="709"
            height="631"
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
            layout="responsive"
            width="711"
            height="806"
          />
          <RotateAnimateImage
            origin="35% 0%"
            angle="7"
            src="/images/hawkermain04.png"
            layout="responsive"
            width="712"
            height="734"
          />
        </Grid>
      </Grid>
    </div>
  );
}
