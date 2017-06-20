import React from 'react'
import Proxy from './Proxy'
import SVGLoader from './SVGLoader'

class Samy extends React.Component {

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    onSVGReady: React.PropTypes.func,
    svgAttributes: React.PropTypes.object
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
    //set svgAttributes
    if (svgNode && this.props.svgAttributes) {
      var keys = Object.keys(this.props.svgAttributes)
      keys.forEach((k)=>{
        svgNode.setAttribute(k, this.props.svgAttributes[k])
      })
    }

    this.setState({svg: svgNode})
    this.props.onSVGReady(svgNode)
  }

  componentWillReceiveProps(nextProps) {
    //Apply properties to svg element
    if (this.props.svgAttributes  != nextProps.svgAttributes) {
      if (this.state.svg) {
        var keys = Object.keys(nextProps.svgAttributes)
        keys.forEach((k)=>{
          this.state.svg.setAttribute(k, nextProps.svgAttributes[k])
        })
      }
    }
  }

  render () {
    return <div> <SVGLoader className={this.props.className || ''} style={this.props.style} path={this.props.path} onSVGReady={this.onSVGReady.bind(this)} />
      {this.props.children} </div>
  }
}

Samy.defaultProps = {
  onSVGReady: new Function()
}
export {Proxy, Samy }
