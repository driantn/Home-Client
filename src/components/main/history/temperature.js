// @flow
import React from 'react';
import { ResponsiveContainer, AreaChart, Tooltip, Area, YAxis } from 'recharts';

type Props = {};
const Temperature = (props: Props) => (
  <ResponsiveContainer width="100%" height="80%">
    <AreaChart
      data={props.data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
    >
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default Temperature;
