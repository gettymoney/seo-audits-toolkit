import * as React from "react";
import { SimpleShowLayout, Show, TextField, useRecordContext } from "react-admin";
import { Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";
import ExternalLink from "../custom/externalLink";

const TagsField = () => {
  const record = useRecordContext();

  if (!record || !record.result) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    try {
      switch (record.type_audit) {
        case "HEADERS": {
          const headersResults = JSON.parse(record.result.replaceAll("'", '"'));
          return (
            <div>
              {Object.entries(headersResults).map(
                ([key, data]) =>
                  data.count > 0 && (
                    <div key={key}>
                      <h3>{key}</h3>
                      <ul>
                        {data.values.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          );
        }

        case "IMAGES": {
          const imagesResults = JSON.parse(
            record.result.replaceAll("'", '"').replaceAll("None", '"None"')
          );
          return (
            <div className="table-responsive">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Alt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {imagesResults.images.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <img
                            alt=""
                            className="img-exact"
                            style={{ width: "100%", maxWidth: "40px" }}
                            src={item.url}
                          />
                        </a>
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.alt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          );
        }

        case "LINKS": {
          const linksResults = JSON.parse(
            record.result.replaceAll("'", '"').replaceAll("None", '"None"')
          );
          return (
            <div className="table-responsive">
              {Object.entries(linksResults).map(([key, links], index) => (
                <Table key={index} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h2>Status Code: {key}</h2>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {links.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <ExternalLink href={item} title={decodeURIComponent(item)}>
                            {decodeURIComponent(item)}
                          </ExternalLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ))}
            </div>
          );
        }

        default:
          return <div>Unsupported audit type: {record.type_audit}</div>;
      }
    } catch (error) {
      console.error("Error parsing results:", error);
      return <div>Error parsing data. Please check the console for more details.</div>;
    }
  };

  return renderContent();
};

export const ExtractorShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="url" />
      <TextField source="type_audit" />
      <TextField source="status_job" />
      <TagsField />
    </SimpleShowLayout>
  </Show>
);
