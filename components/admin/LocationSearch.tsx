import React from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import _ from "lodash";
import axios from "axios";

import { Location } from "modules/locations/entities/location.entity";

interface LocationSearchProps {
  value: Location | null;
  setValue: React.Dispatch<React.SetStateAction<Location | null>>;
  disabled?: boolean;
}

export default function LocationSearch({
  value,
  setValue,
  disabled,
}: LocationSearchProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<Location[]>([]);

  const fetch = React.useMemo(
    () =>
      _.throttle(async (query: string) => {
        const response = await axios.get<Location[]>(
          `/api/v1/search/locations?q=${encodeURIComponent(query)}`
        );
        setOptions(response.data);
      }, 500),
    []
  );

  React.useEffect(() => {
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(inputValue);
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      disabled={disabled}
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : `${option.name} (${option.postalCode})`
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      getOptionSelected={(option, value) => {
        return option?.id === value?.id;
      }}
      onChange={(_: any, newValue: Location | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          label="Add a location"
          variant="outlined"
          fullWidth
        />
      )}
      renderOption={(option) => {
        return (
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography>{`${option.name} (${option.postalCode})`}</Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
