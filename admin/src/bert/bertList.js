import * as React from "react";
import { List, ShowButton, DeleteButton, Datagrid, TextField, DateField } from "react-admin";

export const BertList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="summary" label="Summary" />
      <TextField source="status_job" label="Result" />
      <DateField source="begin_date" label="Date" />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
