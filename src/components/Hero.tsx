import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .hero-content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.highlight};
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.text};
    }

    .social-icons {
      display: flex;
      gap: 1rem;

      a {
        color: ${({ theme }) => theme.text};
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
          color: ${({ theme }) => theme.highlight};
        }
      }
    }
  }
  .hero-image {
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5rem; /* Move a imagem para a esquerda */



    img {
      width: 300px;
      height: 300px; /* Mantém a proporção */
      border-radius: 50%; /* Torna a imagem redonda */
      object-fit: cover; /* Garante que a imagem não fique esticada */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adiciona uma leve sombra */
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="hero-content">
        <h1>João Pedro Freitas</h1>
        <p>Desenvolvedor Web | Apaixonado por Inovação</p>
        <div className="social-icons">
          <a href="https://github.com/JoaoPedroFreitas9" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="src/img/Fotodeperfil.jpg" alt="Hero Profile" />
      </div>
    </HeroSection>
  );
};

export default Hero;
