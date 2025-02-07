import * as React from "react";
import {
  DeleteButton,
  ArrayField,
  Datagrid,
  BooleanField,
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import ExternalUrlField from "../custom/fields/urlField";

export const SecurityResultsShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ExternalUrlField source="url" />
        <TextField source="score" />
        <ArrayField source="result.tests" fieldKey="name">
          <Datagrid>
            <TextField source="name" />
            <BooleanField source="pass" />
            <TextField source="score_description" />
          </Datagrid>
        </ArrayField>
        <ArrayField source="result.response_headers" fieldKey="name">
          <Datagrid>
            <TextField source="name" />
            <TextField source="value" />
          </Datagrid>
        </ArrayField>

        <EditButton />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  );
};
