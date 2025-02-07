import * as React from "react";
import { List, ShowButton, DeleteButton, Datagrid, TextField, DateField } from "react-admin";
import ExtenalUrlField from "../custom/fields/urlField";
import { ExtractorFilter } from "./extractorFilter";

export const ExtractorList = (props) => (
  <List {...props} filters={<ExtractorFilter />}>
    <Datagrid>
      <TextField source="website" />
      <ExtenalUrlField source="url" />
      <TextField source="type_audit" label="Type" />
      <TextField source="status_job" label="Type" />
      <DateField source="begin_date" label="Date" />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
