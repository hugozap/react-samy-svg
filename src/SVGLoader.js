import React from 'react'
import ReactSVG from 'react-svg'

/* Just a wrapper around ReactSVG to disable re rendering it */
export default class SVGLoader extends React.Component {
  static propTypes = {
    path: React.PropTypes.string.isRequired,
    onSVGReady: React.PropTypes.function
  }

  static defaultProps = {
      onSVGReady: function(){}
  }

  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.path !== this.props.path) {
      return true
    }

    return false
  }

  render () {
    return (

      <ReactSVG className={this.props.className || ''}  style={this.props.style || {}} path={this.props.path} callback={this.props.onSVGReady} />
    )
  }
}

