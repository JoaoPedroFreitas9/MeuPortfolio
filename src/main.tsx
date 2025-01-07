import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css'; // Importação do CSS global
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
