import React, { useState } from "react";
import { motion } from "framer-motion";
import "./container.scss";

const Container = ({ header, children }) => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
    const targetLeft = e.currentTarget.getBoundingClientRect().left;
    const targetTop = e.currentTarget.getBoundingClientRect().top;
    const halfWidth = (e.currentTarget.getBoundingClientRect().right - targetLeft) / 2;
    const halfHeight = (e.currentTarget.getBoundingClientRect().bottom - targetTop) / 2;
    const centerOffsetX = e.clientX - targetLeft - halfWidth;
    const centerOffsetY = e.clientY - targetTop - halfHeight;
    const translateX = (centerOffsetX / halfWidth) * 10;
    const translateY = (centerOffsetY / halfHeight) * 10;
    setTranslate({ x: translateX, y: translateY });
  }

  const handleLeave = () => {
    setTranslate({ x: 0, y: 0 });
  }

  return (
    <motion.div 
      className="Container"
      onMouseMove={(e) => handleHover(e)}
      onMouseLeave={() => handleLeave()}
      animate={{ x: translate.x, y: translate.y }}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 500
      }}
    >
      <div className="header">
        <h1>{header}</h1>
      </div>
      {children}
    </motion.div>
  );
}

export default Container;