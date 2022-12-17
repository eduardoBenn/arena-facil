import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { environmentVariables as env } from "../../../utils/environment-utils";
import { BookType } from "./types";

export const columns: GridColDef[] = [
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

export const fetchBooks = async (): Promise<BookType[]> => {
  const response = await axios.get(`${env}/api/book`);
  return response.data.result;
};

export const buildBookRows = (books: BookType[]) => {
  return (
    books?.map((book) => {
      return {
        id: book._id,
        day: new Date(book.timeend).toLocaleDateString("pt-BR"),
        start: new Date(book.timestart).toLocaleTimeString("pt-BR"),
        end: new Date(book.timeend).toLocaleTimeString("pt-BR"),
      };
    }) || []
  );
};
