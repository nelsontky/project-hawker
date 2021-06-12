import { Typography } from "@material-ui/core";
import useSWR from "swr";

import StallsTable from "components/admin/stalls/StallsTable";

import { Stall } from "modules/stalls/entities/stall.entity";

export default function EditStalls() {
  const { data, error } = useSWR<Stall[]>(
    "/api/v1/stalls?hide-compressed=true"
  );

  return (
    <div>
      <Typography variant="h3">Edit Stalls</Typography>
      <StallsTable stalls={data} />
    </div>
  );
}
