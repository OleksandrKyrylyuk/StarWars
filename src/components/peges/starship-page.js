import React, { Component } from 'react';
import { StarshipsDetails, StarshipsList } from '../sw-component';
import Row from '../row';

export default class StarshipsPage extends Component{
	state = {
		selectedItem: null
	} 

	onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
	  return <Row left={ <StarshipsList onItemSelected={this.onItemSelected}/> } right={ <StarshipsDetails itemId={this.state.selectedItem} /> }/>

  }
}