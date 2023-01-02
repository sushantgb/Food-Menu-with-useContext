import React, { useState } from 'react';
import FoodData from '../data/FoodData';
import FilterBox from './FilterBox';

/* category buttons */
const UniqueBtns = [
  ...new Set(FoodData.map((element) => {
    return element.category;
  })
  ), "All"
];


const Filters = () => {
  const [btnState, setBtnState] = useState(UniqueBtns);
  return (
    <>
      <div className="buttons">
          <FilterBox btnState={btnState} /> 
      </div>
    </>
  )
}

export default Filters;