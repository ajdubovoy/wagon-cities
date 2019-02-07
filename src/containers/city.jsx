import React from 'react';

const City = (props) => {
  return (
    <div className="list-group-item">
      {props.city.name}
    </div>
  );
};

export default City;
