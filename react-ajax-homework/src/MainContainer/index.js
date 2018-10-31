import React, {Component} from 'react';

import {Button, Form, Grid, Segment} from 'semantic-ui-react';

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: ''
		}

	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state.username, true);
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render(){
		return(
			<div>
			<h1>LOG IN TO CATCH EM ALL</h1>
			 <Form onSubmit={this.handleSubmit}>
                <Form.Input icon='user' iconPosition='left' type="text" name="username" onChange={this.handleInput} value={this.state.username} placeholder="username"/>
                <br />
                <Form.Input fluid icon='lock' iconPosition='left' type="password" name="password" onChange={this.handleInput} value={this.state.password} placeholder="password"/>
                <br />
                <Button color='blue' fluid size='large' type="submit" value="Login">Login</Button>
            </Form>
            </div>

			)
	}
}

export default MainContainer;