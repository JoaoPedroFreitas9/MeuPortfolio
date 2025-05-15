import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ThemeType } from "../styles/theme";
import profileImage from "../assets/Fotodeperfil.jpg";

const HeroContainer = styled(motion.div)<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 1.5rem;
    padding: 0;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.highlight};
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .social-icons {
    display: flex;
    gap: 1.2rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      color: ${({ theme }) => theme.text};
      font-size: 1.8rem;
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.highlight};
        transform: translateY(-3px);
      }
    }
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0.8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;

  img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.highlight};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
    justify-content: center;

    img {
      width: 220px;
      height: 220px;
    }
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <HeroContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Content variants={itemVariants}>
        <motion.h1 variants={itemVariants}>João Pedro Freitas</motion.h1>
        <motion.p variants={itemVariants}>
          Desenvolvedor Web | Apaixonado por Inovação
        </motion.p>
        <motion.div className="social-icons" variants={itemVariants}>
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
        </motion.div>
      </Content>
      <ImageContainer
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={profileImage}
          alt="Hero Profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
