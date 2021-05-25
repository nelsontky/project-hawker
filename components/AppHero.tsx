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
            Hi all Singaporeans, with the recent restrictions, many hawkers have
            been struggling to make ends meet, yet a lot of the older ones fall
            under the radar as they are not on any delivery platforms. We really
            love the effort the community is putting in to support the heart and
            work of our hawkers who have been putting in the hours even these
            times to get delicious food to us at such a low cost.
          </Typography>
          <Typography>
            Inspired, we are embarking on this passion project to consolidate
            all hawker information into a database where it can be easily
            accessed. We need your cherished stories and experiences with your
            favorite hawkers so no one gets left behind.
          </Typography>
        </div>
        <div className="m-auto">
          <ImageLink
            src="images/icons/contribute.png"
            href="http://projecthawker.com/submit"
            target="_blank"
            rel="noopener noreferrer"
            width="400px"
            height="100%"
          />
        </div>
      </Container>
    </div>
  );
}
