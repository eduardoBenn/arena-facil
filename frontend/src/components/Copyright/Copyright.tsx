import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Arena Fácil
      </Link>
    </Typography>
  );
};
