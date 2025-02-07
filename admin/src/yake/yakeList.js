import * as React from "react";
import { List, ShowButton, DeleteButton, Datagrid, TextField, DateField } from "react-admin";

export const YakeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status_job" label="Type" />
      <DateField source="last_updated" label="Date" showTime={true} />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
