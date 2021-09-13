import React, { createContext } from "react";
import { ColorProvider } from "./components/color-hooks"
import { render } from 'react-dom';
import App from './App';

export const ColorContext = createContext();

render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
