import styled from "styled-components";
import { ThemeType } from "../styles/theme";

const Section = styled.section<{ theme: ThemeType }>`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <Section id="about">
      <h2>Sobre Mim</h2>
      <Content>
        <p>
          Sou João Pedro Braga Freitas, um desenvolvedor web altamente motivado,
          com grande paixão por criar soluções inovadoras e eficientes. Tenho
          experiência sólida em tecnologias como JavaScript, React e TypeScript,
          e sou focado em proporcionar uma experiência excepcional para os
          usuários. Estou constantemente em busca de aprender novas tecnologias
          e aprimorar minhas habilidades. Meu objetivo é ajudar empresas e
          projetos a crescerem por meio de soluções criativas, funcionais e
          escaláveis, contribuindo para o sucesso de cada iniciativa em que me
          envolvo.
        </p>
      </Content>
    </Section>
  );
};

export default About;
