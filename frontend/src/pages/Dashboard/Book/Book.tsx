import * as React from "react";
import { Dayjs } from "dayjs";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { columns } from "./BookUtils";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Book = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ paddingLeft: 0 }}>
        <Typography variant="h4">Horários disponiveis</Typography>
      </Grid>

      <Grid xs={12} marginTop={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Filtrar horário"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>

      <Grid xs={12}>
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
      </Grid>

      <div style={{ marginTop: "1ch", float: "right" }}>
        <Button>Reservar</Button>
      </div>
    </Grid>
  );
};
