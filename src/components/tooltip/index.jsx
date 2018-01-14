// @flow
import React from 'react';
import moment from 'moment';

import './tooltip.scss';

type Props = {
  unit: string,
  data: Object,
};

class ChartTooltip extends React.PureComponent<Props> {
  render() {
    const { active, payload, unit = '' } = this.props;
    if (!active) {
      return null;
    }
    const { name, value } = payload[0].payload;
    return (
      <div className="chart-tooltip">
        <p className="label">
          {moment(name).format('DD-MM-YYYY HH:MM')}
        </p>
        <p className="intro">
          {`value: ${value} ${unit}`}
        </p>
      </div>
    );
  }
}

export default ChartTooltip;
