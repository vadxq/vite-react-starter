import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'virtual:windi.css';
import 'lib-flexible';

if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.add('dark');
else document.documentElement.classList.add('light');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
