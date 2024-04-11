import React from 'react';

const ToggleButton = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
};

export default ToggleButton;
