// @flow
import React from 'react';
import { ResponsiveContainer, AreaChart, Tooltip, Area, YAxis } from 'recharts';
import ChartTooltip from 'app/components/tooltip/index';

type Props = {};

const Humidity = (props: Props) => (
  <ResponsiveContainer width="100%" height="80%">
    <AreaChart
      data={props.data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
    >
      <YAxis />
      <Tooltip content={<ChartTooltip unit="%" />} />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default Humidity;
