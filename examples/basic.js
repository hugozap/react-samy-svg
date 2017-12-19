import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Samy, SvgProxy } from '../src';

export default class basic extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      colors: ['yellow', 'red', 'black'],
      strokeColorIndex: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const nextIndex =
        (this.state.strokeColorIndex + 1) % this.state.colors.length;
      this.setState(
        Object.assign({}, this.state, { strokeColorIndex: nextIndex })
      );
    }, 500);
  }

  render() {
    const strokeColor = this.state.colors[this.state.strokeColorIndex];
    return (
      <Samy path="1.svg" style={{ width: 400, height: 'auto' }}>
        <SvgProxy selector="#Star" stroke={strokeColor} />
      </Samy>
    );
  }
}
