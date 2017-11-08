import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <div className='container-fluid'>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
