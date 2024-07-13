import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strick mode help detecting errors/warnings in components i.e components is rendred 2 times
  <React.StrictMode>     
    <App />
  </React.StrictMode>
);


reportWebVitals();
