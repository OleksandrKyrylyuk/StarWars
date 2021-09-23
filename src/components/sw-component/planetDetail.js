import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';

const PlanetsDetails = ({itemId, swapi: {getPlanet, getPlanetImg}}) => {
	return (
		<ItemDetails 
			id={itemId}
			getData={getPlanet}
			getImgUrl={getPlanetImg(itemId)}
		>
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation period" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	)
};

export default WithSwapi(PlanetsDetails);