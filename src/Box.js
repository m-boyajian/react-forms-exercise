import React from 'react';
import './Box.css';

const Box = ({color, width, height}) => {
  if (!color || typeof color !== 'string') {
    return null; 
  }

  return (
    <div className="box" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}></div>
  );
};

export default Box;
 