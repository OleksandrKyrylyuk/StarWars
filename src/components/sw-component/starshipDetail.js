import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';

const StarshipsDetails = ({itemId, swapi: {getStarship, getStarshipImg}}) => {
	return (
		<ItemDetails 
			id={itemId}
			getData={getStarship}
			getImgUrl={getStarshipImg(itemId)}
		>
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

export default  WithSwapi(StarshipsDetails);