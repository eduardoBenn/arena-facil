import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const Reservation = () => {
  return (
    <>
      <Typography variant="h6" component="div" style={{ marginBottom: "1em" }}>
        Horários reservados
      </Typography>

      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dia</TableCell>
              <TableCell>Horário Inicio</TableCell>
              <TableCell>Horário Fim</TableCell>
              <TableCell>Pessoa</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Celular</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>19/12/2022</TableCell>
              <TableCell>14:00</TableCell>
              <TableCell>15:00</TableCell>
              <TableCell>Hércules Guetner</TableCell>
              <TableCell>00000000000</TableCell>
              <TableCell>5547999999999</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
