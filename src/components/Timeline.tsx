import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="02/2026 – 07/2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Java / React Developer (PFE Internship)</h3>
            <h4 className="vertical-timeline-element-subtitle">Adria Business & Technology – Casablanca</h4>
            <p><strong>Technologies:</strong> Java 21, Spring Boot, React, PostgreSQL, Jenkins, Grafana, Docker Compose, Keycloak, Vault, Maven, Git</p>
            <ul>
              <li>Conceived and developed a Full Stack platform (ADT Config Platform) for managing, supervising, and monitoring electronic signature and digital trust services.</li>
              <li>Designed and developed secure REST APIs with Spring Boot for microservices administration and orchestration.</li>
              <li>Developed the user interface with React and integrated backend services.</li>
              <li>Integrated PostgreSQL, Spring Security, Keycloak, and Vault for secure access control and configuration management.</li>
              <li>Implemented CI/CD pipelines using Jenkins and containerized the application with Docker Compose.</li>
              <li>Centralized logging and monitored services using Grafana, Loki, and Grafana Alloy.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 – 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NewDev Fès</h4>
            <p>Flask, OpenCV, Scikit-learn, SQLite3</p>
            <p>Developed a web app for employee registration, ML model training, and real-time attendance tracking via video stream.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps & Cloud Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TICLab, International University of Rabat</h4>
            <p>Implemented a server incident monitoring and automation solution.</p>
            <ul>
              <li>Collected and tracked system metrics (CPU, RAM, disk) with Prometheus & Node Exporter.</li>
              <li>Built real-time monitoring dashboards in Grafana.</li>
              <li>Designed n8n automation workflows: alerting (Slack, email) and SSH scripts for disk cleanup and service restarts.</li>
              <li>Centralized incident tracking and reduced server downtime.</li>
              <li>Contributed to the reliability, performance, and resilience of the lab's cloud infrastructure.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;