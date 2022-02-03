import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TranslatorProvider } from './services/translate' // Required to use i18n on the app
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <TranslatorProvider>
      <App />
    </TranslatorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
