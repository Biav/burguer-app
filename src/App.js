import React, {Component} from 'react';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <BurguerBuilder/>
        </Layout>
      </div>
    );
  };
}

export default App;
