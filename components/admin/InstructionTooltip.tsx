import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import { Help } from "@material-ui/icons";

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      open={open}
      placement="top"
      onClose={handleClose}
      onOpen={handleOpen}
      title="The save button saves the content of the entry. Approve would copy the entry to the main database, but you must apply all your changes and save before you approve. Reject just marks the entry as rejected."
    >
      <IconButton>
        <Help />
      </IconButton>
    </Tooltip>
  );
}
