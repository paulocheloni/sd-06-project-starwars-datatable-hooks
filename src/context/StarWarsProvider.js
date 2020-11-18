import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import fetchPlanetsData from '../services/dataServicesAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredName, setFilteredName] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanetsData();
      planets.map((orb) => delete orb.residents);
      setData(planets);
    };
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, setData, filteredName, setFilteredName } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
