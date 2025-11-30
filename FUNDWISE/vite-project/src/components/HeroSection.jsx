import React from "react";

export default function HeroSection({ onViewChange }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Unlock <span className="highlight">Scholarships</span> for Your Dream Education
                </h1>
                <p>FundWise connects students with scholarships, grants, and mentors to simplify financial aid.</p>

                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => onViewChange("login")}>
                        🚀 Get Started
                    </button>
                    <button className="btn btn-outline" onClick={() => onViewChange("login")}>
                        🔍 Explore Programs
                    </button>
                </div>

                <ul className="hero-stats">
                    <li><strong>10K+</strong> Scholarships Listed</li>
                    <li><strong>50+</strong> Countries Supported</li>
                    <li><strong>95%</strong> Student Satisfaction</li>
                </ul>
            </div>
            
            <div className="hero-image">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', zIndex: 2}}>
                    <circle cx="200" cy="200" r="150" fill="rgba(255,255,255,0.1)" />
                    <path d="M200 100 L250 150 L200 200 L150 150 Z" fill="rgba(255,255,255,0.3)" />
                    <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.2)" />
                    <text x="200" y="210" fontSize="48" fill="white" textAnchor="middle" fontWeight="bold">💸</text>
                </svg>
            </div>
        </section>
    );
}
