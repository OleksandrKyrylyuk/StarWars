import React from 'react';
import { StarshipsList } from '../sw-component';
import { withRouter } from 'react-router';

const  StarshipsPage = ({history}) => {

	  return (<StarshipsList onItemSelected={ id =>  history.push(id) }/>) 
}

export default withRouter(StarshipsPage);