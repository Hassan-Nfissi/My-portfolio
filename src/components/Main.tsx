import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + '/hassan.jpeg'} alt="Hassan Nfissi" />
        </div>
        <div className="content">
          <div className="status-badge">
            <span className="status-dot"></span> Available for new opportunities
          </div>
          <h1>Hassan Nfissi</h1>
          <p className="subtitle">Software Engineering & DevOps Specialist</p>

          <div className="hero-tags">
            <span className="tag">Java 21 & Spring Boot</span>
            <span className="tag">React & TypeScript</span>
            <span className="tag">DevOps & Cloud Architecture</span>
            <span className="tag">Keycloak & Vault Security</span>
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects <LaunchIcon style={{ fontSize: '1rem', marginLeft: '6px' }} />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me <EmailIcon style={{ fontSize: '1rem', marginLeft: '6px' }} />
            </button>
          </div>

          <div className="social_icons">
            <a href="https://github.com/Hassan-Nfissi" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hassan-nfissi-9b784428b" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Hassan-Nfissi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hassan-nfissi-9b784428b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;