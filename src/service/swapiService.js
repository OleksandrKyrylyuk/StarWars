export default class SwapiService {
	_apiBase = `https://swapi.dev/api`;

	async getResource (url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error (`Cound not fetch. Status:  ${res.status}`)
		}
		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return await res.results.map(el => this._transformPerson(el));
	};

	getPeople = async (id) => {
		const res = await this.getResource(`/people/${id}`);
		return  this._transformPerson(res)
	};

	getAllPlanets = async() => {
		const res = await this.getResource(`/planets/`);
		return await res.results.map( el => this._transformPlanet(el));
	};

	getPlanet = async (id) => {
		const res = await this.getResource(`/planets/${id}`);
		return this._transformPlanet(res);
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return await res.results.map(el => this._transformStarship(el));
	};

	getStarship = async (id) => {
		const res = await this.getResource(`/starships/${id}`);
		return this._transformStarship(res)
	};

	getPeopleImg (id) {
		return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
	}
	getStarshipImg (id) {
		return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
	}
	getPlanetImg (id) {
		return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
	}


	_getId (url) {
		const regExp = /\/([0-9]*)\/$/;
		return url.match(regExp)[1];
	}

	_transformPlanet (planet) {
		return {
			id: this._getId(planet.url),
			name:planet.name,
			population:planet.population,
			rotationPeriod: planet.rotation_period,
			diameter:planet.diameter
		}
	}

	_transformStarship(starship) {
    return {
      id: this._getId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson(person) {
    return {
      id: this._getId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}


