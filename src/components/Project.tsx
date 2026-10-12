import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* ========================================================= */}
            {/* 1. WEB, MOBILE & UI/UX DESIGN PROJECTS                   */}
            {/* ========================================================= */}
            <div className="project">
                <a href="https://pulsewatch-app.duckdns.org" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/pulsewatch.png'} className="zoom" alt="PulseWatch Telemetry Platform" width="100%"/></a>
                <a href="https://pulsewatch-app.duckdns.org" target="_blank" rel="noreferrer"><h2>PulseWatch ⚡ — Real-Time Uptime Monitoring SaaS</h2></a>
                <p>High-performance Uptime Monitoring & Public Status Page SaaS platform co-founded and engineered by Hassan Nfissi. Features asynchronous multi-threaded health-checks via Spring WebFlux (WebClient), anti-SSRF zero-trust defense, automated incident management, HTML email alerts, and public status pages.</p>
                <p><strong>Tech Stack:</strong> Java 21, Spring Boot 3.2, Spring WebFlux, React 18, TypeScript, Tailwind CSS, PostgreSQL 16, Redis 7, Recharts, Docker Compose, Nginx SSL</p>
                <div className="project-links">
                    <a href="https://pulsewatch-app.duckdns.org" target="_blank" rel="noreferrer" className="live-demo-btn">
                        🟢 Accéder à la plateforme en direct
                    </a>
                    <a href="https://github.com/Hassan-Nfissi/PulseWatch" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="http://51.20.78.4" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/booklypro.png'} className="zoom" alt="BooklyPro SaaS Platform" width="100%"/></a>
                <a href="http://51.20.78.4" target="_blank" rel="noreferrer"><h2>BooklyPro 🇲🇦 — Online Booking SaaS Platform</h2></a>
                <p>A modern online appointment booking platform tailored for service professionals in Morocco (salons, barbershops, spas). Built with high-concurrency availability engine (zero double-booking via transaction locking), Google OAuth Token Exchange, multilingual interface (FR, AR, EN), and MAD currency support.</p>
                <p><strong>Tech Stack:</strong> Spring Boot 3.3.5, Java 17 LTS, React 18, TypeScript, Tailwind CSS, PostgreSQL, Flyway, Docker Compose, Nginx SSL</p>
                <div className="project-links">
                    <a href="http://51.20.78.4" target="_blank" rel="noreferrer" className="live-demo-btn">
                        🟢 Accéder à la plateforme en direct
                    </a>
                    <a href="https://github.com/Hassan-Nfissi/BooklyPro" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/TermAI" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/TermAI.png'} className="zoom" alt="TermAI Assistant" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/TermAI" target="_blank" rel="noreferrer"><h2>TermAI — Minimal Floating AI Desktop Assistant</h2></a>
                <p>A minimal floating desktop assistant built with Go (Wails v2) and React that turns natural language into executable CLI commands. Features 3 ready-to-run command suggestions per query, one-click copy to clipboard, dark/light themes, and local config management.</p>
                <p><strong>Tech Stack:</strong> React, TypeScript, Go (Wails v2), Vite, Groq / OpenAI / Anthropic APIs</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/TermAI" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/loc.png'} className="zoom" alt="Locatour" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer"><h2>Locatour — Intelligent AI Travel Planner</h2></a>
                <p>Locatour is an intelligent mobile travel planning app that helps users discover places, simulate travel budgets, and organize customized itineraries using AI LLMs (Ollama) and the Google Places API.</p>
                <p><strong>Tech Stack:</strong> React Native, TypeScript, Node.js, Ollama AI, Google Places API</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/Locatour" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://www.figma.com/design/9fsK2RrOcyQFrpdLBVP32a/Hassan_Nfissi?node-id=0-1&t=Xi9EYnpdQDtPkiob-1" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/smartbite-design.png'} className="zoom" alt="SmartBite Figma UI/UX Design" width="100%"/></a>
                <a href="https://www.figma.com/design/9fsK2RrOcyQFrpdLBVP32a/Hassan_Nfissi?node-id=0-1&t=Xi9EYnpdQDtPkiob-1" target="_blank" rel="noreferrer"><h2>SmartBite — Mobile UI/UX Design & Prototype</h2></a>
                <p>Complete mobile UI/UX design and interactive prototype for SmartBite, an intelligent nutrition and meal tracking mobile app. Features complete user journey architecture: multi-variant onboarding & authentication flows, calorie & macronutrient progress tracking, and daily dietary suggestion cards.</p>
                <p><strong>Tech Stack:</strong> Figma, UI/UX Design, Mobile App Prototyping, Wireframing, User Flow, Design Systems</p>
                <div className="project-links">
                    <a href="https://www.figma.com/design/9fsK2RrOcyQFrpdLBVP32a/Hassan_Nfissi?node-id=0-1&t=Xi9EYnpdQDtPkiob-1" target="_blank" rel="noreferrer" className="figma-btn">
                        🎨 Explorer le Design sur Figma
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/hospital.png'} className="zoom" alt="Hospital Management" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Java-based enterprise management system that handles patient records, hospitalization scheduling, and medical activities with secure backend interfaces and relational data management.</p>
                <p><strong>Tech Stack:</strong> Java, Spring Boot, MySQL, REST APIs, Object-Oriented Design</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/Systeme-Gestion-Hospitalisation" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            {/* ========================================================= */}
            {/* 2. DEVOPS & CLOUD ARCHITECTURE PROJECTS                  */}
            {/* ========================================================= */}
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/ci-cd.png'} className="zoom" alt="Jenkins Pipeline" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer"><h2>Jenkins CI/CD Pipeline for React Dashboard</h2></a>
                <p>Automated DevSecOps CI/CD pipeline for a React web dashboard featuring workspace cleanup, repository cloning, SonarQube code quality audits, dependency scans, and Docker container deployment to Docker Hub.</p>
                <p><strong>Tech Stack:</strong> React, Jenkins, Docker, SonarQube, Dependency Check, Git</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/SynergyGym-DevSecOps" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/terraform-ansible-3tier" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/3tier.png'} className="zoom" alt="Azure 3-Tier Architecture" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/terraform-ansible-3tier" target="_blank" rel="noreferrer"><h2>Azure 3‑Tier Deployment: Terraform + Ansible + Spring Boot</h2></a>
                <p>End‑to‑end deployment of a secure 3‑tier app architecture on Azure. Terraform provisions VNets, subnets, NSGs, and VMs; Ansible configures Nginx (web), Spring Boot (app), and MySQL (data).</p>
                <p><strong>Tech Stack:</strong> Terraform, Ansible, Azure, Spring Boot, Nginx, MySQL</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/terraform-ansible-3tier" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/static-web.png'} className="zoom" alt="AWS Terraform Static Web" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer"><h2>Deploy Static Website on AWS using Terraform</h2></a>
                <p>Automates static website hosting infrastructure on AWS using Terraform. Provisions S3 bucket hosting, CloudFront CDN distribution, Route 53 DNS routing, and SSL certificate management.</p>
                <p><strong>Tech Stack:</strong> Terraform, AWS (S3, CloudFront, Route53, ACM)</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/deploy-static-web-aws" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            {/* ========================================================= */}
            {/* 3. MACHINE LEARNING & BIG DATA PROJECTS                  */}
            {/* ========================================================= */}
            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Employee-Attrition-Performance-Prediction-with-spark" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/spark-attrition.png'} className="zoom" alt="Spark Attrition Prediction" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Employee-Attrition-Performance-Prediction-with-spark" target="_blank" rel="noreferrer"><h2>Employee Attrition & Performance Prediction with Spark</h2></a>
                <p>An end-to-end Big Data & Machine Learning system built with Apache Spark to predict employee turnover risk in both offline batch mode and real-time streaming mode using PySpark MLlib and Spark Structured Streaming over TCP Sockets.</p>
                <p><strong>Tech Stack:</strong> PySpark MLlib, Spark Structured Streaming, Python, Logistic Regression, TCP Sockets</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/Employee-Attrition-Performance-Prediction-with-spark" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/reco.jpeg'} className="zoom" alt="Facial Recognition Attendance" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer"><h2>Facial Recognition & Attendance Management System</h2></a>
                <p>A full-stack web application leveraging computer vision and machine learning for automated employee attendance tracking. Supports employee registration, model training, and real-time facial detection via video streams.</p>
                <p><strong>Tech Stack:</strong> Python, Flask, OpenCV, Scikit-Learn, JavaScript, HTML5/CSS3, SQLite</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/Facial-Recognition-and-Absence-Management" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/player.png'} className="zoom" alt="Player Rank Prediction" width="100%"/></a>
                <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer"><h2>Premier League Player Rank Prediction</h2></a>
                <p>A machine learning project built with Scikit-learn to predict Premier League player ranks based on detailed match performance metrics (goals, assists, key passes, appearance statistics).</p>
                <p><strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, NumPy, Data Analysis</p>
                <div className="project-links">
                    <a href="https://github.com/Hassan-Nfissi/Player-Rank-Prediction" target="_blank" rel="noreferrer" className="repo-btn">
                        Code Source (GitHub)
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;