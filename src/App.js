import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import List from './containers/ListContainer'

import SayHello from './components/SayHello'
import SecondsTimer from './components/SecondsTimer'
import TodoList from './components/TodoList'
import UseCountdown from './components/UseCountdown'

import UseIcon from './components/UseIcon'
import UseGlobalMessager from './components/UseGlobalMessager'
import UseRadioGroup from './components/UseRadioGroup'
import UseSelect from './components/UseSelect'
import UseModal from './components/UseModal'
import UsePager from './components/UsePager'
import UsePopOver from './components/UsePopOver'
import UseCopy from './components/UseCopy'

import UseMobileFlex from './components/UseMobileFlex'
import UseMobileTimeline from './components/UseMobileTimeline'
import UseMobileSelect from './components/UseMobileSelect'

import Header from './common/Header';
import Border from './common/Border';
import Footer from './common/Footer';

import Globals from './containers/GlobalsContainer'

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
          <Globals />
          <Header />
          <Border />
          <div className="main-wrapper">
            <Switch>
              {/* 主页面-列表页面 */}
              <Route path="/" exact render={()=><List />}></Route>

              {/* exercise */}
              <Route path="/SayHello" render={()=><SayHello name="React" />}></Route>
              <Route path="/SecondsTimer" render={()=><SecondsTimer />}></Route>
              <Route path="/TodoList" render={()=><TodoList />}></Route>
              <Route path="/UseCountdown" render={()=><UseCountdown />}></Route>

              {/* production */}
              <Route path="/UseIcon" render={()=><UseIcon />}></Route>
              <Route path="/UseGlobalMessager" render={()=><UseGlobalMessager />}></Route>
              <Route path="/UseRadioGroup" render={()=><UseRadioGroup />}></Route>
              <Route path="/UseSelect" render={()=><UseSelect />}></Route>
              <Route path="/UseModal" render={()=><UseModal />}></Route>
              <Route path="/UsePager" render={()=><UsePager />}></Route>
              <Route path="/UsePopOver" render={()=><UsePopOver />}></Route>
              <Route path="/UseCopy" render={()=><UseCopy />}></Route>

              {/* mobile */}
              <Route path="/UseMobileFlex" render={()=><UseMobileFlex />}></Route>
              <Route path="/UseMobileTimeline" render={()=><UseMobileTimeline />}></Route>
              <Route path="/UseMobileSelect" render={()=><UseMobileSelect />}></Route>
            </Switch>
          </div>
          <Border />
          <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
