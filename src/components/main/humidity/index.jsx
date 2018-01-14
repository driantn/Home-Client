// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from 'app/components/progressbar';
import { getHumidity } from 'app/stores/humidity';
import Box from 'app/components/box';

type State = {};
type Props = {
  humidity: Object,
  onHumidityChange: typeof getHumidity,
};

class HumidityBase extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.onHumidityChange();
  }

  render() {
    const { humidity, onHumidityChange } = this.props;
    const boxProps = {
      title: 'Current Humidity',
      id: 'humidity_main',
      onChange: () => {
        onHumidityChange();
      },
    };

    return (
      <div>
        <Box {...boxProps} >
          <ProgressBar {...humidity} parent="humidity" />
        </Box>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { humidity } = state;
  return {
    humidity,
  };
}

function mamDispatchToProps(dispatch) {
  return bindActionCreators({
    onHumidityChange: getHumidity,
  }, dispatch);
}

const Humidity = connect(mapStateToProps, mamDispatchToProps)(HumidityBase);
export default Humidity;
