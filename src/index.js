import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import ResetGlobalStyle from './styles/ResetGlobalStyle';
import {GlobalStyle} from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ResetGlobalStyle/>
  <GlobalStyle/>
    <App />
  </React.StrictMode>
);
