import React from "react";
import ReactDOM from "react-dom";

import MovieApp from "./movieApp";

import { Provider } from 'react-redux'
import store from './redux/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <MovieApp />
</Provider>, rootElement);
