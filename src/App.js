import React from 'react';
import { Switch } from 'react-router-dom';
import AppRouter from 'Configs/router/AppRouter';
import { FrontloadProvider } from 'react-frontload';
import 'Assets/styles/app.scss';

const App = ({ frontloadState }) => (
  <FrontloadProvider initialState={frontloadState}>
    <Switch>
      <AppRouter />
    </Switch>
  </FrontloadProvider>
);

export default App;
