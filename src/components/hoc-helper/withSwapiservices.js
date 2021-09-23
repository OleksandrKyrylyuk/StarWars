import React from 'react';
import { SwapiConsumer  } from '../swapi-service-context'; 

const WithSwapi = (Wrraped, mapMethodsToProps) => {
	
	return (props) => {
		return (
			<SwapiConsumer>
				{
					(swapi) => {
						let methods = mapMethodsToProps(swapi)
						return <Wrraped {...props} {...methods}/>
					}
				}
			</SwapiConsumer>
		)
	}
}

export default WithSwapi;