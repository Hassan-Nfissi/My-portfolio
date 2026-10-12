import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faAws, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Spring Boot",
    "Python",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "HTML5 / CSS3",
    "Figma / UI/UX"
];

const labelsSecond = [
    "Docker",
    "Docker Compose",
    "CI/CD Pipelines",
    "Jenkins",
    "Nginx & SSL",
    "Linux & SSH",
    "Git & GitHub",
    "Terraform",
    "Ansible",
    "Kubernetes",
    "Automation"
];

const labelsThird = [
    "AWS (EC2, S3, CloudFront)",
    "Microsoft Azure",
    "Redis Caching",
    "Grafana & Loki",
    "Keycloak & Vault",
    "Performance Optimization",
    "High Availability"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack & Mobile Development</h3>
                    <p>Autonomous developer with a strong product mindset, specialized in delivering complete digital solutions from idea to production. Experienced in building modern, responsive Web & Mobile applications with robust backend APIs, optimized databases, and clean architecture adhering to strict deadlines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps, CI/CD & Production Delivery</h3>
                    <p>Bridging development and operations with modern DevOps practices. Solid expertise in multi-stage Docker containerization, automated CI/CD pipelines, Nginx reverse proxies with SSL/TLS, and reproducible environments ensuring seamless, zero-downtime production releases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud Architecture & Observability</h3>
                    <p>Engineering resilient, secure, and production-grade systems on AWS and Azure. Integrating performance caching (Redis), zero-trust security & authentication (Keycloak, Vault), and centralized telemetry dashboards (Grafana, Loki) to guarantee uptime and reliability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;