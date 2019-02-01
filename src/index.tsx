import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './components/home';

import AppRouter from "./components/appRouter";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  rootElement
)