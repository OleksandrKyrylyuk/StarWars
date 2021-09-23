import React from 'react';
import WithData from '../hoc-helper/withData';
import ItemList from '../item-list';
import WithSwapi from '../hoc-helper/withSwapiservices'

const withChildFunction = (Wrraped, fn) => {
	return (props) => {
		return (
			<Wrraped {...props}>
				{fn}
			</Wrraped>
			)
		};
};
const renderPerson = ({ name }) => <span>{name}</span>;
const renderPlanet = ({ name }) => <span>{name}</span>;
const renderStarship = ({ name, model }) => <span>{name} ( {model})</span>

const mapPersonsMethodsToProps = (swapi) => {
	return {
		getData:swapi.getAllPeople
	}
}

const mapPlanetsMethodsToProps = (swapi) => {
	return {
		getData:swapi.getAllPlanets
	}
}

const mapStarshipsMethodsToProps = (swapi) => {
	return {
		getData:swapi.getAllStarships
	}
}


const PersonsList = WithSwapi( WithData(withChildFunction(ItemList, renderPerson)), mapPersonsMethodsToProps);

const PlanetsList = WithSwapi( WithData(withChildFunction(ItemList, renderPlanet)), mapPlanetsMethodsToProps);

const StarshipsList = WithSwapi( WithData(withChildFunction(ItemList, renderStarship)), mapStarshipsMethodsToProps);

export  { PersonsList, PlanetsList, StarshipsList};