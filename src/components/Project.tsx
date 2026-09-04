import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/TermAI" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/TermAI.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/TermAI" target="_blank" rel="noreferrer"><h2>TermAI — Minimal Floating AI Desktop Assistant</h2></a>
                <p>A minimal floating desktop assistant built with Go (Wails v2) and React that turns natural language into executable CLI commands. Features 3 ready-to-run command suggestions per query, one-click copy to clipboard, dark/light themes, and local config management.</p>
                <p><strong>Tech Stack:</strong> React, TypeScript, Go (Wails v2), Vite, Groq / OpenAI / Anthropic APIs</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Employee-Attrition-Performance-Prediction-with-spark" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/player.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Employee-Attrition-Performance-Prediction-with-spark" target="_blank" rel="noreferrer"><h2>Employee Attrition & Performance Prediction with Spark</h2></a>
                <p>An end-to-end Big Data & Machine Learning system built with Apache Spark to predict employee turnover risk in both offline batch mode and real-time streaming mode using PySpark MLlib and Spark Structured Streaming over TCP Sockets.</p>
                <p><strong>Tech Stack:</strong> PySpark MLlib, Spark Structured Streaming, Python, Logistic Regression, TCP Sockets</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/loc.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><h2>Locatour — Intelligent AI Travel Planner</h2></a>
                <p>Locatour is an intelligent mobile travel planning app that helps users discover places, simulate travel budgets, and organize customized itineraries using AI LLMs (Ollama) and the Google Places API.</p>
                <p><strong>Tech Stack:</strong> React Native, TypeScript, Node.js, Ollama AI, Google Places API</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/hospital.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Java-based enterprise management system that handles patient records, hospitalization scheduling, and medical activities with secure backend interfaces and relational data management.</p>
                <p><strong>Tech Stack:</strong> Java, Spring Boot, MySQL, REST APIs, Object-Oriented Design</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/reco.jpeg'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><h2>Facial Recognition & Attendance Management System</h2></a>
                <p>A full-stack web application leveraging computer vision and machine learning for automated employee attendance tracking. Supports employee registration, model training, and real-time facial detection via video streams.</p>
                <p><strong>Tech Stack:</strong> Python, Flask, OpenCV, Scikit-Learn, JavaScript, HTML5/CSS3, SQLite</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/player.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><h2>Premier League Player Rank Prediction</h2></a>
                <p>A machine learning project built with Scikit-learn to predict Premier League player ranks based on detailed match performance metrics (goals, assists, key passes, appearance statistics).</p>
                <p><strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, NumPy, Data Analysis</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/ci-cd.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><h2>Jenkins CI/CD Pipeline for React Dashboard</h2></a>
                <p>Automated DevSecOps CI/CD pipeline for a React web dashboard featuring workspace cleanup, repository cloning, SonarQube code quality audits, dependency scans, and Docker container deployment to Docker Hub.</p>
                <p><strong>Tech Stack:</strong> React, Jenkins, Docker, SonarQube, Dependency Check, Git</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/terraform-ansible-3tier" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/3tier.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/terraform-ansible-3tier" target="_blank" rel="noreferrer"><h2>Azure 3‑Tier Deployment: Terraform + Ansible + Spring Boot</h2></a>
                <p>End‑to‑end deployment of a secure 3‑tier app architecture on Azure. Terraform provisions VNets, subnets, NSGs, and VMs; Ansible configures Nginx (web), Spring Boot (app), and MySQL (data).</p>
                <p><strong>Tech Stack:</strong> Terraform, Ansible, Azure, Spring Boot, Nginx, MySQL</p>
            </div>
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/static-web.png'} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><h2>Deploy Static Website on AWS using Terraform</h2></a>
                <p>Automates static website hosting infrastructure on AWS using Terraform. Provisions S3 bucket hosting, CloudFront CDN distribution, Route 53 DNS routing, and SSL certificate management.</p>
                <p><strong>Tech Stack:</strong> Terraform, AWS (S3, CloudFront, Route53, ACM)</p>
            </div>
        </div>
    </div>
    );
}

export default Project;