import { Routes, Route, useNavigate } from "react-router-dom";
import { SimpleTopNav } from "pulseui-base";

import "./App.css";
import { CaseStudyTile } from "./components/molecules/CaseStudyTile";
import { CaseStudyPage } from "./pages/CaseStudyPage";

function HomePage() {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate("/case-study/1password");
  };

  return (
    <main className="main-content">
      <section className="hero-section">
        <h1 className="hero-text">
          I love crafting digital{" "}
          <span className="hero-highlight">experiences</span> where design meets{" "}
          <span className="hero-highlight">intelligent systems</span>.
        </h1>
        <p className="hero-subtitle">
          Currently exploring the edge where design, code, and AI meet — shaping
          experiences that work today and evolve for tomorrow.
        </p>
      </section>

      <div className="case-studies-grid">
        <CaseStudyTile
          title="Native macOS autofill for logins and passkeys"
          subtitle="1PASSWORD • SHIPPED 2025"
          mediaAlt="1Password macOS Interface"
          onClick={handleCaseStudyClick}
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
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <SimpleTopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/1password" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

export default App;
