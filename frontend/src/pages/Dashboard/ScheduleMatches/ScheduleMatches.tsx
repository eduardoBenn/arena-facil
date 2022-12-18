import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                id="time"
                label="Horário inicio"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 150 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                id="time"
                label="Horário fim"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 150 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <DatePicker
                label="Dia"
                value={null}
                renderInput={(params) => <TextField {...params} />}
                onChange={() => console.log("")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Repetir para os próximos dias:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={5}
                label="Age"
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12} style={{ float: "right", marginTop: "1em" }}>
              <Button>Salvar horários</Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Grid>
    </>
  );
};
