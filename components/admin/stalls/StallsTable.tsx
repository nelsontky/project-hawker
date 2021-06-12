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
  IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import _ from "lodash";
import { useRouter } from "next/router";

import EditStallDialog from "components/admin/stalls/EditStallDialog";

import { Stall } from "modules/stalls/entities/stall.entity";

interface StallsTableProps {
  stalls: Stall[];
}
export default function StallsTable({ stalls }: StallsTableProps) {
  const router = useRouter();
  const [filteredStalls, setFilteredStalls] = React.useState(stalls);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setFilteredStalls(stalls);
    setSearch("");
  }, [stalls]);

  const filterStalls = _.throttle((term: string) => {
    if (term !== "") {
      setFilteredStalls((filteredStalls) =>
        filteredStalls.filter(
          (stall) =>
            stall.name.toLowerCase().includes(term.toLowerCase()) ||
            stall.location.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setFilteredStalls(stalls);
    }
  }, 100);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const term = e.target.value;
    setSearch(term);
    filterStalls(term);
  };

  if (!filteredStalls) {
    return <LinearProgress />;
  }
  return (
    <>
      <EditStallDialog />
      <TableContainer component={Paper}>
        <TextField
          value={search}
          onChange={handleSearchChange}
          label="Search"
          fullWidth
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Edit</TableCell>
              {/* <TableCell>Delete</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStalls.map((stall) => (
              <TableRow key={stall.name}>
                <TableCell>{stall.name}</TableCell>
                <TableCell>{stall.location.name}</TableCell>
                <TableCell>
                  {new Date(stall.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(stall.updatedAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      router.push(
                        `/admin/stalls?edit=${encodeURIComponent(stall.id)}`
                      );
                    }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
                {/* <TableCell>Delete</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
