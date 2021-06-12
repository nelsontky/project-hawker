import { Typography } from "@material-ui/core";
import useSWR from "swr";

import StallsTable from "components/admin/stalls/StallsTable";

import { Stall } from "modules/stalls/entities/stall.entity";

export default function ManageStalls() {
  const { data } = useSWR<Stall[]>("/api/v1/stalls?hide-compressed=true");

  return (
    <div>
      <Typography variant="h5">Manage Stalls</Typography>
      <StallsTable stalls={data} />
    </div>
  );
}
