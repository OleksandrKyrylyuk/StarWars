import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row'

import './personsPage.css'
import SwapiService from '../../service/swapiService';
import ErrorBoundry from '../error-boundry/error-boundry';
import { Record } from '../item-details/item-details';


export default class PersonsPage extends Component {
	swapi = new SwapiService();

	state = {
		selectedItem:5,
	}

	onPersonSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  }

 

	render() {
		const personsList = (<ItemList 
						getData={this.swapi.getAllPeople} 
						onPersonSelected={this.onPersonSelected}
						renderItem={ (el) => `${el.name} (${el.gender})`} />);
		const starshipsList = (<ItemList 
						getData={this.swapi.getAllStarships} 
						onPersonSelected={this.onPersonSelected}
						renderItem={ (el) => `${el.name} (${el.model})`} />);
		
		const personDetails = (
			<ErrorBoundry>
				<ItemDetails 
					id={this.state.selectedItem}
					getData={this.swapi.getPeople}
					getImgUrl={this.swapi.getPeopleImg(this.state.selectedItem)}
				>
					<Record field="gender" label="Gender" />
					<Record field="birthYear" label="Birth year" />
					<Record field="eyeColor" label="Eye color" />
				</ItemDetails> 	
			</ErrorBoundry>
		);
		
		return (
			<Row left={personsList} right={personDetails}/>
		)
	}
}

