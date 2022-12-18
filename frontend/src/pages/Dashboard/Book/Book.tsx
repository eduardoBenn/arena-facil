import { useState } from "react";
import { Dayjs } from "dayjs";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { buildBookRows, columns, fetchBooks } from "./BookUtils";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BookProps, BookType } from "./types";
import { useQuery } from "react-query";
import axios from "axios";
import { environmentVariables } from "../../../utils/environment-utils";

export const Book = (props: BookProps) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | number>();
  const { data } = useQuery<BookType[]>("bookList", fetchBooks);
  const books = buildBookRows(data || []);

  const submitBooking = () => {
    const conf = {
      method: "post",
      url: `${environmentVariables.API_URL}/api/schedule`,
      data: {
        user: props.user,
        book: selectedBook,
      },
    };

    console.log(conf);

    axios(conf)
      .then((a) => {
        console.log("success", a);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

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
            rows={books}
            columns={columns}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            onRowClick={(row) => setSelectedBook(row.id)}
          />
        </Box>
      </Grid>

      <div style={{ marginTop: "1ch", float: "right" }}>
        <Button onClick={submitBooking} disabled={!selectedBook}>
          Reservar
        </Button>
      </div>
    </Grid>
  );
};
