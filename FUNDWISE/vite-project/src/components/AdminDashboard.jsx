import React, { useState } from "react";
import DashboardContainer from "./DashboardContainer";
import SettingsModal from "./SettingsModal";
import AdminLogsModal from "./AdminLogsModal";
import AdminBackupModal from "./AdminBackupModal";
import AdminRolesModal from "./AdminRolesModal";

export default function AdminDashboard({ user }) {
    const email = user?.email || "admin@example.com";
    const [showMessage, setShowMessage] = useState("");
    const [showSettings, setShowSettings] = useState(false);
    const [showLogs, setShowLogs] = useState(false);
    const [showBackup, setShowBackup] = useState(false);
    const [showRoles, setShowRoles] = useState(false);

    const handleSaveSettings = (settings) => {
        setShowMessage("Settings saved successfully!");
        setTimeout(() => setShowMessage(""), 3000);
    };

    return (
        <>
            <DashboardContainer 
                title="Admin Management Panel" 
                role="Admin"
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
                
                <div className="admin-grid">
                    <div className="admin-card green">
                        <h3>124</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="admin-card red">
                        <h3>8</h3>
                        <p>Pending Reviews</p>
                    </div>
                    <div className="admin-card blue">
                        <h3>42</h3>
                        <p>New Signups This Week</p>
                    </div>
                </div>

                <div className="system-settings">
                    <button className="btn btn-outline" onClick={() => setShowBackup(true)}>
                        💾 Backup Data
                    </button>
                    <button className="btn btn-primary" onClick={() => setShowLogs(true)}>
                        📊 View Logs
                    </button>
                    <button className="btn btn-outline" onClick={() => setShowRoles(true)}>
                        👥 Manage Roles
                    </button>
                </div>

                <p style={{ marginTop: "1.5rem", color: "#64748b" }}>
                    Signed in as <strong style={{ color: "#1e293b" }}>{email}</strong>
                </p>
            </DashboardContainer>

            <SettingsModal
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                user={{ email }}
                onSave={handleSaveSettings}
            />

            <AdminLogsModal
                isOpen={showLogs}
                onClose={() => setShowLogs(false)}
            />

            <AdminBackupModal
                isOpen={showBackup}
                onClose={() => setShowBackup(false)}
            />

            <AdminRolesModal
                isOpen={showRoles}
                onClose={() => setShowRoles(false)}
            />
        </>
    );
}
