import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Horários disponiveis</h1>

      {/* <DesktopDatePicker
        label="Selecionar a data de reserva"
        value={value}
        minDate={dayjs("2017-01-01")}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      /> */}

      <label>
        Filtrar horário
        <input type="date" style={{ margin: "5px" }} />
      </label>

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

      <div style={{ marginTop: "1ch", float: "right" }}>
        <Button>Reservar</Button>
      </div>
    </div>
  );
};
