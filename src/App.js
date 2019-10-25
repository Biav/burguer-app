import React, {Component} from 'react';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './components/Checkout/Checkout';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Route path="/checkout" component={ Checkout } />
          <Route path="/" exact component={ BurguerBuilder } />
        </Layout>
      </div>
    );
  };
}

export default App;
