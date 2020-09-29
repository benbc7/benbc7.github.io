import React, { Component } from 'react'

export default class SocialMedia extends Component {
	render() {
		return (
			<div className="social d-flex justify-content-center">
				<a className="mx-2" href="#!"><i className="fab fa-twitter" /></a>
				<a className="mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
				<a className="mx-2" href="#!"><i className="fab fa-github" /></a>
			</div>
		)
	}
}