"use client"
import React, { useEffect, useState } from "react";

interface TitleTruncatorProps {
  title: string;
}

const TitleTruncator: React.FC<TitleTruncatorProps> = ({ title }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncatedTitle = isSmallScreen && title.length > 20 ? title.substring(0, 20) + '...' : title;

  return <>{truncatedTitle}</>;
};

export default TitleTruncator;