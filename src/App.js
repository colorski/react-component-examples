import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import Header from './common/Header';
import Border from './common/Border';
import Main from './common/Main';
import Footer from './common/Footer';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store
}

let initialState = {}
const store = configureStore(initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
          <Header />
          <Border />
          <Main />
          <Border />
          <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
