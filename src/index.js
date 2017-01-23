import React from 'react'
import Proxy from './Proxy'
import SVGLoader from './SVGLoader'

class Samy extends React.Component {

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    ref: React.PropTypes.fun
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
    const childrenCallbackResult = this.props.children(this.state.svg)
    return (
      <div>
        <SVGLoader path={this.props.path} onSVGReady={this.onSVGReady.bind(this)} />
        {childrenCallbackResult}
      </div>
    )
  }
}

Samy.defaultProps = {
    ref: ()=>{}
}

export {Proxy, Samy}
