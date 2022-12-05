import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Users = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="name" label="Nome" />
        <TextField required id="name" label="E-mail" />
        <TextField required id="name" label="Password" />
        <TextField required id="name" label="CPF" />
      </div>
      <div style={{ marginTop: "5ch" }}>
        <Button variant={"outlined"}>Reset</Button>
        <Button>Submit</Button>
      </div>
    </Box>
  );
};
