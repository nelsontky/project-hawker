import { useSWRInfinite } from "swr";
import { Typography, LinearProgress } from "@material-ui/core";
import { Waypoint } from "react-waypoint";

import SquareLinkGrid from "components/SquareLinkGrid";

import { Stall } from "modules/stalls/entities/stall.entity";

interface InfiniteStallsContainerProps {
  initialData: Stall[];
  pageSize: number;
  apiPath: string;
  emptyMessageComponent?: React.ReactNode;
}

export default function InfiniteStallsContainer({
  initialData,
  pageSize,
  apiPath,
  emptyMessageComponent,
}: InfiniteStallsContainerProps) {
  const { data, size, setSize } = useSWRInfinite<Stall[]>(
    (index) => `${apiPath}limit=${pageSize}&skip=${index * pageSize}`,
    {
      initialData: [initialData],
    }
  );

  const stalls = data ? [].concat(...data) : [];
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === "undefined";
  const isEmpty = data?.[0]?.length === 0;

  return (
    <>
      <SquareLinkGrid
        items={stalls.map((stall) => ({
          href: `/${stall.location.slug}/${stall.slug}`,
          image: stall.images[0],
          children: (
            <span>
              {stall.name}
              <br />
              <Typography color="textSecondary" variant="subtitle2">
                ({stall.location.name})
              </Typography>
            </span>
          ),
        }))}
      />
      {/* TODO: Change to skeleton loader */}
      {isLoadingMore && <LinearProgress className="mt-10" color="secondary" />}
      <Waypoint
        onEnter={() => {
          setSize(size + 1);
        }}
      />
      {isEmpty && !!emptyMessageComponent && emptyMessageComponent}
    </>
  );
}
