import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section-unique container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 text-md-start text-center mb-4 mb-lg-0">
          <div className="hero-content-unique">
            <div className="typewriter-box">
              <div className="typewriter-text">
                <span className="hello-text-unique">Hello! I Am</span>
                <span className="name-text-unique">Paresh Prajapati</span>
              </div>
            </div>
            <p className="hero-subtext-unique">
              A self-taught developer, with 6 months of freelance experience.<br />
              I enjoy building delightful, clean web apps that balance performance and user needs.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="public/img/1000_F_497221595_2pmKYZSrhR1LJsswJTfQNxFy460z0lor-removebg-preview.png"
            alt="Hero"
            className="hero-img-unique img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
