import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section container py-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <div className="fast-float-img mx-auto">
                        <img
                            src="src/assets/65263db085a313008a232ddf_Saly-38-particle-removebg-preview.png"
                            alt="Contact"
                            className="img-fluid"
                        />
                    </div>
                </div>

                {/* Right Contact Info */}
                <div className="col-12 col-md-6">
                    <div className="contact-details-box p-4">
                        <h2 className="contact-title">
                            <span className="tag">&lt;h2&gt;</span>
                            <span className="white-text"> Contact </span>
                            <span className="tag">&lt;/h2&gt;</span>
                        </h2>
                        <div className="contact-divider"></div>

                        <div className="contact-item">📱 <span>Phone:</span> <a href="tel:+917383507911">+91 7383507911</a></div>
                        <div className="contact-item">📧 <span>Email:</span> <a href="mailto:pparesh5630@gmail.com">pparesh5630@gmail.com</a></div>
                        <div className="contact-item">💼 <span>LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/paresh-prajapati-362a5b311/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/paresh
                            </a>
                        </div>
                        <div className="contact-item">🌐 <span>Portfolio:</span> <a href="https://yourportfolio.com" target="_blank">yourportfolio.com</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
