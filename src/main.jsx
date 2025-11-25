import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './roster.css';   
import Roster from './roster.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Roster />
  </StrictMode>
);
