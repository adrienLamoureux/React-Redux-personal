import React from "react";
import ReactDOM from "react-dom";

import MovieApp from "./movieApp";

import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <MovieApp />
</Provider>, rootElement);
