import React from "react";
import "./Blockquote.css";

export interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className = "",
}) => {
  return (
    <blockquote className={`blockquote ${className}`}>{children}</blockquote>
  );
};
