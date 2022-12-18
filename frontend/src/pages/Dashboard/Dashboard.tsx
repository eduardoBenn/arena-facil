import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Appbar } from "../../components/Appbar";
import { MenuAdmin } from "../../components/MenuAdmin";
import { Outlet } from "react-router-dom";
import { DashboardProps } from "./types";
import { useQueryUser } from "../../queries/user/useQueryUser";

export const Dashboard = (props: DashboardProps) => {
  const { data, isLoading } = useQueryUser(props.user);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      {!isLoading && (
        <>
          <MenuAdmin admin={data.admin} />
          <Box component="main" style={{ width: "100%", padding: "2em" }}>
            <Toolbar />
            <Outlet />
          </Box>
        </>
      )}
    </Box>
  );
};
