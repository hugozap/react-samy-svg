import React from 'react'
import Proxy from './Proxy'
import motionUtils from './animate/'
import SVGLoader from './SVGLoader'

class Samy extends React.Component {

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    ref: React.PropTypes.func,
    scene: React.PropTypes.object.isRequired
  }

  static childContextTypes = {
    svg: React.PropTypes.object
  }

  getChildContext () {
    return {
      svg: this.state.svg
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      svg: null
    }
  }
  onSVGReady (svgNode) {
    this.setState({svg: svgNode})
    this.props.ref(svgNode)
  }

  render () {
    return <div> <SVGLoader className={this.props.className || ''} style={this.props.style} path={this.props.path} onSVGReady={this.onSVGReady.bind(this)} />
      {this.props.children} </div>
  }
}

Samy.defaultProps = {
  ref: function () { console.log('samy ref default function') }
}

export {Proxy, Samy, motionUtils }
