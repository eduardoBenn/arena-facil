import { useQuerySchedules } from "../../../queries/schedules/useQuerySchedules";
import { SchedulesProps } from "./types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Schedules = (props: SchedulesProps) => {
  const { user } = props;
  const { data } = useQuerySchedules(user);

  return (
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
  );
};
