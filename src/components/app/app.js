import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import  {PersonsPage, PlanetsPage, StarshipsPage}  from '../peges'
import { SwapiProvider } from '../swapi-service-context';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../service/swapiService';
import DummySwapiService from '../../service/dummy-swapi-service'

export default class App extends Component {
  
  

  state = {
    swapi: new SwapiService()
  }

  onSwapiChange = () => {
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
          <PersonsPage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiProvider>
    </ErrorBoundry>
  );
  }
};

 