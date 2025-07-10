import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This imports your styles (make sure index.css is present)
import App from './App'; // This imports your main App component
import reportWebVitals from './reportWebVitals'; // This is optional for now

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // This is optional for performance tracking
