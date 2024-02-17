import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./context/Context";
import './config/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense fallback="Loading">
        <App />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
)
