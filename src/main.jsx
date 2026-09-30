import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// Este projeto contém apenas o site. CRM: ../crm-studio-clean.
const Application = lazy(() => import('./App'));
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode><Suspense fallback={<p style={{padding:32}}>Carregando Studio Clean…</p>}><Application /></Suspense></React.StrictMode>
);
