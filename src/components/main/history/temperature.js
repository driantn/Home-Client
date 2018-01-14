// @flow
import React from 'react';
import { ResponsiveContainer, AreaChart, Tooltip, Area, YAxis } from 'recharts';
import Loading from 'app/components/loading';
import ChartTooltip from 'app/components/tooltip/index';

type Props = {};

const Temperature = (props: Props) => {
  if (!props.data.length) {
    return (
      <Loading />
    );
  }
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        data={props.data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <YAxis />
        <Tooltip content={<ChartTooltip unit="°C" />} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// const Temperature = (props: Props) => (
//   <ResponsiveContainer width="100%" height="80%">
//     <AreaChart
//       data={props.data}
//       margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
//     >
//       <YAxis />
//       <Tooltip payload={props.data} />
//       <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
//     </AreaChart>
//   </ResponsiveContainer>
// );

export default Temperature;
