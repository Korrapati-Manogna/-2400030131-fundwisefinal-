import React, { useState } from "react";

export default function ScholarshipListModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState("recommended");
    const [applications, setApplications] = useState([
        { id: 1, title: "STEM Graduate Grant", deadline: "Oct 30, 2025", status: "Applied", amount: "$5,000" },
        { id: 2, title: "Women in Tech Fellowship", deadline: "Dec 15, 2025", status: "In Review", amount: "$10,000" },
        { id: 3, title: "Global Study Abroad Program", deadline: "Jan 10, 2026", status: "Draft", amount: "$15,000" },
    ]);

    const recommended = [
        { id: 4, title: "Engineering Excellence Award", deadline: "Feb 20, 2026", amount: "$7,500", match: "95%" },
        { id: 5, title: "Innovation Scholarship", deadline: "Mar 15, 2026", amount: "$8,000", match: "92%" },
        { id: 6, title: "Leadership Development Grant", deadline: "Apr 1, 2026", amount: "$6,000", match: "88%" },
    ];

    const handleApply = (scholarship) => {
        setApplications(prev => [...prev, {
            ...scholarship,
            status: "Draft"
        }]);
        alert(`Started application for ${scholarship.title}`);
    };

    const handleDelete = (id) => {
        setApplications(prev => prev.filter(app => app.id !== id));
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>🎓 Scholarships</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="tabs">
                    <button
                        className={`tab ${activeTab === "applications" ? "active" : ""}`}
                        onClick={() => setActiveTab("applications")}
                    >
                        My Applications ({applications.length})
                    </button>
                    <button
                        className={`tab ${activeTab === "recommended" ? "active" : ""}`}
                        onClick={() => setActiveTab("recommended")}
                    >
                        Recommended ({recommended.length})
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "applications" ? (
                        <div className="scholarship-list">
                            {applications.map((app) => (
                                <div key={app.id} className="scholarship-card">
                                    <div className="scholarship-header">
                                        <h3>{app.title}</h3>
                                        <span className={`status-badge status-${app.status.toLowerCase().replace(" ", "-")}`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <div className="scholarship-details">
                                        <p>💰 Amount: <strong>{app.amount}</strong></p>
                                        <p>📅 Deadline: <strong>{app.deadline}</strong></p>
                                    </div>
                                    <div className="scholarship-actions">
                                        <button className="btn btn-outline btn-sm">
                                            📝 Continue
                                        </button>
                                        <button
                                            className="btn btn-sm"
                                            style={{ background: "#ef4444", color: "white" }}
                                            onClick={() => handleDelete(app.id)}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="scholarship-list">
                            {recommended.map((scholarship) => (
                                <div key={scholarship.id} className="scholarship-card">
                                    <div className="scholarship-header">
                                        <h3>{scholarship.title}</h3>
                                        <span className="match-badge">
                                            {scholarship.match} Match
                                        </span>
                                    </div>
                                    <div className="scholarship-details">
                                        <p>💰 Amount: <strong>{scholarship.amount}</strong></p>
                                        <p>📅 Deadline: <strong>{scholarship.deadline}</strong></p>
                                    </div>
                                    <div className="scholarship-actions">
                                        <button className="btn btn-outline btn-sm">
                                            📖 View Details
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleApply(scholarship)}
                                        >
                                            ✅ Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-outline" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
