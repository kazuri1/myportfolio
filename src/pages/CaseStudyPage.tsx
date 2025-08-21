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
    </CaseStudyTemplate>
  );
};
