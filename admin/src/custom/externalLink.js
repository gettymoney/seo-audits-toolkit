import * as React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ExternalLink = ({ href, title, children }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a href={href} title={title} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <OpenInNewIcon
        fontSize="small"
        titleAccess="Opens in a new tab"
        aria-label="Opens in a new tab"
        style={{ marginLeft: 2, width: 16 }}
      />
    </div>
  );
};

export default ExternalLink;
