import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid'
import './JokeList.css';
import Joke from './Joke';

export default class JokeList extends Component {

  static defaultProps = {
    defaultNoOfJokes: 10
  }
  
  constructor(props){
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes')) || []
    }
  }

  getJokes = async () =>{
    let jokes = [];
    while (jokes.length < this.props.defaultNoOfJokes){
      let jokeResponse = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
      jokes.push({text: jokeResponse.data.joke, votes: 0, id: uuid()});
      this.setState({jokes: jokes})
    }
    window.localStorage.setItem('jokes', JSON.stringify(jokes));
  }

  handleVote = (id, delta) =>{
    this.setState(currentState => ({
      jokes: currentState.jokes.map( joke => joke.id === id ? {...joke , votes: joke.votes + delta} : joke)
    }), () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes)))
  }

  async componentDidMount(){
    if(this.state.jokes.length === 0) this.getJokes();
  }

  render() {
  return (
    <div className='JokeList'>
			<div className='JokeList-sidebar'>
    		<h1 className='JokeList-title'><span>Dad</span> Jokes</h1>
				<img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='ROFL_Emoji'/>
				<button className='JokeList-getmore' onClick={this.getJokes}>Fetch Jokes</button>
			</div>
			<div className='JokeList-jokes'>
        {this.state.jokes.map(joke => 
        <Joke 
          key = {joke.id} 
          id = {joke.id}
          text = {joke.text} 
          votes = {joke.votes}
          vote = {this.handleVote}
        />)}
			</div>
    </div>
  )
  }
}
