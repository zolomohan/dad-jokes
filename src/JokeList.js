import React, { Component } from 'react'
import axios from 'axios'

export default class JokeList extends Component {

	static defaultProps = {
		defaultNoOfJokes: 10
	}
	
	constructor(props){
		super(props);
		this.state = {
			jokes: []
		}
	}

	async componentDidMount(){
		let jokes = [];
		while (jokes.length < this.props.defaultNoOfJokes){
			let jokeResponse = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
			jokes.push(jokeResponse.data.joke);
		}
		this.setState({jokes: jokes})
	}

  render() {
    return (
      <div>
        <h1>Dad Jokes</h1>
				{this.state.jokes.map(joke => <div>{joke}</div>)}
      </div>
    )
  }
}
