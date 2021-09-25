import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {StarshipsDetails} from '../sw-component'
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
        <Router>
          <div className="container">
            <Header onSwapiChange={this.onSwapiChange}/>
            <RandomPlanet />
            <Route path="/" exact render={ () => {return (<h2>StarDB home</h2>)}}/>
            <Route path="/people/:id?" component={PersonsPage}/>
            <Route path="/planet/" component={PlanetsPage}/>
            <Route path="/starship/" exact component={StarshipsPage}/>
            <Route path="/starship/:id" render={
              ({match}) => {
                const { id } = match.params;
                return (<StarshipsDetails itemId={id} />)
              }
            }/>
          </div>
        </Router>
      </SwapiProvider>
    </ErrorBoundry>
  );
  }
};

 