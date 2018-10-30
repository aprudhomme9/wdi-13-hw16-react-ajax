import React, {Component} from 'react';

import {Button, Form, Grid, Segment} from 'semantic-ui-react';


const endPoint = 'https://pokeapi.co/api/v2/pokemon'


class Pokemon extends Component {
	getPokemon = async (req, res) => {
    try {
      const pokemon = await fetch(endPoint);
      const pokemonJS = await pokemon.json();

      return pokemonJS;

    } catch (err) {
      res.send(err)
    }
  }
	render(){






		return(


			<h1>hey</h1>




			)
	}
}


export default Pokemon;