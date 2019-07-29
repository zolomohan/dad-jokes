import React, { Component } from 'react'

export default class Joke extends Component {

	handleUpVote = () => {
		this.props.vote(this.props.id, 1);
	}

	handleDownVote = () => {
		this.props.vote(this.props.id, -1);
	}
    
  render() {
    return (
      <div className='Joke'>
        <div className='Joke-buttons'>
					<i className='fas fa-arrow-up' onClick={this.handleUpVote}></i>
					<span>{this.props.votes}</span>
					<i className='fas fa-arrow-down' onClick={this.handleDownVote}></i>
				</div>
				<div className='Joke-text'>{this.props.text}</div>
      </div>
    )
	}
	
}
