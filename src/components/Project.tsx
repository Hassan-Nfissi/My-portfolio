import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/ci-cd.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><h2>Jenkins CI/CD Pipeline for React Dashboard</h2></a>
                <p>Sets up a CI/CD pipeline for a React dashboard using Jenkins. It includes stages for cleaning the workspace, cloning the repository, installing dependencies, performing a code quality check with SonarQube, running a dependency check, building a Docker image, logging into Docker Hub, running the image, and pushing it to Docker Hub.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/static-web.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><h2>Deploy as static website on AWS using Terraform</h2></a>
                <p>This real-time DevOps project demonstrates how to set up fully automated static website hosting on AWS using Terraform. The project automates the deployment of an S3-hosted website with CloudFront CDN, Route 53 DNS, and SSL certificate management, completing the setup in just a few seconds.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/player.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><h2>Player Rank Prediction</h2></a>
                <p>This project focuses on predicting the rank of Premier League players using machine learning, specifically leveraging the Scikit-learn framework. The model is trained on a dataset that contains detailed statistics of Premier League players, sourced from Kaggle. The dataset includes features such as player name, team, games played, goals, assists, and other relevant performance metrics. The primary objective is to build an accurate predictive model that can estimate a player's rank based on these statistics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/reco.jpeg'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><h2>Facial Recognition and Attendance Management Project</h2></a>
                <p>This project involves the creation of a web application that uses facial recognition for managing employee attendance. The application allows adding employees, training them for facial recognition, and monitoring attendance in real time.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/hospital.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Java-based hospital management system that handles patient records and medical activities. The system provides interfaces for managing patient information and medical procedures.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/loc.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><h2>Locatuer</h2></a>
                <p>Locatour is an intelligent mobile travel planning app. It helps users discover places, simulate a budget, and organize their trips using AI (Ollama) and the Google Places API.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;