import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/Header';
import Border from './common/Border';
import Main from './common/Main';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        <Header />
        <Border />
        <Main />
        <Border />
        <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
