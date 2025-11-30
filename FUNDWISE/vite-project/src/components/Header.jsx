import React, { useState } from "react";

export default function Header({ user, role, onViewChange, handleLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const dashboard = role === "admin" ? "admin-dashboard" : "user-dashboard";

    const navLinks = user
        ? [
            { name: "Dashboard", view: dashboard },
            { name: "Logout", action: handleLogout },
        ]
        : [
            { name: "Home", view: "home" },
            { name: "Sign In", view: "login" },
        ];

    const handleNavClick = (item) => {
        if (item.action) item.action();
        else onViewChange(item.view);
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="logo" onClick={() => onViewChange("home")}>
                💸 FundWise
            </div>

            <nav className={`nav ${isOpen ? "open" : ""}`}>
                {navLinks.map((item) => (
                    <a key={item.name} href="#" onClick={(e) => { e.preventDefault(); handleNavClick(item); }}>
                        {item.name}
                    </a>
                ))}
            </nav>

            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>
        </header>
    );
}
