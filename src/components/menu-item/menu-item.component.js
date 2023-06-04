import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkURL }) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkURL}`)}>
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

export default MenuItem;
