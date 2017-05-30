var ReactDOM = require('react-dom')
var React = require('react')
import {Samy, Proxy} from '../src/index'
import Basic from './basic'
import Text from './text'

console.log(Text)

ReactDOM.render(
	<div>
		<Basic/>
		<Text/>
	</div>, 
document.querySelector('#root'))