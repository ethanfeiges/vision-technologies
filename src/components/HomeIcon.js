import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './HomeIcon.css'; // Make sure to create this CSS file

const HomeIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <button className="home-icon" onClick={handleClick} aria-label="Home">
      <FaHome /> {/* Font Awesome Home icon */}
    </button>
  );
};

export default HomeIcon;