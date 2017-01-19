import {shallow, mount} from 'enzyme'
import React from 'react'
import test from 'tape'
import MyComponent from '../src/index'

test('shallow', function (t) {
  t.plan(1)
  var wrapper = shallow(<MyComponent />)
  t.equal(wrapper.find('span').length, 1)
}
)
