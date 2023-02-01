import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/NavBar';
import Carwidget from './components/cartwidget/Carwidget';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Carwidget />
    <App />
  </React.StrictMode>
);

