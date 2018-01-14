// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from 'app/components/progressbar';
import { getLight } from 'app/stores/light';
import Box from 'app/components/box';

type State = {};
type Props = {
  light: Object,
  onLightChange: typeof getLight,
};

class Lightbase extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.onLightChange();
  }

  render() {
    const { light, onLightChange } = this.props;
    const boxProps = {
      title: 'Current Light',
      id: 'light_main',
      onChange: () => {
        onLightChange();
      },
    };

    return (
      <div>
        <Box {...boxProps} >
          <ProgressBar {...light} parent="light" />
        </Box>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { light } = state;
  return {
    light,
  };
}

function mamDispatchToProps(dispatch) {
  return bindActionCreators({
    onLightChange: getLight,
  }, dispatch);
}

const Light = connect(mapStateToProps, mamDispatchToProps)(Lightbase);
export default Light;
