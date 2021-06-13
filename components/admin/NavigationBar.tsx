import React from "react";
import { AppBar, Tab, Toolbar } from "@material-ui/core";
import { TabList } from "@material-ui/lab";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    router.push(newValue);
  };
  
  return (
    <>
      <AppBar position="fixed">
        <TabList onChange={handleChange}>
          <Tab value="/admin" label="Scraped from Facebook" />
          <Tab value="/admin/stalls" label="Manage Stalls" />
          {/* <Tab label="Edit Locations" /> */}
        </TabList>
      </AppBar>
      <Toolbar />
    </>
  );
}
