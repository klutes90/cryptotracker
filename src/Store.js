import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import RootReducer from './data/reducers';

const middlewares = [promise, thunk];

const StoreDev = createStore(
  RootReducer,
  compose(
    applyMiddleware(...middlewares),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  ),
);

const StoreProd = createStore(RootReducer, compose(applyMiddleware(...middlewares)));

const Store = process.env.NODE_ENV === 'production' ? StoreProd : StoreDev;

export default Store;
