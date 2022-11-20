import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Admin</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small">
          <Link to="/login">Login</Link>
        </Button>
      </Toolbar>

      {/* TODO: Adicionar espaço p/ remover toolbar abaixo */}
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "end", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
};
