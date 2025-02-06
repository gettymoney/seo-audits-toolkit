import * as React from "react";
import { SimpleShowLayout, Show, TextField } from "react-admin";
import { Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";

export const BertShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="result" />
      <TextField source="text" />
    </SimpleShowLayout>
  </Show>
);
