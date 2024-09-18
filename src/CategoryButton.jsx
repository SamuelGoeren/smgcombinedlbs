import React from 'react';
import { Button } from '@mui/material';

const CategoryButton = ({ category, isSelected, onClick }) => {
  const buttonStyle = {
    margin: '5px',
    backgroundColor: isSelected ? '#1976d2' : '#e0e0e0', // Adjust colors as needed
    color: isSelected ? 'white' : 'black',
  };

  return (
    <Button
      style={buttonStyle}
      onClick={onClick}
    >
      {category}
    </Button>
  );
};

export default CategoryButton;
