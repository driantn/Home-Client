import React from 'react';

const temperature = (props) => {
  const { data } = props;
  return (
    <div>
      <p>Hello Temperature!</p>
      {data.value}
      {data.unit}
    </div>
  );
};

export default temperature;
