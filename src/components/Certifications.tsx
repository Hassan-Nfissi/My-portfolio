import React from "react";
import azureLogo from '../assets/images/azure-fundamentals.png';
import ckaLogo from '../assets/images/cka-logo.png';
import terraformLogo from '../assets/images/terraform-associate.png';
import '../assets/styles/Certifications.scss';

function Certifications() {
    return(
    <div className="certifications-container" id="certifications">
        <h1>Certifications</h1>
        <div className="certifications-grid">
            <div className="certification">
                <a href="https://learn.kodekloud.com/certificate/dcd28ec9-2391-432c-9eaf-780a1ef21c54" target="_blank" rel="noopener noreferrer" className="certification-link">
                    <img src={azureLogo} alt="AZ900: Microsoft Azure Fundamentals" className="certification-logo" />
                    <h2>AZ900: Microsoft Azure Fundamentals</h2>
                    <p>KodeKloud – Issued Jan 2025</p>
                </a>
            </div>
            <div className="certification">
                <img src={ckaLogo} alt="Certified Kubernetes Administrator (In Progress)" className="certification-logo" />
                <h2>CKA: Certified Kubernetes Administrator</h2>
                <p>Linux Foundation – In progress</p>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/013294cf-06cb-419e-a986-e18f45fdc8b7" target="_blank" rel="noopener noreferrer" className="certification-link">
                    <img src={terraformLogo} alt="HashiCorp Certified Terraform Associate" className="certification-logo" />
                    <h2>Terraform Associate: HashiCorp Certified</h2>
                    <p>HashiCorp - Issued Jan 2025</p>
                </a>
            </div>
        </div>
    </div>
    );
}

export default Certifications; 