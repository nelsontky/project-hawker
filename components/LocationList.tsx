import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import LocationLink from "components/LocationLink";

import { Location } from "modules/locations/entities/location.entity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    header: {
      fontFamily: "'Fredericka the Great', cursive",
      "-webkit-text-stroke-width": "0.5px",
      "-webkit-text-stroke-color": "black",
    },
    ratioContainer: {
      borderStyle: "solid",
      borderColor: theme.palette.common.white,
      borderWidth: theme.spacing(2),
    },
    location: {
      color: theme.palette.common.white,
      transition: "transform 0.2s",

      "&:hover": {
        transform: `translateY(-${theme.spacing(3)}px)`,
        color: theme.palette.secondary.main,

        "& > a > div": {
          borderColor: theme.palette.secondary.main,
        },
      },
    },
  })
);

interface LocationListProps {
  allLocationsData: Location[];
}

export default function LocationList({ allLocationsData }: LocationListProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <div className="text-center mb-8">
          <Typography variant="h3" className={classes.header}>
            Explore
          </Typography>
        </div>
        <Grid container spacing={10} justify="center">
          {allLocationsData.map((location, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
              className={classes.location}
            >
              <LocationLink location={location} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
