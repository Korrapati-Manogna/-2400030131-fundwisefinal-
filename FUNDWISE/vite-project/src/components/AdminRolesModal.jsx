import React, { useState } from "react";

export default function AdminRolesModal({ isOpen, onClose }) {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", status: "Active" },
        { id: 3, name: "Admin User", email: "admin@admin.com", role: "admin", status: "Active" },
        { id: 4, name: "Bob Wilson", email: "bob@example.com", role: "user", status: "Inactive" },
    ]);

    const [filter, setFilter] = useState("all");

    const handleRoleChange = (userId, newRole) => {
        setUsers(prev => prev.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        ));
        alert(`User role updated to ${newRole}`);
    };

    const handleStatusToggle = (userId) => {
        setUsers(prev => prev.map(user => 
            user.id === userId 
                ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } 
                : user
        ));
    };

    const filteredUsers = filter === "all" 
        ? users 
        : users.filter(user => user.role === filter);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>👥 Manage User Roles</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="roles-filter">
                    <button
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        All Users ({users.length})
                    </button>
                    <button
                        className={`filter-btn ${filter === "admin" ? "active" : ""}`}
                        onClick={() => setFilter("admin")}
                    >
                        Admins ({users.filter(u => u.role === "admin").length})
                    </button>
                    <button
                        className={`filter-btn ${filter === "user" ? "active" : ""}`}
                        onClick={() => setFilter("user")}
                    >
                        Users ({users.filter(u => u.role === "user").length})
                    </button>
                </div>

                <div className="users-table">
                    {filteredUsers.map((user) => (
                        <div key={user.id} className="user-row">
                            <div className="user-info">
                                <div className="user-avatar">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="user-name">{user.name}</p>
                                    <p className="user-email">{user.email}</p>
                                </div>
                            </div>
                            <div className="user-controls">
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    className="role-select"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                                <button
                                    className={`status-toggle ${user.status.toLowerCase()}`}
                                    onClick={() => handleStatusToggle(user.id)}
                                >
                                    {user.status}
                                </button>
                            </div>
                        </div>
                    ))}
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
