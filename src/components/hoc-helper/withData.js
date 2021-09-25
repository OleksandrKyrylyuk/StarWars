import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';


const WithData = (View) => {
  return class extends Component {
    state = {
    items: null,
    error: false
  }
  
  componentDidUpdate = (prevProps) => {
    if (prevProps.getData !== this.props.getData) {
      this.update();
    }
  }

  componentDidMount =  () => {
    this.update();
  }

  update = async () => {
    try {
      const items = await this.props.getData();
      this.setState({items});
    }
    catch {
      this.setState({error:true})
    }
  } 

    render(){
      const {items, error} = this.state;
      if (error) return <ErrorIndicator />
      if (!items) return <Spinner />
      return <View {...this.props } items={this.state.items}  />
    }
  }
};

export default WithData;