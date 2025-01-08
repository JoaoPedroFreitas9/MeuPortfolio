import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.highlight};
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;

    .skill {
      background-color: ${({ theme }) => theme.primary};
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.secondary};
        transform: translateY(-5px);
      }

      svg {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.text};
        transition: color 0.3s;

        &:hover {
          color: ${({ theme }) => theme.highlight};
        }
      }

      p {
        color: ${({ theme }) => theme.text};
        font-size: 1rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

const Skills = () => {
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
    <SkillsContainer>
      <h2>Minhas Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            className="skill"
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skills;
