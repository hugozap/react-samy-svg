const ReactDom = require('react-dom');
const React = require('react');
const { Samy, Proxy } = require('../src/index');

export default class basic extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
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
      console.log('Color state changed:' + nextIndex);
    }, 500);
  }

  render() {
    const strokeColor = this.state.colors[this.state.strokeColorIndex];
    return (
      <Samy path="1.svg" style={{ width: 400, height: 'auto' }}>
        <Proxy select="#Star" stroke={strokeColor} />
      </Samy>
    );
  }
}
