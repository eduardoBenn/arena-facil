import { useQuerySchedules } from "../../../queries/schedules/useQuerySchedules";
import { SchedulesProps } from "./types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Schedules = (props: SchedulesProps) => {
  const { user } = props;
  const { data } = useQuerySchedules(user);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper} style={{ width: "100%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dia</TableCell>
                <TableCell>Inicio</TableCell>
                <TableCell>Fim</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any) => (
                <TableRow>
                  <TableCell>
                    {new Date(row.timestart).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    {new Date(row.timestart).toLocaleTimeString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    {new Date(row.timeend).toLocaleTimeString("pt-BR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "2em" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contactar jogador extra
        </Typography>
        <TableContainer component={Paper} style={{ width: "100%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Whatsapp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Hercules</TableCell>
                <TableCell>
                  <a
                    href="https://wa.me/5547999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrar em contato
                  </a>
                  <WhatsAppIcon style={{ padding: "2px" }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
