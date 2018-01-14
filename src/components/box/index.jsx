// @flow
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, ButtonGroup } from 'reactstrap';

import './box.scss';

type State = {
  isLoading: Boolean,
  interval: number,
  popoverOpen: Boolean,
};
type Props = {
  id: string,
  title: string,
  onChange: Function,
};

class Box extends React.PureComponent<Props, State> {
  interval: any;

  constructor(props) {
    super(props);
    this.state = {
      interval: 5,
      popoverOpen: false,
    };
    this.popoverToggle = this.popoverToggle.bind(this);
    this.intervalStart = this.intervalStart.bind(this);
    this.intervalEnd = this.intervalEnd.bind(this);

    this.intervalStart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.interval !== prevState.interval) {
      this.intervalStart();
    }
  }

  onIntervalChange(value) {
    this.popoverToggle();
    this.intervalEnd();
    this.setState({ interval: value });
  }

  intervalStart() {
    this.interval = setInterval(() => {
      this.props.onChange();
    }, this.state.interval * 1000);
  }

  intervalEnd() {
    clearInterval(this.interval);
  }

  popoverToggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    const { interval } = this.state;
    const { title, id } = this.props;
    return (
      <div className="box">
        <div className="box-header">
          <h2>{title}</h2>
          <ul className="list-inline list-unstyled">
            <li>
              <Button color="primary" id={id} onClick={this.popoverToggle}>
                <i className="fa fa-cogs" aria-hidden="true" />
              </Button>
              <Popover placement="bottom" isOpen={this.state.popoverOpen} target={id} toggle={this.popoverToggle}>
                <PopoverHeader>Load data every: {interval} sec</PopoverHeader>
                <PopoverBody>
                  <ButtonGroup>
                    <Button color="primary" onClick={() => this.onIntervalChange(5)} active={this.state.interval === 5}>5 sec</Button>
                    <Button color="primary" onClick={() => this.onIntervalChange(15)} active={this.state.interval === 15}>15 sec</Button>
                    <Button color="primary" onClick={() => this.onIntervalChange(30)} active={this.state.interval === 30}>30 sec</Button>
                  </ButtonGroup>
                </PopoverBody>
              </Popover>
            </li>
          </ul>
        </div>
        <div className="box-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Box;
