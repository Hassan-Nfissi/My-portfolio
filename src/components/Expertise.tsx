import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Spring Boot",
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Machine Learning",
    "LLMs",
    "Integration"
];

const labelsSecond = [
    "Kubernetes",
    "Docker",
    "Jenkins",
    "Terraform",
    "Ansible",
    "Git",
    "CI/CD",
    "Linux",
    "Monitoring",
    "Automation"
];

const labelsThird = [
    "AWS",
    "Azure",
    "Cloud Architecture",
    "Serverless",
    "S3",
    "EC2",
    "IAM",
    "VPC",
    "CloudFormation",
    "Azure DevOps"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Software Engineering</h3>
                    <p>Experienced in building robust, scalable applications using Spring Boot, Python (FastAPI), and React. Skilled at integrating machine learning models and LLMs into production systems, delivering end-to-end solutions from backend to frontend.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Solid expertise in DevOps practices, including containerization, orchestration, CI/CD pipelines, infrastructure as code, and automation using tools like Kubernetes, Docker, Jenkins, Terraform, Ansible, and Git.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud Platforms</h3>
                    <p>Basic knowledge of cloud platforms, with fundamental understanding of AWS and Azure services.</p>
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