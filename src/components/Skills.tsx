import styled from "styled-components";
import { SiJavascript, SiReact, SiTypescript, SiCss3, SiNodedotjs } from "react-icons/si";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
    transition: color 0.3s;

    &:hover {
      color: #61dafb; /* Cor para hover */
    }
  }
`;

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
  ];

  return (
    <Section id="skills">
      <h2>Minhas Skills</h2>
      <p>Aqui estão as tecnologias e ferramentas que eu domino:</p>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;
