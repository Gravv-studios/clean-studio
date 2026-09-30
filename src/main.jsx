import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DemoStudio from './components/DemoStudio';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {new URLSearchParams(window.location.search).has('demo') ? <DemoStudio /> : <App />}
  </React.StrictMode>
);
