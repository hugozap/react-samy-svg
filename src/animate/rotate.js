import React from 'react'
import {Proxy} from '../Proxy'
import {Motion, spring} from 'react-motion'
/* Helper utility renders a Motion (from react-motion)
 * that will interpolate from 2 values using spring
 * physics
 */
export default (svg, selector, targetAngle, originX, originY) => {
  return
    <Motion defaultStyle={{a: 0}} style={{a: spring(targetAngle)}}>
    {
                (val) => {
                  const transform = `rotate(${val.a}, ${originX}, ${originY})`
                  return <Proxy svg={svg} select={selector} transform={transform} />
                }
            }
  </Motion>
}

