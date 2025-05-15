import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeType } from "../styles/theme";
import flixmaniaImage from "../assets/FlixMania.png";

const ProjectsContainer = styled.div<{ theme: ThemeType }>`
  width: 80%;
  margin: 4rem auto;
  padding: 2rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 2rem;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.highlight};
      margin-bottom: 1rem;
    }

    img {
      width: 80%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      object-fit: cover;
      margin-left: 10%;
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.text};
      line-height: 1.6;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .technologies {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;

      span {
        background: ${({ theme }) => theme.primary};
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 1rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.highlight};
      font-weight: bold;
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "FlixMania",
      description:
        "Aplicação web desenvolvida em ReactJS para explorar filmes, com integração à API TMDb, sistema de favoritos e design responsivo.",
      image: flixmaniaImage,
      link: "https://flixmania.netlify.app/",
      technologies: ["React", "JavaScript", "CSS", "TMDb API"],
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
      image: "https://via.placeholder.com/500x300",
      link: "https://github.com/projeto2",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
      image: "https://via.placeholder.com/500x300",
      link: "https://github.com/projeto3",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <ProjectsContainer>
      <h2>Meus Projetos</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
              Ver Projeto
            </a>
          </div>
        ))}
      </Slider>
    </ProjectsContainer>
  );
};

export default Projects;
