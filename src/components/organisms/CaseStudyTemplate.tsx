import React, { useEffect, useState } from "react";
import { TableOfContents, Button, Grid, GridCol } from "pulseui-base";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Media } from "../atoms/Media";
import { MediaTitle } from "../atoms/MediaTitle";
import "./CaseStudyTemplate.css";
import "pulseui-base/styles";
import { Blockquote } from "../atoms/Blockquote";

export interface CaseStudyTemplateProps {
  children: React.ReactNode;
  className?: string;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  mediaUrl?: string;
  mediaAlt?: string;
  placeholderImage?: string;
}

export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  children,
  className = "",
  onBack,
  title,
  subtitle,
  mediaUrl,
  mediaAlt,
  placeholderImage,
}) => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const tocItems = [
    { id: "overview", label: "Overview", level: 1 },
    { id: "problem", label: "Problem Statement", level: 1 },
    { id: "solution", label: "Solution Approach", level: 1 },
    { id: "process", label: "Design Process", level: 1 },
    { id: "outcome", label: "Outcome & Results", level: 1 },
    { id: "learnings", label: "Key Learnings", level: 1 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handleTocClick = (item: any) => {
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`case-study-template ${className}`}>
      <aside className="case-study-sidebar">
        {onBack && (
          <div className="back-button-container">
            <Button variant="subtle" onClick={onBack}>
              <ArrowBackIcon sx={{ fontSize: 16, marginRight: 0.5 }} />
              Back
            </Button>
          </div>
        )}
        <TableOfContents
          variant="subtle"
          items={tocItems}
          activeId={activeSection}
          onItemClick={handleTocClick}
        />
      </aside>
      <main className="case-study-content">
        {title && (
          <div className="case-study-header">
            {subtitle && <p className="case-study-subtitle">{subtitle}</p>}
            <h1 className="case-study-title">{title}</h1>
          </div>
        )}
        {mediaUrl && (
          <div className="case-study-media">
            <Media
              src={mediaUrl}
              alt={mediaAlt || "Case study media"}
              placeholderImage={placeholderImage}
              width="100%"
              height="400px"
            />
          </div>
        )}
        <div className="project-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <h3 className="summary-label">ROLE</h3>
              <p className="summary-value">Product Design Intern</p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">TIMELINE</h3>
              <p className="summary-value">Jan - April 2025</p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">TEAM</h3>
              <p className="summary-value">
                1 PM
                <br />3 Engineers
                <br />1 Designer (me!)
              </p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">SKILLS</h3>
              <p className="summary-value">
                User Research
                <br />
                Competitive Analysis
                <br />
                Prototyping
              </p>
            </div>
          </div>
        </div>
        <section id="overview" className="overview-section">
          <h3 className="overview-title">Overview </h3>
          <MediaTitle
            title="1Password is the leading enterprise password manager, now building an end-to-end security ecosystem."
            subtitle="During my internship, I had the chance to lead design on projects that contribute to this new direction for the company."
          />
          <Media
            src={mediaUrl}
            alt={mediaAlt || "Case study media"}
            placeholderImage={placeholderImage}
            width="100%"
            height="400px"
          />
        </section>
        <section id="outcomes" className="outcomes-section">
          <h3 className="outcomes-title">Outcomes </h3>
          <Grid>
            <GridCol span={4}>
              <MediaTitle
                title="Shipped macOS native compatibility for the core autofill product."
                subtitle="With dev hand-off and adoption considerations."
              />
            </GridCol>
            <GridCol span={4}>
              <MediaTitle
                title="Shipped macOS native compatibility for the core autofill product."
                subtitle="With dev hand-off and adoption considerations."
              />
            </GridCol>
            <GridCol span={4}>
              <MediaTitle
                title="Shipped macOS native compatibility for the core autofill product."
                subtitle="With dev hand-off and adoption considerations."
              />
            </GridCol>
          </Grid>
          <Blockquote>
            Note: This casestudy will focus on my work at Callaway
          </Blockquote>
        </section>
        <br />
        {children}
      </main>
    </div>
  );
};
