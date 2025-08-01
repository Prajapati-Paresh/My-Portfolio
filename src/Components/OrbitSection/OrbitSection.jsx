import React from 'react';
import './OrbitSection.css';

const OrbitSection = () => {
    return (
        <section className="orbit-section">
            <h2 className="orbit-heading ">
                <span className="tag">&lt;h2&gt;</span>
                My <span className="highlight">Tech Stack</span>
                <span className="tag">&lt;/h2&gt;</span>
            </h2>
            <p className="orbit-subtext mb-5">Technologies I use in development</p>

            <div className="orbit-container">
                <div className="orbit-circle">
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(0deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(45deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png" alt="React" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(90deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(135deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/15484/15484303.png" alt="Node.js" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(180deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="CSS" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(225deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="MongoDB" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(270deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/16546/16546614.png" alt="Git" className="orbit-icon" />
                    </div>
                    <div className="orbit-icon-wrapper" style={{ transform: "rotate(315deg)" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/785/785116.png" alt="Firebase" className="orbit-icon" />
                    </div>
                </div>


                <div className="orbit-center-logo">
                    <img src="src/assets/pngtree-software-developer-3d-icon-with-sleek-design-isolated-on-white-background-png-image_15139931-removebg-preview.png" alt="Logo" style={{ width: '60%', height: '60%' }} />
                </div>
            </div>
        </section>
    );
};

export default OrbitSection;
