import React, { useEffect, useState } from "react";
import { TableOfContents, Button, Grid, GridCol } from "pulseui-base";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Media } from "../atoms/Media";
import { MediaTitle } from "../atoms/MediaTitle";
import "./CaseStudyTemplate.css";
import "pulseui-base/styles";
import { Blockquote } from "../atoms/Blockquote";
import "./CaseStudyTemplate.css";

export interface CaseStudyTemplateProps {
  children: React.ReactNode;
  className?: string;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  mediaUrl?: string;
  mediaAlt?: string;
  placeholderImage?: string;
  projectSummary?: {
    role?: string;
    timeline?: string;
    team?: string;
    skills?: string;
  };
  overview?: {
    title?: string;
    subtitle?: string;
    blockquote?: string;
  };
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
  projectSummary,
  overview,
}) => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem Statement" },
    { id: "solution", label: "Solution Approach" },
    { id: "process", label: "Design Process" },
    { id: "outcome", label: "Outcomes & Results" },
    { id: "learnings", label: "Key Learnings" },
  ];

  useEffect(() => {
    const sectionElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      let current = "overview";
      for (const section of sectionElements) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTocClick = (item: any) => {
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`case-study-template ${className}`}>
      <aside className="case-study-sidebar">
        {onBack && (
          <div className="back-button-container">
            <Button variant="subtle" onClick={onBack} aria-label="Go back">
              <ArrowBackIcon fontSize="small" />
              <span style={{ marginLeft: 8 }}>Back</span>
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
              <p className="summary-value">
                {projectSummary?.role || "Product Design Intern"}
              </p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">TIMELINE</h3>
              <p className="summary-value">
                {projectSummary?.timeline || "Jan - April 2025"}
              </p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">TEAM</h3>
              <p className="summary-value">
                {projectSummary?.team || (
                  <>
                    1 PM
                    <br />3 Engineers
                    <br />1 Designer (me!)
                  </>
                )}
              </p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">SKILLS</h3>
              <p className="summary-value">
                {projectSummary?.skills || (
                  <>
                    User Research
                    <br />
                    Competitive Analysis
                    <br />
                    Prototyping
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <section id="overview" className="overview-section">
          <h3 className="overview-title">Overview </h3>
          <MediaTitle
            title={
              overview?.title ||
              "1Password is the leading enterprise password manager, now building an end-to-end security ecosystem."
            }
            subtitle={
              overview?.subtitle ||
              "During my internship, I had the chance to lead design on projects that contribute to this new direction for the company."
            }
          />
          <Media
            src={mediaUrl}
            alt={mediaAlt || "Case study media"}
            placeholderImage={placeholderImage}
            width="100%"
            height="400px"
          />
          {overview?.blockquote && (
            <Blockquote>{overview.blockquote}</Blockquote>
          )}
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
      </main>
    </div>
  );
};
