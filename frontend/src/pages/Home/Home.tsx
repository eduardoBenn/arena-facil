import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Header } from "../../components/Header";
import { MainFeaturedPost } from "../../components/MainFeaturedPost";
import { FeaturedPost } from "../../components/FeaturedPost";
import { Footer } from "../../components/Footer";
import { featuredPosts, mainFeaturedPost } from "./HomeUtils";

const theme = createTheme();

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Arena Fácil" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};
