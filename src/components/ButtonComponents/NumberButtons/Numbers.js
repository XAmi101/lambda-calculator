import React, { useState } from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';


//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  // numbers from data.js
  return (
    <div className = 'numBtn'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(item => <NumberButton number={item}/>)}
      {/* {numberState.map((item, index) => (<NumberButton buttonContent={item} key={index} />))}*/}
    </div>
  );
};
export default Numbers;
