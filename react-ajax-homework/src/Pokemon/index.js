import React, {Component} from 'react';

import {Button, Form, Grid, Segment} from 'semantic-ui-react';



class Pokemon extends Component {
	

	render(){
		const pokemon = this.props.pokemon.map((pokemon, i) => {
			return <li key={i}>
						<img src={pokemon.sprites.front_default} /><br/>
						Name: {pokemon.name} <br/>
						Base Experience: {pokemon.base_experience}<br/>
						Primary Attack: {pokemon.moves[0].move.name}<br/>
						Height: {pokemon.height} ft.<br/>
					</li>
		})




		return(
			<div>
				<h1>The Original 151</h1>
				<Button onClick={this.props.handleBack} type='submit'>Log Out/Home</Button>
				<ul>
					{pokemon}
				</ul>
			</div>
			




			)
	}
}


export default Pokemon;