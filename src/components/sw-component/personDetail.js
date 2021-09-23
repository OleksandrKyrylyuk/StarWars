import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-details';
import WithSwapi from '../hoc-helper/withSwapiservices';


const PersonsDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth year" />
			<Record field="eyeColor" label="Eye color" />
		</ItemDetails>
	)
};

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getPeople,
		getImgUrl: swapi.getPeopleImg
	}
}

export default WithSwapi(PersonsDetails, mapMethodsToProps);