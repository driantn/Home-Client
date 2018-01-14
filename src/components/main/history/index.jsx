// @flow
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTemperatureHistory } from 'app/stores/temperature';
import { getHumidityHistory } from 'app/stores/humidity';
import { getLightHistory } from 'app/stores/light';

import Temperature from './temperature';
import Humidity from './humidity';
import Light from './light';

import './history.scss';

type Props = {
  tempHistory: Array<Object>,
  onGetTemperatureHistory: typeof getTemperatureHistory,
  onGetLightHistory: typeof getLightHistory,
  onGetHumidityHistory: typeof getHumidityHistory,
};
type State = {};

class HistoryBase extends React.PureComponent<Props, State> {
  static makeChartData(data) {
    return data.map(({ timestamp, value }) => ({ name: new Date(timestamp), value }));
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  componentDidMount() {
    const { onGetTemperatureHistory, onGetHumidityHistory, onGetLightHistory } = this.props;
    onGetTemperatureHistory();
    onGetHumidityHistory();
    onGetLightHistory();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }


  render() {
    const { tempHistory, humidityHistory, lightHistory } = this.props;
    return (
      <div className="history">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Temperature
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             Humidity
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             Light
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Temperature data={this.constructor.makeChartData(tempHistory)} />
          </TabPane>
          <TabPane tabId="2">
            <Humidity data={this.constructor.makeChartData(humidityHistory)} />
          </TabPane>
          <TabPane tabId="3">
            <Light data={this.constructor.makeChartData(lightHistory)} />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { temperature, humidity, light } = state;
  return {
    tempHistory: temperature.history,
    humidityHistory: humidity.history,
    lightHistory: light.history,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
   onGetTemperatureHistory: getTemperatureHistory,
   onGetHumidityHistory: getHumidityHistory,
   onGetLightHistory: getLightHistory,
  }, dispatch);
}
const History = connect(mapStateToProps, mapDispatchToProps)(HistoryBase);
export default History;
