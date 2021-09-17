import React, { createContext } from "react";
import { render } from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

export const ColorContext = createContext();

render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);
