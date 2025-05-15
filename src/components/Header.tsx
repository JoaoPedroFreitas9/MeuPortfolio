import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }

  li {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .cta {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.highlight};
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <div className="logo">Joao Pedro</div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Início
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
      <button className="cta">Baixar CV</button>
    </Nav>
  );
};

export default Header;
