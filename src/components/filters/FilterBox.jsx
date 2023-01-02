import React, { useContext } from 'react';
import {Context} from '../../context/Context';

const FilterBox = ({btnState}) => {

  console.log(Context);
  const [context, setContext] = useContext(Context);

  return(
    <>
      <div className="btn-div">
        {
          btnState.map((element) => {
            return(
              <button className="btns" onClick={() => setContext(element)}>{element}</button>
            )
          })
        }
      </div>
    </>
  )
}

export default FilterBox;