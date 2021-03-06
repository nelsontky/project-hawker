import React from "react";
import { Container } from "@material-ui/core";
import { TabPanel, TabContext } from "@material-ui/lab";
import { useRouter } from "next/router";

import NavigationBar from "components/admin/NavigationBar";
import ScrapedFacebook from "components/admin/ScrapedFacebook";
import ManageStalls from "components/admin/stalls/ManageStalls";

interface MainPortalProps {
  numberOfPages: number;
  pageSize: number;
}

export default function MainPortal({
  numberOfPages,
  pageSize,
}: MainPortalProps) {
  const router = useRouter();

  return (
    <TabContext value={router.asPath.split("?")[0] ?? "/admin"}>
      <NavigationBar />
      <Container fixed>
        <TabPanel value="/admin">
          <ScrapedFacebook numberOfPages={numberOfPages} pageSize={pageSize} />
        </TabPanel>
        <TabPanel value="/admin/stalls">
          <ManageStalls />
        </TabPanel>
      </Container>
    </TabContext>
  );
}
