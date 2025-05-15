import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import { ThemeType } from "../styles/theme";

const Section = styled.section<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Button = styled.a<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contato</h2>
      <br />
      <p>
        Se você quiser saber mais sobre meu trabalho ou colaborar comigo, faça o
        download do meu currículo abaixo!
      </p>
      <br />
      <Button
        href="/João Pedro Freitas - Desenvolvedor Front-End - Curriculo.pdf"
        download
      >
        <AiOutlineDownload />
        Download CV
      </Button>
    </Section>
  );
};

export default Contact;
