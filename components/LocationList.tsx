import { Grid, Typography, Container } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

import RatioContainer from "components/RatioContainer";
import { Location } from "modules/locations/entities/location.entity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
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
        <div className="text-center py-10">
          <Typography variant="h2" className="font-bold text-white">
            Explore
          </Typography>
        </div>
        <Grid container spacing={isSmall ? 8 : 4} justify="center">
          {allLocationsData.map((location, i) => (
            <Grid item xs={12} sm={4} md={3} key={i}>
              <Link href={"/" + location.slug}>
                <a>
                  <RatioContainer
                    percentage={isSmall ? "100%" : "56.25%"}
                    style={{
                      background: `url(${location.images[0].link}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  ></RatioContainer>
                  <Typography className="text-white" variant="h6">
                    {location.name}
                  </Typography>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
