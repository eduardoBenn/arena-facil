import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { columns } from "./AccountUtils";

export const Account = () => {
  return (
    <div>
      <Box sx={{ height: 400, width: "100%", marginTop: "5ch" }}>
        <DataGrid
          rows={[]}
          checkboxSelection
          columns={columns}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <h5>*Somente usuários admins possuem acesso a esta página</h5>

      <div style={{ marginTop: "1ch", float: "right" }}>
        <Button>Tornar admin</Button>
      </div>
    </div>
  );
};
