import React from 'react';
import './Box.css';

const Box = ({color, width, height, id, removeBox }) => {
  if (!color || typeof color !== 'string') {
    return null; 
  }

  const handleDelete = () => {
    removeBox(id);
  }

  return (
    <div className="box" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}>
      <button className="delete-btn" onClick={handleDelete}>X</button>
    </div>
    
  );
};

export default Box;
 