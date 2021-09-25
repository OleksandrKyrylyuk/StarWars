import React from 'react';
import { PersonsDetails, PersonsList } from '../sw-component';
import Row from '../row';
import { withRouter } from 'react-router';

const PersonsPage = ({history, match}) => {
	return <Row left={ <PersonsList onItemSelected={ (id) => history.push(id)}/> } right={ <PersonsDetails itemId={match.params.id} /> }/>
}

export default withRouter(PersonsPage);