import React, { useState } from "react";

export default function LoginScreen({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registering, setRegistering] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        
        if (!email.includes("@")) {
            setError("Please enter a valid email address");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        
        const role = email === "admin@admin.com" ? "admin" : "user";
        onLogin(email, role);
    };

    return (
        <div className="login">
            <h2>{registering ? "Create Account" : "Welcome Back"}</h2>
            {error && (
                <div style={{
                    padding: "0.75rem",
                    background: "#fee2e2",
                    color: "#dc2626",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    fontSize: "0.9rem"
                }}>
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-primary">
                    {registering ? "🎉 Create Account" : "🔐 Sign In"}
                </button>
            </form>

            <p
                className="switch"
                onClick={() => {
                    setRegistering(!registering);
                    setError("");
                }}
            >
                {registering ? "Already have an account? Sign in" : "New user? Create account"}
            </p>
        </div>
    );
}
