import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import SwapiService from '../../service/swapiService'

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };



constructor() {
  super();
  this.updatePlanet();
};

onError = () => {
  this.setState({
    loading: false,
    error: true
  });
}

 updatePlanet = async () =>  {
   try {
     const id = Math.floor(Math.random()*25) + 2; 
     const res = await this.swapi.getPlanet(id);
      this.setState({
        planet: res,
        loading: false
      })
   }

  catch {
    this.onError();
  }
};


  render() {
    const { planet, loading, error } = this.state;
    let spiner = loading ? <Spinner /> :  null;
    let planetView = !loading && !error ? <PlanetView planet={planet}/> : null;
    let err = error ? <ErrorIndicator /> : null;
    return (
      <div className="random-planet">
        {spiner}
        {planetView}
        {err}
      </div>

    );
  }
}


const PlanetView = ( { planet } ) => {
 
const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <>
    <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             alt= "planet"/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </>
  )
}
