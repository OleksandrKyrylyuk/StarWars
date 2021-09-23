import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';

const PlanetsDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation period" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	)
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getPlanet,
		getImgUrl: swapi.getPlanetImg
	}
}

export default WithSwapi(PlanetsDetails, mapMethodsToProps);