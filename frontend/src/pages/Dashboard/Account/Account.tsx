import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

export const Account = () => {
  return (
    <>
      <Typography variant="h6" component="div" style={{ marginBottom: "1em" }}>
        Usuários
      </Typography>

      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Sobrenome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Exclusão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Eduardo</TableCell>
              <TableCell>Bennertz</TableCell>
              <TableCell>00000000000</TableCell>
              <TableCell>eduardo.benn@hotmail.com</TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hercules</TableCell>
              <TableCell>Guetner</TableCell>
              <TableCell>00000000001</TableCell>
              <TableCell>hercules@gmail.com</TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
