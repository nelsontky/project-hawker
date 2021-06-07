import { useSWRInfinite } from "swr";
import { Grid, Typography, LinearProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Waypoint } from "react-waypoint";

import SquareLink from "components/SquareLink";

import { Stall } from "modules/stalls/entities/stall.entity";

interface SquareLinkGridProps {
  initialData: Stall[];
  pageSize: number;
}

export default function SquareLinkGrid({
  initialData,
  pageSize,
}: SquareLinkGridProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const { data, size, setSize } = useSWRInfinite<
    Stall[]
  >((index) => `/api/v1/stalls?limit=${pageSize}&skip=${index * pageSize}`, {
    initialData: [initialData],
  });

  const stalls = data ? [].concat(...data) : [];
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === "undefined";

  return (
    <>
      <Grid container spacing={isSmall ? 10 : 6} justify="center">
        {stalls.map((stall, i) => (
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            key={`/${stall.location.slug}/${stall.slug}`}
          >
            <SquareLink
              href={`/${stall.location.slug}/${stall.slug}`}
              image={stall.images[0]}
            >
              <span>
                {stall.name}
                <br />
                <Typography color="textSecondary" variant="subtitle2">
                  ({stall.location.name})
                </Typography>
              </span>
            </SquareLink>
          </Grid>
        ))}
      </Grid>
      {/* TODO: Change to skeleton loader */}
      {isLoadingMore && <LinearProgress className="mt-10" color="secondary" />}
      <Waypoint
        onEnter={() => {
          setSize(size + 1);
        }}
      />
    </>
  );
}
