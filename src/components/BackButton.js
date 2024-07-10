import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="btn__all" style={{ textAlign: 'left' }}>
      <Link onClick={handleNavigateBack} className="primary-btn">
        <span className="arrow_left"></span> Back
      </Link>
    </div>
  );
};

export default BackButton;
