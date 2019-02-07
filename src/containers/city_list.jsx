import React from 'react';
import City from './city';

const CityList = (props) => {
  return (
    <div className="city-list col-sm-4">
      {props.cities.map((city) => {
        return (
          <div className="list-group-item">
            <City city={city} />
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
