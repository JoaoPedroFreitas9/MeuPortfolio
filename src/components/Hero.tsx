import styled from "styled-components";
import { motion } from "framer-motion";
import Socials from "./Socials";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    text-align: left;

    h1 {
      font-size: 1.8rem; /* Ajustado para um tamanho mais equilibrado */
      font-weight: bold;
      line-height: 1.4;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }

  .image-container {
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center; /* Garante que a imagem esteja centralizada */

    img {
      width: 310px; /* Define a largura da imagem */
      height: 310px; /* Define a altura da imagem igual à largura para garantir que seja redonda */
      border-radius: 50%; /* Torna a imagem redonda */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      border: 4px solid ${({ theme }) => theme.primary};
      object-fit: cover; /* Garante que a imagem preencha o contêiner sem distorção */
    }
  }

  @media (max-width: 1024px) {
    .content h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .content {
      max-width: 90%;
    }

    .content h1 {
      font-size: 1.6rem;
    }

    .image-container img {
      width: 200px;
      height: 200px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
<br/>
<br/>

          Bem-vindo ao meu portfólio digital. Sou desenvolvedor web, focado em
          criar soluções inovadoras e de alta qualidade. Explore meus projetos e
          veja como minha experiência pode atender às suas necessidades de forma
          eficaz.
        </h1>

        <Socials />
      </motion.div>

      <motion.div
        className="image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="src/img/Fotodeperfil.jpg" alt="Sua Foto" />
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;
