import React, { Component } from 'react';
import { PersonsDetails, PersonsList } from '../sw-component';
import Row from '../row';

export default class PersonsPage extends Component{
	state = {
		selectedItem: null
	} 

	onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
	  return <Row left={ <PersonsList onItemSelected={this.onItemSelected}/> } right={ <PersonsDetails itemId={this.state.selectedItem} /> }/>
  }
}