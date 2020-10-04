import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class FeaturedProject extends Component {
	render() {
		return (
			<div className="row align-items-center no-gutters mb-4 mb-lg-5">
				<div className="col-xl-8 col-lg-7">
					<ReactPlayer className="img-fluid mb-3 mb-lg-0" url="" />
				</div>
				<div className="col-xl-4 col-lg-5">
					<div className="featured-text text-center text-lg-left">
						<h4>Shoreline</h4>
						<p className="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can
						use
						it for any project - even commercial projects! Download it, customize it, and publish
						your
              website!</p>
					</div>
				</div>
			</div>
		)
	}
}