import React from "react";

const features = [
    { title: "🎯 Smart Matching", desc: "AI-driven recommendations for best-fit scholarships." },
    { title: "📋 Application Tracker", desc: "Stay updated on deadlines and progress easily." },
    { title: "🔔 Personalized Alerts", desc: "Never miss a new scholarship opportunity." },
    { title: "👨‍🏫 Expert Mentorship", desc: "Connect with scholarship advisors and alumni." },
    { title: "🔒 Secure Data", desc: "We prioritize your privacy and safety." },
    { title: "🌍 Global Access", desc: "Scholarships from universities worldwide." },
    { title: "💰 Financial Aid Calculator", desc: "Estimate your eligibility and potential funding instantly." },
    { title: "📁 Document Vault", desc: "Safely store and manage your academic documents online." },
    { title: "💬 Real-Time Chat Support", desc: "Get instant help from our support team and mentors." },
    { title: "⭐ Success Stories", desc: "Learn from students who secured their dream scholarships." },
];


export default function FeaturesSection() {
    return (
        <section className="features">
            <h2>Powerful Features for Students</h2>
            <div className="feature-grid">
                {features.map((f, i) => (
                    <div key={i} className="feature-card">
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
