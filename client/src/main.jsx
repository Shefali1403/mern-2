import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './store/Auth.jsx';
import {ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>

  <React.StrictMode>
  <BrowserRouter>

    <App />
    <ToastContainer/>
  </BrowserRouter>
  </React.StrictMode>
  </AuthProvider>
)
