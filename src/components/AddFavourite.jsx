
import { useSelector, useDispatch } from 'react-redux'
  import React from 'react';
const Favourite = ({company}) => {
    const dispatch = useDispatch();
  

    return (
      <div>

        <button onClick={() => {
                  dispatch({
                    type: 'ADD_FAVOURITE',
                    payload: company, 
                  })}}>Aggiungi ai Preferiti</button>
      </div>
    );
  };
  
  export default Favourite;
  
 