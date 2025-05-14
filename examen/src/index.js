import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/global.css';
import AppRouter from './Router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);



