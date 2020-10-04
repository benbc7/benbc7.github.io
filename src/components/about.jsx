import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<section className="about-section text-center" id="about" style={{ paddingTop: '0px' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-white mb-4">Built with Bootstrap 4</h2>
							<p className="text-white-50">
								Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now,
								simply download the template on
                            <a href="https://startbootstrap.com/template-overviews/grayscale/">the preview page</a>
                            . The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>
						</div>
					</div>
					<img className="img-fluid" src="" alt="" />
				</div>
			</section>
		)
	}
}