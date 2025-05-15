import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ThemeType } from "../styles/theme";

const SocialsContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  gap: 2rem; /* Aumente o espaçamento entre os ícones */
  margin-top: 2rem;

  a {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem; /* Aumente o tamanho dos ícones */
    transition: transform 0.3s, color 0.3s;

    &:hover {
      transform: scale(1.2); /* Adicione efeito de escala no hover */
      color: ${({ theme }) =>
        theme.highlight}; /* Alterne para uma cor diferente no hover */
    }
  }
`;

const Socials = () => {
  return (
    <SocialsContainer>
      <a
        href="https://github.com/JoaoPedroFreitas9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-pedro-freitas9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/joaopedroz7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </SocialsContainer>
  );
};

export default Socials;
