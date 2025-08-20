import React from "react";
import { Card } from "pulseui-base";
import "./CaseStudy.css";
import "pulseui-base/styles";

export interface CaseStudyProps {
  /** The title of the case study */
  title: string;
  /** Description of the case study */
  description: string;
  /** URL to the video/GIF file */
  mediaUrl?: string;
  /** Alt text for the media */
  mediaAlt?: string;
  /** Placeholder image URL (defaults to Unsplash) */
  placeholderImage?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  mediaUrl,
  mediaAlt = "Case study media",
  placeholderImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card className={`case-study ${className}`} onClick={handleClick}>
      <div className="case-study-media">
        {mediaUrl ? (
          <video
            src={mediaUrl}
            autoPlay
            muted
            loop
            playsInline
            className="case-study-video"
          />
        ) : (
          <img
            src={placeholderImage}
            alt={mediaAlt}
            className="case-study-image"
          />
        )}
      </div>
      <div className="case-study-content">
        <h3 className="case-study-title">{title}</h3>
        <p className="case-study-description">{description}</p>
      </div>
    </Card>
  );
};
