import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Book = () => {
  const columns: GridColDef[] = [
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

  const rows = [
    { id: "1", day: "04/12/2022", start: "17:00", end: "18:00" },
    { id: "2", day: "04/12/2022", start: "18:30", end: "19:30" },
  ];

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="day" label="dia" />
          <TextField required id="begin" label="Horário inicio" />
          <TextField required id="end" label="Horário fim" />
        </div>
        <div style={{ marginTop: "1ch" }}>
          <Button variant={"outlined"}>Reset</Button>
          <Button>Submit</Button>
        </div>
      </Box>

      <div style={{ marginTop: "5ch" }}>
        <h1>Horários</h1>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
};
