import * as React from "react";
import { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink, useTranslate, ToggleThemeButton } from "react-admin";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import { makeStyles } from "@mui/styles";

import Logo from "./Logo";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const ConfigurationMenu = forwardRef((props, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/configuration"
      primaryText="Configuration"
      leftIcon={<SettingsIcon />}
      onClick={props.onClick}
    />
  );
});

const CustomUserMenu = (props) => <UserMenu {...props}>{/* <ConfigurationMenu /> */}</UserMenu>;

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />} toolbar={<ToggleThemeButton />}>
      <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title" />
      <Logo />
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
