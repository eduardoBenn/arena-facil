import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { MenuItens } from "./MenuAdminUtils";
import { Link } from "react-router-dom";
import { MenuAdminProps } from "./types";

export const MenuAdmin = (props: MenuAdminProps) => {
  const { admin } = props;
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {MenuItens.map((item, index) => {
            if (item.isAdmin && !admin) {
              return;
            }

            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                  <ListItemText>
                    <Link to={item.url}>{item.itemText}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
