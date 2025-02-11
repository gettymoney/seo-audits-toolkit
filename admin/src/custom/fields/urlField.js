import * as React from "react";
import { UrlField } from "react-admin";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ExternalUrlField = ({ source, record }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <UrlField source={source} target="_blank" rel="noopener noreferrer" record={record} />
      <OpenInNewIcon
        fontSize="small"
        titleAccess="Opens in a new tab"
        aria-label="Opens in a new tab"
        style={{ marginLeft: 2, width: 16 }}
      />
    </div>
  );
};

export default ExternalUrlField;
