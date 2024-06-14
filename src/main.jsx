import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./context/Context";
import './config/i18n.js';

import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => (
  <div className="h-svh flex justify-center items-center">
    <span className='text-center'>
      <AiOutlineLoading className='mx-auto animate-spin duration-75'/>
      <div>loading...</div>
    </span>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense fallback={Loader()}>
        <App />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
)
