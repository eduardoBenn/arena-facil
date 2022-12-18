import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const ScheduleMatches = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "2em" }}
      >
        Adicionar horários para reserva
      </Typography>

      <Grid container spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={12}>
            <DatePicker
              label="Dia"
              value={null}
              renderInput={(params) => <TextField {...params} />}
              onChange={() => console.log("")}
            />
          </Grid>
          <Grid item xs={3}>
            <DatePicker
              label="Horário inicio"
              value={null}
              renderInput={(params) => <TextField {...params} />}
              onChange={() => console.log("")}
            />
          </Grid>
          <Grid item xs={3}>
            <DatePicker
              label="Horário fim"
              value={null}
              renderInput={(params) => <TextField {...params} />}
              onChange={() => console.log("")}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </>
  );
};
