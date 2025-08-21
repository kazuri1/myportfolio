import React from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyTemplate } from "../components/organisms/CaseStudyTemplate";
import { Blockquote } from "../components/atoms/Blockquote";
import { MediaTitle } from "../components/atoms/MediaTitle";
import { Media } from "../components/atoms/Media";
import { Compare } from "../components/ui/compare";

export const CallawayGolfPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <CaseStudyTemplate
      title="Streamlining Billion-Dollar Transactions Through UX Innovation"
      subtitle="Design System + UX Strategy • Shipped 2025"
      mediaUrl="/src/assets/Callaway/callawaybusinesspov.png"
      mediaAlt="Callaway Business POV Design System"
      onBack={handleBack}
      projectSummary={{
        role: "Lead UX Designer",
        timeline: "April 2024 - Jan 2025",
        team: "2 UX Designers, Business & Engineering",
        skills:
          "UX Strategy, Design System, Research, Experience Design, Frontend Development, Visual Design, Prototyping",
      }}
      overview={{
        title:
          "Callaway Golf is a leading manufacturer of golf clubs and equipment, known for innovative technology and premium quality.",
        subtitle:
          "As Lead UX Strategist at Estuate, I redesigned Callaway Golf's multi-million-dollar Order Management System by driving user research, optimizing workflows, and implementing a Material UI design system to deliver a modern, efficient, and highly productive experience for Business Associates",
        blockquote:
          "This case study explores the creation of a modern, scalable design system that enhances user experience while maintaining Callaway's premium brand identity.",
      }}
    >
      <section id="overview" className="overview-section">
        <h3 className="overview-title">Overview</h3>
      </section>

      <section className="design-comparison mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Design Evolution
        </h3>
        <p className="text-center mb-4 text-gray-600">
          Before and After Comparison
        </p>
        <Compare
          before="/src/assets/Callaway/image1.png"
          after="/src/assets/Callaway/image2.png"
          beforeAlt="Before: Legacy Order Management System"
          afterAlt="After: Modern Design System Implementation"
          className="shadow-2xl"
        />
        <p className="text-center mt-4 text-sm text-gray-500">
          Drag the divider to compare the designs
        </p>
      </section>

      <section id="problem" className="outcomes-section">
        <h3 className="outcomes-title">Problem Statement</h3>
        <MediaTitle
          title="Inconsistent design patterns and lack of standardized components across Callaway's digital products."
          subtitle="Multiple teams working with different design approaches, leading to fragmented user experiences and increased development time."
        />
      </section>

      <section id="solution" className="outcomes-section">
        <h3 className="outcomes-title">Solution Approach</h3>
        <MediaTitle
          title="Comprehensive design system with AI-powered component generation and advanced prototyping capabilities."
          subtitle="Built with modern design tokens, responsive components, and automated documentation for seamless team collaboration."
        />
      </section>

      <section id="process" className="outcomes-section">
        <h3 className="outcomes-title">Design Process</h3>
        <MediaTitle
          title="Research-driven approach combining user insights, brand analysis, and technical requirements."
          subtitle="Iterative development with stakeholder feedback loops and continuous improvement cycles."
        />
      </section>

      <section id="outcome" className="outcomes-section">
        <h3 className="outcomes-title">Outcomes & Results</h3>
        <MediaTitle
          title="Streamlined development workflow with 40% faster component creation and consistent brand implementation."
          subtitle="Improved design-to-development handoff and enhanced user experience across all digital touchpoints."
        />
      </section>

      <section id="learnings" className="outcomes-section">
        <h3 className="outcomes-title">Key Learnings</h3>
        <MediaTitle
          title="The importance of early stakeholder buy-in and the value of automated documentation in design system adoption."
          subtitle="How AI can enhance design workflows while maintaining human creativity and brand authenticity."
        />
      </section>
    </CaseStudyTemplate>
  );
};
