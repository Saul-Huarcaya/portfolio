import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {HashRouter} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
