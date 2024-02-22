import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert color value to hexadecimal format
    const hexColor = value;

    // Ensure width and height are parsed as integers
    const intValue = parseInt(value);

    // Check if the parsed value is a valid number
    const numericValue = isNaN(intValue) ? '' : intValue;

    setFormData(formData => ({
      ...formData,
      [name]: name === 'color' ? hexColor : numericValue // Use hexadecimal color value, numeric value for width and height
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        name="color"
        placeholder="Background Color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:{formData.width}</label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="pixels"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:{formData.height}</label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="pixels"
        value={formData.height}
        onChange={handleChange}
      />
      <br></br>
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;