import React from "react";
import { TextField, Container, Button } from "@material-ui/core";
import axios from "axios";

import { useAppDispatch } from "lib/hooks/redux.hook";
import { setToken as setReduxToken } from "lib/slices/admin.slice";

export default function TokenInput() {
  const [token, setToken] = React.useState("");
  const [error, setError] = React.useState("");
  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/v1/auth", undefined, {
        headers: { "admin-token": token },
      });

      if (response.data.success) {
        dispatch(setReduxToken(token));
      }
    } catch {
      setError("Invalid token. Please try again.");
    }
  };

  return (
    <Container fixed>
      <form onSubmit={onSubmit}>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          label="Password"
          value={token}
          onChange={(e) => {
            setError("");
            setToken(e.target.value);
          }}
          error={error.length > 0}
          helperText={error.length > 0 ? error : undefined}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
