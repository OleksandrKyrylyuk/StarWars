import React, { Component } from 'react';
import Spinner from '../spinner';


const WithData = (View) => {
  return class extends Component {
    state = {
    items: null
  }
  
  componentDidMount = async () => {
    const items = await this.props.getData();
    this.setState({items});
  }

    render(){
      const {items} = this.state;
      if (!items) return <Spinner />
      return <View {...this.props } items={this.state.items}  />
    }
  }
};

export default WithData;