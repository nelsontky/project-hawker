import { Typography, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ImageLink from "components/ImageLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "no-repeat center",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/hawker-centers/ghim-moh-market-and-hawker-centre/ghim-moh-market-and-hawker-centre.jpg)",
      backgroundSize: "cover",
      minHeight: "100vh",
      color: theme.palette.common.white,
    },
    container: {
      paddingTop: theme.spacing(40),
      paddingBottom: theme.spacing(20),
      minHeight: "100vh",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    storyLink: {
      maxWidth: "400px",
      width: "100%",
    },
  })
);

export default function AppHero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <div>
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
        </div>
        <div className="m-auto mt-12">
          <ImageLink
            src="images/icons/contribute.png"
            href="http://projecthawker.com/submit"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.storyLink}
          />
        </div>
      </Container>
    </div>
  );
}
