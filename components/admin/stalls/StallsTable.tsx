import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  TextField,
} from "@material-ui/core";

import { Stall } from "modules/stalls/entities/stall.entity";

interface StallsTableProps {
  stalls: Stall[];
}
export default function StallsTable({ stalls }: StallsTableProps) {
  const [filteredStalls, setFilteredStalls] = React.useState(stalls);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setFilteredStalls(stalls);
    setSearch("");
  }, [stalls]);

  if (!stalls) {
    return <LinearProgress />;
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TextField label="Search" fullWidth />
          {stalls.map((stall) => (
            <TableRow key={stall.name}>
              <TableCell>{stall.name}</TableCell>
              <TableCell>{stall.location.name}</TableCell>
              <TableCell>
                {new Date(stall.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                {new Date(stall.updatedAt).toLocaleString()}
              </TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
