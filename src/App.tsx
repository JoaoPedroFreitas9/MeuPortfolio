import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

const theme = {
  background: "#0D0D0D",
  text: "#FFFFFF",
  highlight: "#D95F18",
  primary: "#BF4417",
  secondary: "#731D0A",
  accent: "#D95F18",
  buttonText: "#FFFFFF",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
