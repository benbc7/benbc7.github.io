import React, { Component } from 'react'

export default class SocialMedia extends Component {
	render() {
		return (
			<div className="social d-flex justify-content-center">
				<a className="mx-2" href="https://www.linkedin.com/in/benjaminjcutler/"><i className="fab fa-linkedin" /></a>
				<a className="mx-2" href="#!"><i className="fab fa-itch-io" /></a>
				<a className="mx-2" href="https://github.com/benbc7"><i className="fab fa-github" /></a>
			</div>
		)
	}
}