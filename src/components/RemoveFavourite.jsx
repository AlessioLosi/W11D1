import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Favourites = () => {
  const arrayOfFavourites = useSelector((store) => {
    return store
  })
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Preferiti</h2>
      <ul>
        {arrayOfFavourites.map((company, index) => (
          <li key={index}>
            {company.name}
            <button onClick={() => {
                  dispatch({
                    type: 'REMOVE_FAVOURITE',
                    payload: company, 
                  });
                }}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
