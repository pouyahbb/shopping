import React from "react";
import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Show Now</span>
      </div>
    </div>
  );
};

export default menuItem;

// video 12 section 4
