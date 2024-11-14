import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import MyContextProvider from './context/MyContextProvider.jsx';  // Import your context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyContextProvider>  {/* Wrap your app with the context provider */}
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </StrictMode>
);
