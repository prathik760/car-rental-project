import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext/Authcontext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    
  <React.StrictMode> 
  <AuthProvider> 
  <StrictMode>
    <App />
    <ToastContainer position="bottom-right" autoClose={3000}></ToastContainer>
  </StrictMode>
  </AuthProvider>
  </React.StrictMode>
  
  ,
)
