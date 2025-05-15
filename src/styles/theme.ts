export interface ThemeType {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  highlight: string;
  surface: string;
  border: string;
  textSecondary: string;
}

export const darkTheme: ThemeType = {
  background: "#0A192F", // Azul Escuro
  text: "#FFFFFF", // Branco Puro
  primary: "#007ACC", // Azul Elétrico
  secondary: "#E5E5E5", // Cinza Claro
  highlight: "#2EF2B2", // Verde Menta
  surface: "#0A192F", // Azul Escuro
  border: "#7A7A7A", // Cinza Médio
  textSecondary: "#7A7A7A", // Cinza Médio
};

export const lightTheme: ThemeType = {
  background: "#E5E5E5", // Cinza Claro
  text: "#0A192F", // Azul Escuro
  primary: "#007ACC", // Azul Elétrico
  secondary: "#FFFFFF", // Branco Puro
  highlight: "#2EF2B2", // Verde Menta
  surface: "#FFFFFF", // Branco Puro
  border: "#7A7A7A", // Cinza Médio
  textSecondary: "#7A7A7A", // Cinza Médio
};
