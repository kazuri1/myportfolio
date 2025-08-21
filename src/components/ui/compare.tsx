"use client";
import React from "react";

interface CompareProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const Compare: React.FC<CompareProps> = ({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <h4 className="font-semibold mb-2 text-gray-700">{beforeAlt}</h4>
          <img
            src={before}
            alt={beforeAlt}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center">
          <h4 className="font-semibold mb-2 text-gray-700">{afterAlt}</h4>
          <img
            src={after}
            alt={afterAlt}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-500">
        Side-by-side comparison of the design evolution
      </p>
    </div>
  );
};
