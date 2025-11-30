import React, { useState } from "react";

export default function SettingsModal({ isOpen, onClose, user, onSave }) {
    const [formData, setFormData] = useState({
        email: user?.email || "",
        notifications: true,
        emailAlerts: true,
        language: "English",
        theme: "Light"
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>⚙️ Settings</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>📧 Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>🌐 Language</label>
                        <select
                            value={formData.language}
                            onChange={(e) => handleChange("language", e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>🎨 Theme</label>
                        <select
                            value={formData.theme}
                            onChange={(e) => handleChange("theme", e.target.value)}
                        >
                            <option value="Light">Light</option>
                            <option value="Dark">Dark</option>
                            <option value="Auto">Auto</option>
                        </select>
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={formData.notifications}
                                onChange={(e) => handleChange("notifications", e.target.checked)}
                            />
                            🔔 Enable Notifications
                        </label>
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={formData.emailAlerts}
                                onChange={(e) => handleChange("emailAlerts", e.target.checked)}
                            />
                            📬 Email Alerts for New Scholarships
                        </label>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            💾 Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
