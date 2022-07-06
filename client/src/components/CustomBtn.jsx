import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomBtn = ({ url, text, styles }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(url);
      }}
      className={styles}
    >
      <span>{text}</span>
    </button>
  );
};

export default CustomBtn;
