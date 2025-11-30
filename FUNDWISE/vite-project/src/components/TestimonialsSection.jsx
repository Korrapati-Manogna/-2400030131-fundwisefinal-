import React from "react";

const testimonials = [
    { name: "Aarav Sharma", text: "FundWise helped me find the perfect scholarship for my master's in Germany. The platform is incredibly intuitive!" },
    { name: "Sarah Chen", text: "The dashboard made managing multiple applications so much easier! I got accepted to my dream university with full funding." },
    { name: "David Lee", text: "A must-use platform for students serious about funding their education. The AI matching is spot on!" },
    { name: "Priya Patel", text: "The mentor support was invaluable. They guided me through every step of the scholarship application process." },
    { name: "Michael Johnson", text: "I was able to secure three scholarships within 6 months using FundWise. Highly recommend!" },
    { name: "Elena Rodriguez", text: "The document vault feature saved me so much time. Everything organized in one place!" },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials">
            <h2>What Students Say</h2>
            <div className="testimonial-grid">
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                        <p>"{t.text}"</p>
                        <h4>- {t.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
