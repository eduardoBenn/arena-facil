import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Appbar } from "../../components/Appbar";
import { MenuAdmin } from "../../components/MenuAdmin";
import { Outlet } from "react-router-dom";
import { DashboardTypes } from "./types";

export const Dashboard = (props: DashboardTypes) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />

      <MenuAdmin />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
