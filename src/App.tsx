import { SimpleTopNav } from "pulseui-base";
import "pulseui-base/styles";

import "./App.css";
import { CaseStudyTile } from "./components/molecules/CaseStudyTile";

function App() {
  return (
    <div className="app">
      <SimpleTopNav />
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-text">
            I love crafting digital{" "}
            <span className="hero-highlight">experiences</span> where design
            meets <span className="hero-highlight">intelligent systems</span>.
          </h1>
          <p className="hero-subtitle">
            Currently exploring the edge where design, code, and AI meet —
            shaping experiences that work today and evolve for tomorrow.
          </p>
        </section>

        <section className="case-studies-section">
          <div className="case-studies-grid">
            <CaseStudyTile
              title="Native macOS autofill for logins and passkeys"
              subtitle="1PASSWORD • SHIPPED 2025"
              mediaAlt="1Password macOS Interface"
            />
            <CaseStudyTile
              title="AI-Powered Design System with Advanced Component Library"
              subtitle="DESIGN SYSTEM • IN DEVELOPMENT"
              mediaAlt="AI Design System Interface"
            />
            <CaseStudyTile
              title="Responsive E-commerce Platform with Modern UI/UX"
              subtitle="E-COMMERCE • COMPLETED 2024"
              mediaAlt="E-commerce Platform Interface"
            />
            <CaseStudyTile
              title="Mobile App Redesign for Healthcare Provider"
              subtitle="HEALTHCARE • IN PROGRESS"
              mediaAlt="Healthcare Mobile App Interface"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
