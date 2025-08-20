import React from "react";
import "./MediaTitle.css";

export interface MediaTitleProps {
  /** The main title text */
  title: string;
  /** The subtitle/description text */
  subtitle: string;
  /** Additional CSS classes */
  className?: string;
}

export const MediaTitle: React.FC<MediaTitleProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`media-title-container ${className}`}>
      <h3 className="media-title">{title}</h3>
      <p className="media-subtitle">{subtitle}</p>
    </div>
  );
};
