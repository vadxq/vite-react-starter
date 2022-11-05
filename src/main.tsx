import React from 'react';
import ReactDOM from 'react-dom/client';
// import flexible from '@/utils/flexible';
import App from './App';
import './global.css';
import '@/styles/tailwindcss.css';

if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.add('dark');
else document.documentElement.classList.add('light');

// 自定义是否启用rem自定义计算
// flexible(window, document);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
