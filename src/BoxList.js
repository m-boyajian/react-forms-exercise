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
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ color, width, height }, index) => <Box key={index} color={color} width={width} height={height} />)}
      </div>
    </div>
  )
}

export default BoxList;