import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { createFrontloadState } from 'react-frontload';
import i18n from 'Configs/i18n';

const frontloadState = createFrontloadState.client({
  context: {},
  serverRenderedData: window._clientData
});

hydrate(
  <BrowserRouter>
    <App frontloadState={frontloadState} />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
