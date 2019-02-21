import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Root from './components/root';

ReactDOM.render(
  <BrowserRouter>
    <>
      <CssBaseline />
      <Root />
    </>
  </BrowserRouter>,
  document.getElementById('root')
);
