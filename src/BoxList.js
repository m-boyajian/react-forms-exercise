import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
  console.log("BoxList rendered");
  const INITIAL_STATE= [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    console.log("New Box:", newBox);
    setBoxes(boxes => [...boxes, { id: uuidv4(), ...newBox }]);
  }

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ color, width, height, id }, index) => (
          <Box 
            key={id} 
            color={color} 
            width={width} 
            height={height} 
            id={id} 
            removeBox={removeBox} 
            />
          ))}
      </div>
    </div>
  )
}

export default BoxList;