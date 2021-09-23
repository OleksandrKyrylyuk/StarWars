import React from 'react';
import { SwapiConsumer  } from '../swapi-service-context'; 

const WithSwapi = (Wrraped) => {
	return (props) => {
		return (
			<SwapiConsumer>
				{
					(swapi) => {
						return <Wrraped {...props} swapi={swapi}/>
					}
				}
			</SwapiConsumer>
		)
	}
}

export default WithSwapi;