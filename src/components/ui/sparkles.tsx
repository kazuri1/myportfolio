"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  sparkleCount?: number;
  sparkleSize?: number;
  sparkleColor?: string;
  sparkleDuration?: number;
}

export const Sparkles: React.FC<SparklesProps> = ({
  children,
  className = "",
  sparkleCount = 3,
  sparkleSize = 4,
  sparkleColor = "#FFD700",
  sparkleDuration = 1.5,
}) => {
  const [sparkles, setSparkles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * sparkleSize + 2,
        opacity: Math.random() * 0.8 + 0.2,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, sparkleDuration * 1000);
    return () => clearInterval(interval);
  }, [sparkleCount, sparkleSize, sparkleDuration]);

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkleColor,
            borderRadius: "50%",
            opacity: sparkle.opacity,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, sparkle.opacity, 0],
          }}
          transition={{
            duration: sparkleDuration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};
