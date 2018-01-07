// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { getTemperature } from 'app/stores/temperature';

import Temperature from 'app/components/temperature';
import Humidity from 'app/components/humidity';
import Light from 'app/components/light';

type State = {};
type Props = {
  temperature: number,
  humidity: number,
  light: number,
  onTemperatureChange: typeof getTemperature,
}

class Home extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.onTemperatureChange();
  }
  render() {
    const { temperature, humidity, light } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Temperature data={temperature} />
          </Col>
          <Col>
            <Humidity data={humidity} />
          </Col>
          <Col>
            <Light data={light} />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { temperature, humidity, light } = state;
  return {
    temperature,
    humidity,
    light,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onTemperatureChange: getTemperature,
  }, dispatch);
}

const Homepage = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Homepage;
