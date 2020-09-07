import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseLine from '@material-ui/core/CssBaseline';
import './i18n';

ReactDOM.render(<React.Suspense fallback>
    <CssBaseLine />
    <App />
  </React.Suspense>,
  document.getElementById('root'))
