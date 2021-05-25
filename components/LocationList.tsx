import { Grid, Typography, Container } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

import RatioContainer from "components/RatioContainer";
import { Location } from "modules/locations/entities/location.entity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Container fixed>
        <div className="text-center mb-8">
          <Typography variant="h3" className="font-bold text-white">
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
              <Link href={"/" + location.slug}>
                <a>
                  <RatioContainer
                    percentage={isSmall ? "100%" : "56.25%"}
                    className={classes.ratioContainer}
                    style={{
                      background: `url(${location.images[0].link}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  ></RatioContainer>
                  <div className="text-center mt-4">
                    <Typography variant="h6" className="font-bold leading-none">
                      {location.name}
                    </Typography>
                  </div>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
