import React, { useState } from "react";

export default function ProfileModal({ isOpen, onClose, user, onSave }) {
    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        phone: user?.phone || "",
        country: user?.country || "",
        education: user?.education || "Undergraduate",
        fieldOfStudy: user?.fieldOfStudy || "",
        gpa: user?.gpa || "",
        bio: user?.bio || ""
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
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>👤 Edit Profile</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name *</label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address *</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                placeholder="+1 234 567 8900"
                            />
                        </div>

                        <div className="form-group">
                            <label>Country *</label>
                            <input
                                type="text"
                                value={formData.country}
                                onChange={(e) => handleChange("country", e.target.value)}
                                placeholder="United States"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Education Level *</label>
                            <select
                                value={formData.education}
                                onChange={(e) => handleChange("education", e.target.value)}
                                required
                            >
                                <option value="High School">High School</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Graduate">Graduate</option>
                                <option value="PhD">PhD</option>
                                <option value="Postdoc">Postdoc</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Field of Study *</label>
                            <input
                                type="text"
                                value={formData.fieldOfStudy}
                                onChange={(e) => handleChange("fieldOfStudy", e.target.value)}
                                placeholder="Computer Science"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>GPA (Optional)</label>
                        <input
                            type="text"
                            value={formData.gpa}
                            onChange={(e) => handleChange("gpa", e.target.value)}
                            placeholder="3.8"
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio / About You</label>
                        <textarea
                            value={formData.bio}
                            onChange={(e) => handleChange("bio", e.target.value)}
                            placeholder="Tell us about yourself, your goals, and achievements..."
                            rows="4"
                        />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            💾 Save Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
