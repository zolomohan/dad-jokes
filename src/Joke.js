import React, { Component } from 'react'
import './Joke.css'

export default class Joke extends Component {

	getColor = () => {
    if (this.props.votes >= 15) {
      return "#4CAF50";
    } else if (this.props.votes >= 12) {
      return "#8BC34A";
    } else if (this.props.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.votes >= 3) {
      return "#FFC107";
    } else if (this.props.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
	}
	
  getEmoji = () => {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

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
					<span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span>
					<i className='fas fa-arrow-down' onClick={this.handleDownVote}></i>
				</div>
				<div className='Joke-text'>{this.props.text}</div>
				<div className='Joke-emoji'>
				<i class={this.getEmoji()}></i>
				</div>
      </div>
    )
	}
	
}
