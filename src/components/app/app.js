import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PersonsList, PlanetsList, StarshipsList, 
        PersonsDetails, PlanetsDetails, StarshipsDetails} from '../sw-component'

import { SwapiProvider } from '../swapi-service-context';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../service/swapiService';

export default class App extends Component {
  
  swapi = new SwapiService();

  state = {
    selectedPerson: 2
  }

  

  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={this.swapi}>
        <div className="container">
          <Header />
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

 