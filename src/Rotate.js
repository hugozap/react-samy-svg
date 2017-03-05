import React from 'react';
import {Motion, spring}  from 'react-motion';

export default class Rotate extends React.Component {
  static propTypes = {
      angle: React.PropTypes.number.isRequired,
      originX : React.PropTypes.number.isRequired,
      originY : React.PropTypes.number.isRequired,
      svg : React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
      console.log('Constructor')
  }

  render() {
    return (
      <Motion defaultStyle={{angle: 0}} style={{angle: spring(this.props.endAngle)}}>
        { (val)=>{
            var  transform = `rotate(${val.angle}, ${this.props.originX}, ${this.props.originY})`
            return (<Proxy id="ddd" svg={this.props.svg} transform={transform} />)
        }}
      </Motion>
    );
  }
}
