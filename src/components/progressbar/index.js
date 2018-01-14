// @flow
import React from 'react';
import { Circle } from 'rc-progress';

import './progressbar.scss';


const ProgressBar = (props) => {
  const { value, unit, parent } = props;
  const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
  const color = colorMap[parseInt(Math.random() * 3, 10)];
  return (
    <div className="hc-progress">
      <Circle
        percent={value}
        strokeWidth="6"
        strokeColor={color}
        gapDegree={70}
        gapPosition="bottom"
        strokeLinecap="square"
        trailWidth="6"
      />
      {parent === 'temperature' && <span className="hc-progress-value">{`${parseInt(value, 10)} ${unit === 'celsius' ? '°C' : '°F'}`}</span>}
      {parent === 'humidity' && <span className="hc-progress-value">{`${parseInt(value, 10)} %`}</span>}
      {parent === 'light' && <span className="hc-progress-value">{`${parseInt(value, 10)} ${unit}`}</span>}
    </div>
  );
};

// const ProgressBar = ({ value, unit }) => (
//   <div className="hc-progress">
//     <span className="hc-progress-left">
//       <span className="hc-progress-bar" />
//     </span>
//     <span className="hc-progress-right">
//       <span className="hc-progress-bar" />
//     </span>
//     <div className="hc-progress-value">{`${value}${unit === 'celsius' ? '°C' : '°F'}`}</div>
//   </div>
// );

export default ProgressBar;
