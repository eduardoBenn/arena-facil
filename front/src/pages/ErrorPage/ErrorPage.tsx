import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Grid xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            Página não encontrada
          </Typography>
          <Button variant="contained">
            <Link to="/" style={{ color: "white" }}>Home</Link>
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/bolamurcha1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>

    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <Container maxWidth="md">
    //     <Grid container spacing={2}>
    //       <Grid xs={6}>
    //         <Typography variant="h1">404</Typography>
    //         <Typography variant="h6">
    //           Não pudemos encontrar esta página
    //         </Typography>
    //         <Button variant="contained">Back Home</Button>
    //       </Grid>
    //       <Grid xs={6}>
    //         <img
    //           src="/bolamurcha1.jpg"
    //           alt="404"
    //           width={500}
    //           height={250}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
  );
};
