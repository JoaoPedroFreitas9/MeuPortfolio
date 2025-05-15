import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { ThemeType } from "../styles/theme";

const SkillsContainer = styled(motion.div)<{ theme: ThemeType }>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 1.5rem 0;

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.highlight};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.highlight};
    transition: all 0.3s ease;
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <SkillsContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Minhas Habilidades</motion.h2>
      <SkillsGrid variants={containerVariants}>
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
              background: "rgba(46, 242, 178, 0.1)", // Verde Menta com transparência
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
