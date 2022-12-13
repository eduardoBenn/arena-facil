import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "day",
    headerName: "Dia",
    type: "number",
    width: 110,
  },
  {
    field: "start",
    headerName: "Inicio",
    width: 150,
  },
  {
    field: "end",
    headerName: "Fim",
    width: 150,
  },
];
