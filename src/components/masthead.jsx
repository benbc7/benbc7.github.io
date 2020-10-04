import React, { Component } from 'react'

export default class Masthead extends Component {
	render() {
		return (
			<div>
				<header className="masthead">
					<div className="container d-flex h-100 align-items-center">
						<div className="mx-auto text-center">
							<h1 className="mx-auto my-0 text-uppercase">Game Developer</h1>
							<a className="btn btn-primary js-scroll-trigger" href="#about">
								<i className="fas fa-angle-double-down pulse-down" />
							</a>
						</div>
					</div>
				</header>
			</div>
		)
	}
}