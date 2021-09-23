import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';

const StarshipsDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="model" label="Model" />
			<Record field="manufacturer" label="Manufacturer" />
			<Record field="costInCredits" label="Cost in credits" />
			<Record field="length" label="Length" />
			<Record field="crew" label="Crew" />
			<Record field="passengers" label="Passengers" />
			<Record field="cargoCapacity" label="Cargo capacity" />
		</ItemDetails>
	)
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getStarship,
		getImgUrl: swapi.getStarshipImg
	}
}

export default  WithSwapi(StarshipsDetails, mapMethodsToProps);