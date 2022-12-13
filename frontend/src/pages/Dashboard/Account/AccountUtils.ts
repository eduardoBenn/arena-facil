import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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
