import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Copyright } from "../Copyright/Copyright";

interface FooterProps {
  description: string;
  title: string;
}

export const Footer = (props: FooterProps) => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        {/* <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography> */}
        <Copyright />
      </Container>
    </Box>
  );
};
