import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Header from "./components/Header";
import { GlobalStyle } from './styles/GlobalStyle';

const theme = {
  background: "#0D0D0D", // Preto neutro para o fundo principal
  text: "#FFFFFF", // Branco para o texto principal
  highlight: "#D95F18", // Laranja queimado para destaques
  primary: "#BF4417", // Vermelho queimado para botões principais
  secondary: "#731D0A", // Vermelho intenso para botões secundários ou hover
  accent: "#D95F18", // Laranja queimado para interações
  buttonText: "#FFFFFF", // Texto branco para botões
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
