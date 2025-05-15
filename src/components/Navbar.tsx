import { useState } from "react";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";

const Nav = styled.nav<{ theme: ThemeType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 100%;
    margin-top: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <h1>Meu Portfólio</h1>
      <MenuButton onClick={toggleMenu}>{isOpen ? "✖" : "☰"}</MenuButton>
      <NavLinks isOpen={isOpen}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
