import React, { useState } from "react";
import DashboardContainer from "./DashboardContainer";
import SettingsModal from "./SettingsModal";
import ProfileModal from "./ProfileModal";
import DocumentUploadModal from "./DocumentUploadModal";
import ScholarshipListModal from "./ScholarshipListModal";

export default function UserDashboard({ user }) {
    const email = user?.email || "user@example.com";
    const [showMessage, setShowMessage] = useState("");
    const [showSettings, setShowSettings] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showDocuments, setShowDocuments] = useState(false);
    const [showScholarships, setShowScholarships] = useState(false);
    const [userProfile, setUserProfile] = useState({
        email,
        fullName: "John Doe",
        phone: "+1 234 567 8900",
        country: "United States",
        education: "Undergraduate",
        fieldOfStudy: "Computer Science",
        gpa: "3.8",
        bio: "Passionate about technology and innovation."
    });

    const handleSaveSettings = (settings) => {
        setShowMessage("Settings saved successfully!");
        setTimeout(() => setShowMessage(""), 3000);
    };

    const handleSaveProfile = (profile) => {
        setUserProfile(profile);
        setShowMessage("Profile updated successfully!");
        setTimeout(() => setShowMessage(""), 3000);
    };

    const handleUploadDocuments = (documents) => {
        setShowMessage(`${documents.length} document(s) uploaded successfully!`);
        setTimeout(() => setShowMessage(""), 3000);
    };

    return (
        <>
            <DashboardContainer 
                title="Student Dashboard" 
                role="User"
                onSettingsClick={() => setShowSettings(true)}
            >
                {showMessage && (
                    <div style={{
                        padding: "1rem",
                        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                        color: "white",
                        borderRadius: "12px",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                        fontWeight: "600",
                        animation: "fadeInUp 0.4s ease"
                    }}>
                        {showMessage}
                    </div>
                )}
                
                <div className="stats">
                    <div className="stat-box">
                        <h3>5</h3>
                        <p>Active Applications</p>
                    </div>
                    <div className="stat-box">
                        <h3>2</h3>
                        <p>Upcoming Deadlines</p>
                    </div>
                    <div className="stat-box">
                        <h3>85%</h3>
                        <p>Profile Completion</p>
                    </div>
                </div>

                <div className="recommendations">
                    <h3>🎯 Recommended Scholarships</h3>
                    <ul>
                        <li>STEM Graduate Grant — Deadline: Oct 30</li>
                        <li>Women in Tech Fellowship — Deadline: Dec 15</li>
                        <li>Global Study Abroad Program — Deadline: Jan 10</li>
                    </ul>
                </div>

                <div className="system-settings">
                    <button className="btn btn-outline" onClick={() => setShowProfile(true)}>
                        👤 Edit Profile
                    </button>
                    <button className="btn btn-primary" onClick={() => setShowDocuments(true)}>
                        📤 Upload Documents
                    </button>
                    <button className="btn btn-outline" onClick={() => setShowScholarships(true)}>
                        🎓 View Scholarships
                    </button>
                </div>

                <div style={{ marginTop: "2rem", color: "#64748b" }}>
                    <p>Signed in as: <strong style={{ color: "#1e293b" }}>{email}</strong></p>
                </div>
            </DashboardContainer>

            <SettingsModal
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                user={userProfile}
                onSave={handleSaveSettings}
            />

            <ProfileModal
                isOpen={showProfile}
                onClose={() => setShowProfile(false)}
                user={userProfile}
                onSave={handleSaveProfile}
            />

            <DocumentUploadModal
                isOpen={showDocuments}
                onClose={() => setShowDocuments(false)}
                onUpload={handleUploadDocuments}
            />

            <ScholarshipListModal
                isOpen={showScholarships}
                onClose={() => setShowScholarships(false)}
            />
        </>
    );
}
