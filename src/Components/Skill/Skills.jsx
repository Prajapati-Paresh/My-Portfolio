import React from "react";
import "./Skills.css";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const SkillCards = () => {
  return (
    <>
      <div className="section-heading">
        <h2 className="highlighted-title">
          <span className="tag">&lt;h2&gt;</span>
          My <span className="white">Skills</span>
          <span className="tag">&lt;/h2&gt;</span>
        </h2>
      </div>
      <div className="skill-timeline">
        <div className="vertical-line" />

        <div className="card-container left-card">
          <div className="skill-card">
            <div className="icon-title">
              <FaCode className="icon float-icon" />
              <h3 className="title green">Frontend Development</h3>
            </div>
            <p>
              I specialize in creating responsive, user-centric web interfaces using the latest web technologies such as
              <span className="highlight"> HTML5</span>, <span className="highlight">CSS3</span>, and <span className="highlight">JavaScript</span>,
              and frameworks like <span className="highlight">Bootstrap</span> for rapid UI development. My focus is on building visually engaging,
              fast-loading, and mobile-friendly websites that deliver seamless experiences across all devices. With extensive experience in frameworks like
              <span className="highlight"> React.js</span>, I craft dynamic and interactive user interfaces that are not only intuitive but also highly performant.
              I leverage React’s component-based architecture to build reusable and maintainable code, ensuring scalability and consistency.
              Additionally, I use tools like <span className="highlight">Redux</span> for efficient state management and <span className="highlight">TanStack Query</span>
              for data fetching and synchronization, allowing me to build responsive applications that handle real-time data with ease.
            </p>
          </div>
        </div>

        <div className="card-container right-card">
          <div className="skill-card">
            <div className="icon-title">
              <FaServer className="icon float-icon" />
              <h3 className="title green">Backend Development</h3>
            </div>
            <p>
              I specialize in designing secure, scalable, and efficient back-end systems using
              <span className="highlight"> Node.js</span> and <span className="highlight">Express.js</span>, along with other popular technologies.
              I focus on creating robust <span className="highlight">API architectures</span> that ensure fast, reliable, and secure communication
              between the front-end and back-end of web applications. With a strong emphasis on security best practices, I implement authentication
              and authorization using <span className="highlight">JWT (JSON Web Tokens)</span>, ensuring safe user access control. Additionally,
              I handle file uploads seamlessly using <span className="highlight">Multer</span>, enabling smooth integration of file management in applications.
              For email functionality, I integrate <span className="highlight">Nodemailer</span> to send reliable transactional emails, such as registration
              confirmations and password resets.
            </p>
          </div>
        </div>

        <div className="card-container left-card">
          <div className="skill-card">
            <div className="icon-title">
              <FaDatabase className="icon float-icon" />
              <h3 className="title green">Database Development</h3>
            </div>
            <p>
              Building and managing databases with <span className="highlight">MongoDB</span> for scalable NoSQL solutions and
              <span className="highlight"> MySQL</span> for relational data management, ensuring optimized data storage, efficient retrieval, and robust performance.
              Additionally, I integrate <span className="highlight">Firebase</span> for cloud-based database management, leveraging its real-time capabilities
              for seamless data synchronization and scalability in dynamic applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCards;
