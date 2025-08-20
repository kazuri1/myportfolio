import React from "react";
import { Media } from "../atoms/Media";
import { MediaTitle } from "../atoms/MediaTitle";
import "./CaseStudyTile.css";

export interface CaseStudyTileProps {
  /** The title of the case study */
  title: string;
  /** The subtitle/description text */
  subtitle: string;
  /** URL to the video/GIF/image file */
  mediaUrl?: string;
  /** Alt text for the media */
  mediaAlt?: string;
  /** Placeholder image URL (defaults to Unsplash) */
  placeholderImage?: string;
  /** Width of the media container */
  mediaWidth?: string | number;
  /** Height of the media container */
  mediaHeight?: string | number;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const CaseStudyTile: React.FC<CaseStudyTileProps> = ({
  title,
  subtitle,
  mediaUrl,
  mediaAlt = "Case study media",
  placeholderImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  mediaWidth = "100%",
  mediaHeight = "400px",
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`case-study-tile ${className}`}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Media
        src={mediaUrl}
        alt={mediaAlt}
        placeholderImage={placeholderImage}
        width={mediaWidth}
        height={mediaHeight}
      />
      <MediaTitle title={title} subtitle={subtitle} />
    </div>
  );
};
