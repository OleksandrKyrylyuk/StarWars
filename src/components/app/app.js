import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PersonsList, PlanetsList, StarshipsList, 
        PersonsDetails, PlanetsDetails, StarshipsDetails} from '../sw-component'

import { SwapiProvider } from '../swapi-service-context';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../service/swapiService';
import DummySwapiService from '../../service/dummy-swapi-service'

export default class App extends Component {
  
  

  state = {
    selectedPerson: 2,
    swapi: new DummySwapiService()
  }

  onSwapiChange = () => {
    console.log('working');
    this.setState( ({swapi}) => {
      let service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
        return {
          swapi: new service()
        }
    })
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.state.swapi}>
        <div className="container">
          <Header onSwapiChange={this.onSwapiChange}/>
          <RandomPlanet />
          <PersonsList /> 
          <PlanetsList />
          <StarshipsList />
          <PersonsDetails itemId={12} />
          <PlanetsDetails itemId={3} />
          <StarshipsDetails itemId={5}/>
        </div>
      </SwapiProvider>
    </ErrorBoundry>
  );
  }
};

 