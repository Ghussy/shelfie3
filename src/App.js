import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {

  constructor(props) {
    super();
    this.state = {

      input: '',
      products: ''
      
    }
  }
    componentDidMount() {
    axios.get("/api/prod").then(res => {
      this.setState({ products: res.data });
    });
  }

    render() {
    return (
      <div className="App">
        <Header />
        <body className='body'>
       
          
           <Form />
          
          <Dashboard />
        </body>
      </div>
    );
  }
}

export default App;
