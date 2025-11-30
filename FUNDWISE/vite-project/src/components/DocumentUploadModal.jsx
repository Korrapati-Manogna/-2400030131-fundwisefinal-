import React, { useState } from "react";

export default function DocumentUploadModal({ isOpen, onClose, onUpload }) {
    const [documents, setDocuments] = useState([]);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const files = Array.from(e.dataTransfer.files);
        addFiles(files);
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        addFiles(files);
    };

    const addFiles = (files) => {
        const newDocs = files.map((file) => ({
            id: Date.now() + Math.random(),
            name: file.name,
            size: (file.size / 1024).toFixed(2) + " KB",
            type: file.type || "Unknown",
            uploadDate: new Date().toLocaleDateString(),
            file: file
        }));
        setDocuments(prev => [...prev, ...newDocs]);
    };

    const removeDocument = (id) => {
        setDocuments(prev => prev.filter(doc => doc.id !== id));
    };

    const handleUpload = () => {
        if (documents.length === 0) {
            alert("Please add at least one document");
            return;
        }
        onUpload(documents);
        setDocuments([]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>📤 Upload Documents</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="upload-section">
                    <div
                        className={`dropzone ${dragActive ? "active" : ""}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <div className="dropzone-content">
                            <div className="upload-icon">📁</div>
                            <p className="dropzone-text">Drag & drop files here</p>
                            <p className="dropzone-subtext">or</p>
                            <label htmlFor="file-input" className="btn btn-outline btn-sm">
                                Browse Files
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                multiple
                                onChange={handleFileInput}
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>

                    {documents.length > 0 && (
                        <div className="document-list">
                            <h3>Selected Documents ({documents.length})</h3>
                            {documents.map((doc) => (
                                <div key={doc.id} className="document-item">
                                    <div className="document-info">
                                        <span className="doc-icon">📄</span>
                                        <div>
                                            <p className="doc-name">{doc.name}</p>
                                            <p className="doc-meta">{doc.size} • {doc.uploadDate}</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-btn"
                                        onClick={() => removeDocument(doc.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-outline" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleUpload}
                        disabled={documents.length === 0}
                    >
                        📤 Upload {documents.length > 0 ? `(${documents.length})` : ""}
                    </button>
                </div>
            </div>
        </div>
    );
}
