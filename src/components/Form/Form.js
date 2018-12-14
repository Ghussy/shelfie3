import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {
  
  constructor(props) {
    super();
    this.state = {

      input: '',
      imageUrl: '',
      productName: '',
      price: ''
    }
  }


  handleChange(val) {
    
    this.setState({ imageUrl: val.target.value })
    
  };
  handleChangeProduct(val) {
    
    this.setState({ productName: val.target.value })
    
  };
  handleChangePrice(val) {
    
    this.setState({ price: val.target.value })
    
  };





  handleCancel() {
    this.setState({ imageUrl: '' });

  }

  handleClick(val) {

    axios.post('/api/prod', { imageUrl: this.state.imageUrl, productName: this.state.productName, price: this.state.price })
      .then(res => {

        console.log("req received")

      }
      )
  }

  render() {
    return (
      <div>
        <imgpreview>
        </imgpreview>

        <span>Image Url</span><input value={this.state.imageUrl} onChange={e => this.handleChange(e)} />

        <span>Product Name</span> <input value={this.state.productName} onChange={e => this.handleChangeProduct(e)} />

        <span>Price</span> <input value={this.state.price} onChange={e => this.handleChangePrice(e)} />

        <buttons>
          <button onClick={this.handleCancel}  >Cancel</button>
          <button onKeyDown={e => {
            if (e.keyCode === 13) {
              this.handleClick()
            }
          }} >Add to Inventory</button>
        </buttons>
      </div>
    )
  }
}