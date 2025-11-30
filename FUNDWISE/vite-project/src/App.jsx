import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import LoginScreen from "./components/LoginScreen";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import "./styles/styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("guest");
  const [view, setView] = useState("home");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fundwiseUser"));
    if (saved) {
      setUser(saved);
      setRole(saved.role);
      setView(saved.role === "admin" ? "admin-dashboard" : "user-dashboard");
    }
  }, []);

  const handleLogin = (email, role) => {
    const data = { email, role };
    localStorage.setItem("fundwiseUser", JSON.stringify(data));
    setUser(data);
    setRole(role);
    setView(role === "admin" ? "admin-dashboard" : "user-dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("fundwiseUser");
    setUser(null);
    setRole("guest");
    setView("home");
  };

  const renderContent = () => {
    switch (view) {
      case "login":
        return <LoginScreen onLogin={handleLogin} />;
      case "user-dashboard":
        return <UserDashboard user={user} />;
      case "admin-dashboard":
        return <AdminDashboard user={user} />;
      default:
        return (
          <>
            <HeroSection onViewChange={setView} />
            <FeaturesSection />
            <TestimonialsSection />
            <CtaSection onViewChange={setView} />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Header user={user} role={role} onViewChange={setView} handleLogout={handleLogout} />
      <main>{renderContent()}</main>
      {(view === "home" || view === "login") && <Footer />}
    </div>
  );
}
