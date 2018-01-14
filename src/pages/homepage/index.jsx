// @flow
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Temperature from 'app/components/main/temperature';
import Humidity from 'app/components/main/humidity';
import Light from 'app/components/main/light';
import History from 'app/components/main/history';
import PiInfo from 'app/components/main/pi-info';


const Homepage = () => (
  <Container>
    <Row>
      <Col>
        <Temperature />
      </Col>
      <Col>
        <Humidity />
      </Col>
      <Col>
        <Light />
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        {/* <PiInfo /> */}
      </Col>
      <Col>
        <History />
      </Col>
    </Row>
  </Container>
);

export default Homepage;

