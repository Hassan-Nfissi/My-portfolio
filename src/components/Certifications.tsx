import React from "react";
import '../assets/styles/Certifications.scss';

function Certifications() {
    return(
    <div className="certifications-container" id="certifications">
        <h1>Certifications</h1>
        <div className="certifications-grid">
            <div className="certification">
                {/* Logo de KodeKloud (placeholder) */}
                <h2>AZ900: Microsoft Azure Fundamentals</h2>
                <p>KodeKloud - Issued Jan 2025</p>
                <p>Certification ID: dcd28ec9-2391-432c-9eaf-780a1ef21c54</p>
            </div>
            <div className="certification">
                {/* Logo de KodeKloud (placeholder) */}
                <h2>Docker Training Course for the Absolute Beginner</h2>
                <p>KodeKloud - Issued Jan 2025</p>
                <p>Certification ID: 74895513-0260-4fce-972b-0f85d8bf6416</p>
            </div>
            <div className="certification">
                {/* Logo de KodeKloud (placeholder) */}
                <h2>Jenkins Project: Building CI/CD Pipeline for Scalable Web Applications</h2>
                <p>KodeKloud - Issued Jan 2025</p>
                <p>Certification ID: b29e11f8-fdd0-4998-9eb3-f56269ab241b</p>
            </div>
            <div className="certification">
                {/* Logo de KodeKloud (placeholder) */}
                <h2>Fundamentals of DevOps</h2>
                <p>KodeKloud - Issued Dec 2024</p>
                <p>Certification ID: a4ecee25-18ad-4b41-83fb-2c613c0d91fa</p>
            </div>
            <div className="certification">
                {/* Logo de Great Learning (placeholder) */}
                <h2>Data Visualization using Python</h2>
                <p>Great Learning - Issued Mar 2024</p>
            </div>
        </div>
    </div>
    );
}

export default Certifications; 