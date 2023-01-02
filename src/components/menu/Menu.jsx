import React, { useState, useContext, useEffect } from 'react';
import MenuCard from './MenuCard';
import FoodData from '../data/FoodData';
import { Context } from '../../context/Context';

const Menu = () => {
  const context = useContext(Context);
  const [cardState, setCardState] = useState(FoodData);

  /* useEffect(() => {
    setCardState(FoodData);
  }, [cardState]) */

  useEffect(() => {
    console.log(context[0]);
    if(context[0] === "All"){
      setCardState(FoodData);
    }else{
      const updater = FoodData.filter((element) => {
        console.log(element.category === context[0]);
        return element.category === context[0];
      })
      setCardState(updater);
    }
  }, [context])
  
/*   const FilterFunc = (context) => {
    if(context === "All"){
      setCardState(FoodData);
    }
    const Updater = FoodData.filter((element)=>{
      console.log(element.category === context);
      return element.category === context;
    })
    setCardState(Updater);
  }
  if(context !== "Default"){
    FilterFunc(context);
  }
  
  ----- I get too many re-renders.... :( I am tired of trying this usecontext method to transfer data from on no related component to other non related or non child-parent component.. to get rid of re-renders I used useEffect.)
  */
  return (
    <>
      <div>
        <MenuCard cardState={cardState} />
      </div>
    </>
  );
};

export default Menu;
