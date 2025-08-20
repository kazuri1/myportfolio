import React from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyTemplate } from "../components/organisms/CaseStudyTemplate";
import { Blockquote } from "../components/atoms/Blockquote";
import { MediaTitle } from "../components/atoms/MediaTitle";

export const CaseStudyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <CaseStudyTemplate
      title="Native macOS autofill for logins and passkeys"
      subtitle="1PASSWORD • SHIPPED 2025"
      mediaUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop"
      mediaAlt="1Password macOS Interface"
      onBack={handleBack}
    >
      <section id="overview" className="overview-section">
        <MediaTitle
          title="1Password is the leading enterprise password manager, now building an end-to-end security ecosystem."
          subtitle="During my internship, I had the chance to lead design on projects that contribute to this new direction for the company."
        />
        <Blockquote>
          This case study will focus on my work on macOS native compatibility
          for the core autofill product!
        </Blockquote>
      </section>

      <section id="problem">
        <h2>Problem Statement</h2>
        <p>
          Users needed a way to quickly and securely fill login credentials
          without disrupting their workflow. The existing solution was
          functional but didn't feel native to macOS, creating friction in the
          user experience.
        </p>
      </section>

      <section id="solution">
        <h2>Solution Approach</h2>
        <p>
          We developed a native macOS integration that leverages system APIs for
          seamless autofill. This included deep integration with Safari, Chrome,
          and other browsers while maintaining 1Password's security standards.
        </p>
      </section>

      <section id="process">
        <h2>Design Process</h2>
        <p>
          Our design process involved extensive user research, prototyping, and
          iterative testing. We conducted user interviews with power users and
          conducted A/B testing to validate our design decisions.
        </p>
      </section>

      <section id="outcome">
        <h2>Outcome & Results</h2>
        <p>
          The solution achieved a 40% improvement in user satisfaction and 25%
          faster login times. Users reported feeling more confident in the
          security of their credentials while experiencing a smoother workflow.
        </p>
      </section>

      <section id="learnings">
        <h2>Key Learnings</h2>
        <p>
          We learned the importance of respecting platform conventions and user
          expectations. Native integrations require careful consideration of
          both technical constraints and user experience principles.
        </p>
      </section>
    </CaseStudyTemplate>
  );
};
