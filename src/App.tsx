import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

const MainContent = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem;

  &#hero {
    min-height: calc(100vh - 70px); // Reduced from 80px
    margin-top: 70px; // Reduced from 80px
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
          <Socials />
        </Section>
      </MainContent>
    </>
  );
}

export default App;
