import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';
import Root from './Components/root';

ReactDOM.render(
  <BrowserRouter>
    <>
      <CssBaseline />
      <Root />
    </>
  </BrowserRouter>,
  document.getElementById('root')
);
