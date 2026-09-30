import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// O build público não inclui o CRM. Ele tem modo e servidor próprios.
const Application = import.meta.env.MODE === 'crm'
  ? lazy(() => import('./crm/CrmApp'))
  : lazy(() => import('./App'));
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode><Suspense fallback={<p style={{padding:32}}>Carregando Studio Clean…</p>}><Application /></Suspense></React.StrictMode>
);
