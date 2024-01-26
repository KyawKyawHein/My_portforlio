import React from 'react';
import Me from "../../assets/resume.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <a href={Me} download className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's talk
            </a>
        </div>

    )
}

export default CTA;