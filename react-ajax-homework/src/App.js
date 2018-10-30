import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';
import Pokemon from './Pokemon';





class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      logged: false,
      pokemon: []
    }


  }
  handleLogin = (username, logged) => {
    this.setState({
      username: username,
      logged: logged
    })
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {!this.state.logged ? <MainContainer handleLogin={this.handleLogin} /> : <Pokemon />}
      </div>
    );
  }
}

export default App;
