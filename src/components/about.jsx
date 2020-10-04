import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<section className="about-section text-center" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-white mb-4">Ben Cutler</h2>
							<p className="text-white-50">
								A passionate Game Designer and an aspiring software developer.
								Greatly experienced in all things tech.
								Detail oriented and always striving to learn more.
								Capable of being both a leader and a team player in a team-driven environment.
                        </p>
						</div>
					</div>
					<img className="img-fluid" src="/cutler.app/images/controller.png" alt="" />
				</div>
			</section>
		)
	}
}