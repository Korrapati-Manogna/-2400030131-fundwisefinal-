import React from "react";

export default function DashboardContainer({ title, role, children, onSettingsClick }) {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>{title}</h1>
                    <p>Welcome, <strong>{role}</strong></p>
                </div>
                <button className="btn btn-outline" onClick={onSettingsClick}>
                    ⚙️ Settings
                </button>
            </div>
            {children}
        </div>
    );
}
