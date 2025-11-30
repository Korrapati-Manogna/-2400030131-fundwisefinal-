import React, { useState } from "react";

export default function AdminBackupModal({ isOpen, onClose }) {
    const [backupType, setBackupType] = useState("full");
    const [isBackingUp, setIsBackingUp] = useState(false);
    const [backupHistory, setBackupHistory] = useState([
        { id: 1, date: "Nov 28, 2025 10:30 AM", type: "Full", size: "245 MB", status: "Success" },
        { id: 2, date: "Nov 27, 2025 11:45 AM", type: "Incremental", size: "89 MB", status: "Success" },
        { id: 3, date: "Nov 26, 2025 09:15 AM", type: "Full", size: "238 MB", status: "Success" },
    ]);

    const handleBackup = () => {
        setIsBackingUp(true);
        
        setTimeout(() => {
            const newBackup = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                type: backupType === "full" ? "Full" : "Incremental",
                size: `${Math.floor(Math.random() * 200 + 100)} MB`,
                status: "Success"
            };
            
            setBackupHistory(prev => [newBackup, ...prev]);
            setIsBackingUp(false);
            alert("Backup completed successfully!");
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>💾 Database Backup</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="backup-section">
                    <div className="form-group">
                        <label>Backup Type</label>
                        <select
                            value={backupType}
                            onChange={(e) => setBackupType(e.target.value)}
                            disabled={isBackingUp}
                        >
                            <option value="full">Full Backup</option>
                            <option value="incremental">Incremental Backup</option>
                        </select>
                    </div>

                    <button
                        className="btn btn-primary btn-full"
                        onClick={handleBackup}
                        disabled={isBackingUp}
                    >
                        {isBackingUp ? "⏳ Backing up..." : "🚀 Start Backup"}
                    </button>

                    {isBackingUp && (
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    )}

                    <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Backup History</h3>
                    <div className="backup-history">
                        {backupHistory.map((backup) => (
                            <div key={backup.id} className="backup-item">
                                <div>
                                    <p className="backup-date">📅 {backup.date}</p>
                                    <p className="backup-meta">
                                        {backup.type} • {backup.size}
                                    </p>
                                </div>
                                <span className={`status-badge status-${backup.status.toLowerCase()}`}>
                                    {backup.status}
                                </span>
                            </div>
                        ))}
                    </div>
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
