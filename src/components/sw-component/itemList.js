import React from 'react';
import SwapiService from '../../service/swapiService';
import WithData from '../hoc-helper/withData';
import ItemList from '../item-list';

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

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


const PersonsList = WithData(withChildFunction(ItemList, renderPerson), getAllPeople);

const PlanetsList = WithData(withChildFunction(ItemList, renderPlanet), getAllPlanets);

const StarshipsList = WithData(withChildFunction(ItemList, renderStarship), getAllStarships);

export  { PersonsList, PlanetsList, StarshipsList};