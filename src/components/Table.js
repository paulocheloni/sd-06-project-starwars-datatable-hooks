import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getData } = useContext(StarWarsContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Diameter</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr>
            <td key={ planet.name }>{ planet.name }</td>
            <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
            <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
            <td key={ planet.diameter }>{ planet.diameter }</td>
            <td key={ planet.climate }>{ planet.climate }</td>
            <td key={ planet.gravity }>{ planet.gravity }</td>
            <td key={ planet.terrain }>{ planet.terrain }</td>
            <td key={ planet.surface_water }>{ planet.surface_water }</td>
            <td key={ planet.population }>{ planet.population }</td>
            <td key={ planet.films }>{ planet.films }</td>
            <td key={ planet.created }>{ planet.created }</td>
            <td key={ planet.edited }>{ planet.edited }</td>
            <td key={ planet.url }>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;