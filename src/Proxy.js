
import React from 'react'

/*
 * Proxy works as a virtual svg node.
 * @select: The css selector of the element 
 * @ref: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class Proxy extends React.Component {
  static propTypes = {
    select: React.PropTypes.string.isRequired,
    svg: React.PropTypes.object,
    ref: React.PropTypes.func,
    children: React.PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      elemRefs: null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.svg && !this.state.elemRefs) {
      var nodes = [].slice.call(nextProps.svg.querySelectorAll(this.props.select))
      // Call the ref callback with the element (or array)
      if (this.props.ref && nodes.length > 0) {
        this.props.ref(nodes.length === 1 ? nodes[0] : nodes)
      }

      this.setState({elemRefs: nodes })
    }

    if (this.state.elemRefs) {
      const pnames = Object.keys(nextProps)
      for (var i = 0; i < pnames.length; i++) {
        /* The proxy received properties, apply them to the svg element */
        const propName = pnames[i]
        this.state.elemRefs.forEach((elem) => {
            elem.setAttribute(propName, nextProps[propName])
            if (  this.props.children && typeof this.props.children === 'string') {
                elem.innerHTML = this.props.children
            }
            
        })
      }
    }
  }

  render () {
    return null
  }
}

Proxy.defaultProps = {
  ref: () => {}
}
