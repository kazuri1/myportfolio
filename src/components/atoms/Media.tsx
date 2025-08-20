import React from "react";
import "./Media.css";

export interface MediaProps {
  /** URL to the video/GIF/image file */
  src?: string;
  /** Alt text for the media */
  alt?: string;
  /** Placeholder image URL (defaults to Unsplash) */
  placeholderImage?: string;
  /** Width of the media container */
  width?: string | number;
  /** Height of the media container */
  height?: string | number;
  /** Additional CSS classes */
  className?: string;
}

export const Media: React.FC<MediaProps> = ({
  src,
  alt = "Media content",
  placeholderImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  width = "100%",
  height = "240px",
  className = "",
}) => {
  const isVideo =
    src &&
    (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov"));
  const isGif = src && src.endsWith(".gif");

  return (
    <div className={`media-container ${className}`} style={{ width, height }}>
      {src ? (
        isVideo ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="media-video"
          />
        ) : isGif ? (
          <img src={src} alt={alt} className="media-image" />
        ) : (
          <img src={src} alt={alt} className="media-image" />
        )
      ) : (
        <img src={placeholderImage} alt={alt} className="media-image" />
      )}
    </div>
  );
};
