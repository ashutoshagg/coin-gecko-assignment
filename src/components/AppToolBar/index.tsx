import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface IProps {
  name: string | undefined;
}

const AppToolBar = ({ name = "" }: IProps) => {
  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="inherit" component="div">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
