
import React from 'react'

/*
 * Proxy works as a virtual svg node.
 * @select: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class Proxy extends React.Component {
  static propTypes = {
    select: React.PropTypes.string.isRequired,
    onElementSelected: React.PropTypes.func,
    children: React.PropTypes.string,
  }

  static contextTypes = {
    svg: React.PropTypes.object,
  }

  constructor (props, context) {
    super(props)
    this.state = {
      elemRefs: null
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    var elems = this.state.elemRefs || [] 
    if (nextContext.svg && elems.length === 0) {
      //We don't have the svg element reference.
      
      var nodes = [].slice.call(nextContext.svg.querySelectorAll(this.props.select))
      if(nodes.length === 0 && ['svg','root'].indexOf(this.props.select) >= 0 ) {
        //If the selector equls 'svg' or 'root' use the svg node
        nodes.push(nextContext.svg)
      }
      // Call the onElementSelected callback with the element (or array)
      if (this.props.onElementSelected && nodes.length > 0) {
        this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes)
      }
      
      elems = nodes
      this.setState({elemRefs: nodes })
    }

    if (elems) {
      const pnames = Object.keys(nextProps)
      for (var i = 0; i < pnames.length; i++) {
        /* The proxy received properties, apply them to the svg element */
        const propName = pnames[i]
        elems.forEach((elem) => {
            // TODO: replace this with a faster alternative
          if (typeof nextProps[propName] === 'function') {
            elem[propName] = nextProps[propName]
          } else {
            elem.setAttribute(propName, nextProps[propName])
            if (typeof this.props.children === 'string' && this.props.children.trim().length > 0) {
              elem.innerHTML = this.props.children
            }
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
  onElementSelected: () => {}
}
