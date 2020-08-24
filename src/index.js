import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import reducers from './redux/reducers/index';
import App from './App';

import 'bootswatch/dist/lux/bootstrap.min.css';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    reduxPromise,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

