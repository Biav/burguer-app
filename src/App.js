import React, {Component} from 'react';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import ListOrders from './components/Order/ListOrders'
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Route path="/checkout" component={ Checkout } />
          <Route path="/orders" component={ ListOrders }/>
          <Route path="/burger" exact component={ BurguerBuilder } />
          <Route path="/" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
        </Layout>
      </div>
    );
  };
}

export default App;
