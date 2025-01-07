import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Header from "./components/Header";
import { GlobalStyle } from './styles/GlobalStyle';

const theme = {
  background: "#000000",
  text: "#ffffff",
  primary: "#007bff",
  buttonText: "#fff",
  primaryHover: "#0056b3",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
