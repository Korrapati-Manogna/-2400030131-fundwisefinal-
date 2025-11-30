import React from "react";

export default function CtaSection({ onViewChange }) {
    return (
        <section className="cta">
            <h2>Ready to Take Control of Your Financial Aid?</h2>
            <p>Join thousands of students managing scholarships efficiently. Start your journey today!</p>
            <button className="btn btn-outline" onClick={() => onViewChange("login")}>
                🎓 Start Free Account
            </button>
        </section>
    );
}
