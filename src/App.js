import React, {Component} from 'react';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import ListOrders from './components/Order/ListOrders'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginActions from './store/actions';
import './App.css';

class App extends Component {

  componentDidMount() {
      this.props.checkLogin();
  }

  render () {
    let login;

    if(this.props.token) {
      login = <Redirect to="/burger"></Redirect>
    }

    return (
      <div className="App">
        {login}
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

const mapStateToProps = state => {
  return {
      token: state.loginUser.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: () => dispatch(loginActions.checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
