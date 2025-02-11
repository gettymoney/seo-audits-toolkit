import * as React from "react";
import {
  ArrayField,
  Link,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import Button from "@mui/material/Button";
import ExternalUrlField from "../custom/fields/urlField";

const CreateRelatedCommentButton = ({ record }) => {
  return (
    <Button
      component={Link}
      to={{
        pathname: "/extractor/create",
        state: { record: { url: record?.url, website_name: record?.org } },
      }}
    >
      Extract Headers/Images/Links
    </Button>
  );
};

export const SitemapShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="url" />
        <ArrayField source="result" fieldKey="id">
          <Datagrid>
            <ExternalUrlField source="url" />
            <DateField source="last_modified" showTime={true} />
            <CreateRelatedCommentButton />
          </Datagrid>
        </ArrayField>
        <EditButton />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  );
};
