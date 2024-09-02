import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Favourites = () => {
  const favourites = useSelector((state) => state); 
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Preferiti</h2>
      <ul>
        {favourites.map((company, index) => (
          <li key={index}>
            {company.company_name}
            <button onClick={() => {
                  dispatch({
                    type: 'REMOVE_FAVOURITE',
                    payload: company,  // Usa `company` come payload
                  });
                }}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
