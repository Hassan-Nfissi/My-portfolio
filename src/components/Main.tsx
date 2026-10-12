import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + '/hassan.jpeg'} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Hassan-Nfissi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hassan-nfissi-9b784428b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hassan Nfissi</h1>
          <p className="title-role">Full Stack & Mobile Developer</p>
          <p className="subtitle-role">Product Mindset · From Code to Production with DevOps Best Practices</p>
          <div className="location-badge">
            <LocationOnIcon fontSize="small" />
            <span>Fès, Morocco · Open for Freelance & Mission Projects</span>
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