import React from 'react';  
import ReactDOM from 'react-dom/client'; // Update the import  
import App from './components/App.js';  
import './index.css'; // Your global styles, if any  

// Create a root  
const root = ReactDOM.createRoot(document.getElementById('root'));  

// Render your App  
root.render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
);