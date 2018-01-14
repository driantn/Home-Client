// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from 'app/components/progressbar';
import { getTemperature } from 'app/stores/temperature';
import Box from 'app/components/box';

type State = {};
type Props = {
  temperature: Object,
  onTemperatureChange: typeof getTemperature,
}

class TemperatureBase extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.onTemperatureChange();
  }

  render() {
    const { temperature, onTemperatureChange } = this.props;
    const boxProps = {
      id: 'temperature_main',
      title: 'Current Temperature',
      onChange: () => {
        onTemperatureChange();
      },
    };

    return (
      <div>
        <Box {...boxProps} >
          <ProgressBar {...temperature} parent="temperature" />
        </Box>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { temperature } = state;
  return {
    temperature,
  };
}

function mamDispatchToProps(dispatch) {
  return bindActionCreators({
    onTemperatureChange: getTemperature,
  }, dispatch);
}

const Temperature = connect(mapStateToProps, mamDispatchToProps)(TemperatureBase);
export default Temperature;
