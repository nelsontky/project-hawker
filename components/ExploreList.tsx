import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ExploreLink from "components/ExploreLink";

import { Stall } from "modules/stalls/entities/stall.entity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(15),
    },
    header: {
      fontFamily: "'Fredericka the Great', cursive",
      "-webkit-text-stroke-width": "0.5px",
      "-webkit-text-stroke-color": "#404040",
      color: "#404040",
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

interface ExploreListProps {
  allStalls: Stall[];
}

export default function LocationList({ allStalls }: ExploreListProps) {
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
          {allStalls.map((stall, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
              className={classes.location}
            >
              <ExploreLink stall={stall} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
