import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';


const PersonsDetails = ({itemId, swapi: {getPeople, getPeopleImg}}) => {
	return (
		<ItemDetails 
			id={itemId}
			getData={getPeople}
			getImgUrl={getPeopleImg(itemId)}
		>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth year" />
			<Record field="eyeColor" label="Eye color" />
		</ItemDetails>
	)
};

export default WithSwapi(PersonsDetails);