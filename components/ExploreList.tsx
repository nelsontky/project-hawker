import { Typography, Container } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SquareLinkGrid from "components/SquareLinkGrid";

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
  })
);

interface ExploreListProps {
  allStalls: Stall[];
}

export default function LocationList({ allStalls }: ExploreListProps) {
  const classes = useStyles();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={classes.root}>
      <Container fixed>
        <div className="text-center mb-8">
          <Typography variant="h3" className={classes.header}>
            Explore
          </Typography>
        </div>
        <SquareLinkGrid
          items={allStalls
            .slice(0, isLarge ? undefined : isMedium ? 6 : 4)
            .map((stall) => ({
              href: `/${stall.location.slug}/${stall.slug}`,
              image: stall.images[0],
              name: stall.name,
            }))}
        />
      </Container>
    </div>
  );
}
