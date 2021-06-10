import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { useAppSelector } from "lib/hooks/redux.hook";
import { useSnackbar } from "lib/hooks/use-snackbar.hook";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AppSnackbar() {
  const { close, exit } = useSnackbar();
  const { open, messageInfo } = useAppSelector((state) => state.snackbar);

  return (
    <Snackbar
      key={messageInfo?.key}
      anchorOrigin={{
        vertical: messageInfo?.vertical ?? "top",
        horizontal: messageInfo?.horizontal ?? "center",
      }}
      open={open}
      autoHideDuration={messageInfo?.autoHideDuration}
      onClose={close}
      onExited={exit}
    >
      <Alert onClose={close} severity={messageInfo?.severity}>
        {messageInfo?.message}
      </Alert>
    </Snackbar>
  );
}
