import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Project.scss';

interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'ai' | 'devops' | 'fullstack';
  image: string;
  link: string;
  description: string;
  tags: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "termai",
    title: "TermAI — Minimal Floating AI Desktop Assistant",
    category: "ai",
    image: "/TermAI.png",
    link: "https://github.com/Hassan-Nfissi/TermAI",
    description: "A minimal floating desktop assistant built with Go (Wails v2) and React that turns natural language into CLI commands. Features 3 ready-to-run command suggestions per query, one-click copy to clipboard, dark/light themes, and support for Groq, OpenAI, and Anthropic providers.",
    tags: ["Go", "Wails v2", "React", "TypeScript", "Groq AI"]
  },
  {
    id: "3tier",
    title: "Azure 3‑Tier Deployment: Terraform + Ansible + Spring Boot",
    category: "devops",
    image: "/3tier.png",
    link: "https://github.com/Hassan-Nfissi/terraform-ansible-3tier",
    description: "End‑to‑end deployment of a secure 3‑tier app on Microsoft Azure. Terraform provisions VNets, subnets, NSGs and VMs; Ansible configures Nginx (web), Spring Boot (app) and MySQL (data). Includes architecture diagram, screenshots, and step‑by‑step deployment instructions.",
    tags: ["Azure", "Terraform", "Ansible", "Spring Boot", "MySQL"]
  },
  {
    id: "cicd",
    title: "Jenkins CI/CD Pipeline for React Dashboard",
    category: "devops",
    image: "/ci-cd.png",
    link: "https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps",
    description: "Sets up a CI/CD pipeline for a React dashboard using Jenkins. Includes workspace cleaning, SonarQube code quality check, dependency check, Docker image building, and pushing to Docker Hub.",
    tags: ["Jenkins", "SonarQube", "Docker", "React", "CI/CD"]
  },
  {
    id: "aws-static",
    title: "Deploy Static Website on AWS using Terraform",
    category: "devops",
    image: "/static-web.png",
    link: "https://github.com/Hassan-Nfissi/deploy-static-web-aws",
    description: "Demonstrates automated static website hosting on AWS using Terraform. Automates S3 bucket creation, CloudFront CDN, Route 53 DNS, and SSL certificate management.",
    tags: ["AWS", "Terraform", "S3", "CloudFront", "Route 53"]
  },
  {
    id: "locatour",
    title: "Locatour — AI Mobile Travel Planner App",
    category: "fullstack",
    image: "/loc.png",
    link: "https://github.com/Hassan-Nfissi/Locatour",
    description: "Intelligent mobile travel planning app helping users discover places, simulate a budget, and organize trip itineraries using AI (Ollama) and Google Places API.",
    tags: ["React Native", "Ollama AI", "Google Places API", "TypeScript"]
  },
  {
    id: "facial-reco",
    title: "Facial Recognition & Attendance Management System",
    category: "fullstack",
    image: "/reco.jpeg",
    link: "https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management",
    description: "Web application using facial recognition for managing employee attendance in real time. Features employee enrollment, OpenCV model training, and live video stream verification.",
    tags: ["Python", "Flask", "OpenCV", "Scikit-Learn", "React"]
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    category: "fullstack",
    image: "/hospital.png",
    link: "https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation",
    description: "Java-based hospital management system that handles patient records, hospitalization stays, and medical activities with administrative user interfaces.",
    tags: ["Java", "Swing", "MySQL", "OOP"]
  },
  {
    id: "player-rank",
    title: "Premier League Player Rank Prediction",
    category: "ai",
    image: "/player.png",
    link: "https://github.com/Hassan-Nfissi/Player-Rank-Prediction",
    description: "Predicts Premier League player rankings using machine learning models (Scikit-learn) trained on Kaggle player statistics including goals, assists, and games played.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"]
  }
];

function Project() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'devops' | 'fullstack'>('all');

    const filteredProjects = activeFilter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === activeFilter);

    return (
    <div className="projects-container" id="projects">
        <div className="projects-header">
          <h1>Featured Projects</h1>
          <p className="section-subtitle">Explore a selection of my software engineering, AI, and DevOps projects.</p>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              className={`filter-tab ${activeFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ai')}
            >
              AI & Desktop
            </button>
            <button
              className={`filter-tab ${activeFilter === 'devops' ? 'active' : ''}`}
              onClick={() => setActiveFilter('devops')}
            >
              DevOps & Cloud
            </button>
            <button
              className={`filter-tab ${activeFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fullstack')}
            >
              Full Stack & Web
            </button>
          </div>
        </div>

        <div className="projects-grid">
            {filteredProjects.map((item) => (
              <div className="project" key={item.id}>
                <div className="img-wrapper">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + item.image} className="zoom" alt={item.title} width="100%"/>
                  </a>
                </div>
                <div className="project-content">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <h2>{item.title}</h2>
                  </a>
                  <p>{item.description}</p>
                  
                  <div className="project-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a href={item.link} target="_blank" rel="noreferrer" className="project-link">
                      View Source <GitHubIcon style={{ fontSize: '1rem', marginLeft: '6px' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
    );
}

export default Project;