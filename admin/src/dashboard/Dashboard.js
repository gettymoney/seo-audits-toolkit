import { useMediaQuery } from "@mui/material";
import React, { useEffect, useCallback } from "react";
import { useDataProvider } from "react-admin";
import Welcome from "./Welcome";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

export const Dashboard = () => {
  const dataProvider = useDataProvider();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const fetchLighthouse = useCallback(async () => {
    const { data } = await dataProvider.getList("lighthouse", {
      filter: { scheduled: "true" },
      sort: { field: "date", order: "DESC" },
      pagination: { page: 1, perPage: 100 },
    });
    console.log(data);
  });

  useEffect(() => {
    fetchLighthouse();
  }, []);

  return isXSmall ? (
    <div>
      <div style={styles.flexColumn}>
        <Welcome />
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn}>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
    </div>
  ) : (
    <>
      <Welcome />
    </>
  );
};
