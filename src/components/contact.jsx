import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100" style={{ backgroundImage: 'url("/portfolio/images/card-left.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
						<div className="card-body text-center">
							<i className="fas fa-map-marked-alt text-primary mb-2" />
							<h4 className="text-uppercase m-0" style={{ color: '#437dc9' }}>Address</h4>
							<hr className="my-4" />
							<div className="small text-black-50" style={{ color: '#437dc9' }}>
								<a href="https://www.google.com/maps/place/Wilmington,+DE/@39.7298967,-75.5645897,13z/data=!3m1!4b1!4m5!3m4!1s0x89c70f185c46af6f:0x8516da5077308c00!8m2!3d39.744655!4d-75.5483909">
									Wilmington, DE
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100" style={{ backgroundImage: 'url("/portfolio/images/card-center.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
						<div className="card-body text-center">
							<i className="fas fa-envelope text-primary mb-2" />
							<h4 className="text-uppercase m-0" style={{ color: '#437dc9' }}>Email</h4>
							<hr className="my-4" />
							<div className="small text-black-50" style={{ color: '#437dc9' }}>
								<a href="#!" onClick={() => { navigator.clipboard.writeText("b.cutler724@gmail.com") }}>b.cutler724@gmail.com</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-3 mb-md-0">
					<div className="card py-4 h-100" style={{ backgroundImage: 'url("/portfolio/images/card-right.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
						<div className="card-body text-center">
							<i className="fas fa-mobile-alt text-primary mb-2" />
							<h4 className="text-uppercase m-0" style={{ color: '#437dc9' }}>Phone</h4>
							<hr className="my-4" />
							<div className="small text-black-50" style={{ color: '#437dc9' }}>
								<a href="tel:$13023007395">+1 (302) 300-7395</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}