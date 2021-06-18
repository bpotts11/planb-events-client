import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { PlanB } from './components/PlanB'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlanB />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
