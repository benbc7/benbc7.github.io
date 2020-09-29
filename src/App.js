import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Masthead from './components/masthead'
import About from './components/about'
import FeaturedProject from './components/featuredProject'
import OtherProjects from './components/otherProjects'
import Signup from './components/signup'
import Contact from './components/contact'
import SocialMedia from './components/socialMedia'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar></Navbar>
          <Masthead></Masthead>
          <About></About>
          <section className="projects-section bg-light" id="projects">
            <div className="container">
              <FeaturedProject></FeaturedProject>
              <OtherProjects></OtherProjects>
            </div>
          </section>
          <Signup></Signup>
          <section className="contact-section bg-black">
            <div className="container">
              <Contact></Contact>
              <SocialMedia></SocialMedia>
            </div>
          </section>
          <footer className="footer bg-black small text-center text-white-50">
            <div className="container">Copyright © Your Website 2020</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
