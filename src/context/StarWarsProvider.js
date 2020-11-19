import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPrismPlanet from '../services/planetServices';

import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  // armazenando os dados: lista de planetas. Cria-se uma variável no estado em um
  // componente funcional através do useState();
  const [data, setPrismPlanets] = useState([]);

  const getPrismPlanet = async () => {
    const allPrismPlanets = await fetchPrismPlanet();
    setPrismPlanets(allPrismPlanets);
  };

  return (
    <StarWarsContext.Provider value={ { data, getPrismPlanet } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.arrayOf().isRequired };

export default StarWarsProvider;
