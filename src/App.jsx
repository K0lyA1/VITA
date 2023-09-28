import React from 'react';
import Routes from './Routes';
import Menu from './Menu';
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="continer">
      <Router>
        <Menu />
        <Routes />
      </Router>
    </div>
  );
}
