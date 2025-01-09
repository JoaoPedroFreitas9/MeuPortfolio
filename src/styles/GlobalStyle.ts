

// Importando a fonte Roboto do Google Fonts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Importando a fonte Roboto */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  /* Resetando o padding e margin para todos os elementos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globais para o corpo da página */
  body {
    font-family: 'Roboto', sans-serif;  /* Definindo a fonte como Roboto */
    background-color: ${({ theme }) => theme.background};  /* Cor de fundo vinda do tema */
    color: ${({ theme }) => theme.text};  /* Cor do texto vinda do tema */
    transition: all 0.3s ease-in-out;  /* Transição suave para todas as mudanças de estilo */
  }

  /* Remover margens dos cabeçalhos */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  /* Estilizando links */
  a {
    text-decoration: none;  /* Remover sublinhado de links */
    color: inherit;  /* Herda a cor do elemento pai */
  }

  /* Remover marcadores e padding de listas */
  ul {
    list-style: none;  /* Remover marcador de lista */
    padding: 0;  /* Remover padding padrão */
  }

  /* Estilo para botões */
  button {
    cursor: pointer;  /* Mostrar o ponteiro do mouse quando o botão for hover */
  }

  @media (max-width: 768px) {
  .project {
    flex-direction: column;
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }
}

body {
  scroll-behavior: smooth;
}


`;
