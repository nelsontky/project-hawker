import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import qs from "qs";

import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import { PaperProps } from "@material-ui/core/Paper";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    border: `2px solid ${theme.palette.common.black}`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

interface SearchBarProps extends PaperProps {
  initialValue?: string;
}

export default function SearchBar({
  initialValue,
  className,
  ...rest
}: SearchBarProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue ?? "");
  const router = useRouter();

  React.useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/search?${qs.stringify({ q: value })}`);
  };

  return (
    <Paper
      component="form"
      className={clsx(classes.root, className)}
      onSubmit={onSubmit}
      {...rest}
    >
      <InputBase
        className={classes.input}
        placeholder="Find by by stall, location, or food"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <Search />
      </IconButton>
    </Paper>
  );
}
