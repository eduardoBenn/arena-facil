import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Account = () => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 150,
    },
    {
      field: "cpf",
      headerName: "CPF",
      width: 150,
    },
    {
      field: "admin",
      headerName: "Admin?",
      width: 150,
    },
  ];

  const rows = [
    {
      id: "1",
      name: "admin",
      email: "eduardo.benn@hotmail.com",
      cpf: "000.000.000-00",
      admin: "TRUE",
    },
    {
      id: "2",
      name: "eduardo benn",
      email: "eduardo.benn@gmail.com",
      cpf: "000.000.000-01",
      admin: "FALSE",
    },
  ];

  return (
    <div>
      <Box sx={{ height: 400, width: "100%", marginTop: "5ch" }}>
        <DataGrid
          rows={rows}
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
