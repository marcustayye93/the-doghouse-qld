import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SiteRoutes } from './SiteRoutes';
import './index.css';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <BrowserRouter basename={(import.meta.env.VITE_PREVIEW_BASE || '').replace(/\/$/, '') || undefined}>
      <SiteRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
