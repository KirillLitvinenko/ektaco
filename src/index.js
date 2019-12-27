import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/store';

import App from './Screens/App.jsx';

ReactDOM.render(
  <Provider store={createStore(window.__INITIAL_STATE__)}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
