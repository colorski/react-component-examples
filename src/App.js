import React, { Component } from 'react';
import Header from './common/Header';
import Border from './common/Border';
import List from './common/List';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Border />
        <List />
        <Border />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
