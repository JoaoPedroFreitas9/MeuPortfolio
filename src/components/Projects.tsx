import styled from "styled-components";


const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const projectList = [
    {
      title: "Projeto 1",
      description: "Descrição breve do projeto 1.",
      link: "#",
    },
    {
      title: "Projeto 2",
      description: "Descrição breve do projeto 2.",
      link: "#",
    },
    {
      title: "Projeto 3",
      description: "Descrição breve do projeto 3.",
      link: "#",
    },
  ];

  return (
    <Section id="projects">
      <h2>Meus Projetos</h2>
      <p>Aqui estão alguns dos projetos que desenvolvi:</p>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

export default Projects;
