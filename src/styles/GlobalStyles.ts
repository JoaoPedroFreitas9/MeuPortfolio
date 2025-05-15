import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.highlight};
    transition: color 0.3s ease;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin: 0.5rem 0;
    background: linear-gradient(120deg, ${(props) => props.theme.highlight}, ${(
  props
) => props.theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  section {
    padding: 2rem 1.5rem;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        ${(props) => props.theme.border},
        transparent
      );
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea {
    font-family: inherit;
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.surface};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${(props) => props.theme.highlight};
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.primary};
      box-shadow: 0 0 0 2px ${(props) => props.theme.primary}33;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 1.5rem 1rem;
      min-height: auto;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;
