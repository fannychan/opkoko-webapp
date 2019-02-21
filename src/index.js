import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Schedule from './schedule/schedule';
import Landing from './landing/landing';
import Presentation from './speaker/presentation';

ReactDOM.render(
  <>
    <CssBaseline />
    <Schedule />
  </>,
  document.getElementById('root')
);
