import React, { Component } from 'react'

export default class Masthead extends Component {
	render() {
		return (
			<div>
				<header className="masthead">
					<div className="container d-flex h-100 align-items-center">
						<div className="mx-auto text-center">
							<h1 className="mx-auto my-0 text-uppercase">Ben Cutler</h1>
							<h2 className="text-white-50 mx-auto mt-2 mb-5">Game Developer</h2>
							<a className="btn btn-primary js-scroll-trigger" href="#about">Delete me, add scroll</a>
						</div>
					</div>
				</header>
			</div>
		)
	}
}