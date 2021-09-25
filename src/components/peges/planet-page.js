import React, { Component } from 'react';
import { PlanetsDetails, PlanetsList } from '../sw-component';
import Row from '../row';

export default class PlanetsPage extends Component{
	state = {
		selectedItem: null
	} 

	onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  }

  render() {
	  return <Row left={ <PlanetsList onItemSelected={this.onItemSelected}/> } right={ <PlanetsDetails itemId={this.state.selectedItem} /> }/>
  }
}