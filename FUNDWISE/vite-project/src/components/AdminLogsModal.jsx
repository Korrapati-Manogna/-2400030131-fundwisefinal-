import React, { useState, useEffect } from "react";

export default function AdminLogsModal({ isOpen, onClose }) {
    const [logs, setLogs] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        if (isOpen) {
            generateLogs();
        }
    }, [isOpen]);

    const generateLogs = () => {
        const logTypes = ["info", "warning", "error", "success"];
        const actions = [
            "User login",
            "User registration",
            "Scholarship application submitted",
            "Profile updated",
            "Document uploaded",
            "Admin action performed",
            "Database backup completed",
            "Email notification sent",
            "Password reset requested"
        ];

        const newLogs = Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            type: logTypes[Math.floor(Math.random() * logTypes.length)],
            action: actions[Math.floor(Math.random() * actions.length)],
            user: `user${Math.floor(Math.random() * 100)}@example.com`,
            timestamp: new Date(Date.now() - Math.random() * 86400000 * 7).toLocaleString(),
            ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
        }));

        setLogs(newLogs);
    };

    const filteredLogs = filter === "all" ? logs : logs.filter(log => log.type === filter);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>📊 System Logs</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="logs-filter">
                    <button
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        All Logs
                    </button>
                    <button
                        className={`filter-btn ${filter === "info" ? "active" : ""}`}
                        onClick={() => setFilter("info")}
                    >
                        ℹ️ Info
                    </button>
                    <button
                        className={`filter-btn ${filter === "warning" ? "active" : ""}`}
                        onClick={() => setFilter("warning")}
                    >
                        ⚠️ Warning
                    </button>
                    <button
                        className={`filter-btn ${filter === "error" ? "active" : ""}`}
                        onClick={() => setFilter("error")}
                    >
                        ❌ Error
                    </button>
                    <button
                        className={`filter-btn ${filter === "success" ? "active" : ""}`}
                        onClick={() => setFilter("success")}
                    >
                        ✅ Success
                    </button>
                </div>

                <div className="logs-container">
                    {filteredLogs.map((log) => (
                        <div key={log.id} className={`log-entry log-${log.type}`}>
                            <div className="log-header">
                                <span className="log-type">{log.type.toUpperCase()}</span>
                                <span className="log-time">{log.timestamp}</span>
                            </div>
                            <div className="log-details">
                                <p><strong>Action:</strong> {log.action}</p>
                                <p><strong>User:</strong> {log.user}</p>
                                <p><strong>IP:</strong> {log.ip}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-outline" onClick={() => generateLogs()}>
                        🔄 Refresh Logs
                    </button>
                    <button type="button" className="btn btn-primary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
