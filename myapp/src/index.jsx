import React from 'react';
import ReactDOM from 'react-dom';
import Context from './context';
import GlobalStyles from './GlobalStyles'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
