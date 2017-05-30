var ReactDom = require('react-dom')
var React = require('react')
var {Samy, Proxy} = require('../src/index')

export default (props) => {
	//Note: The selector is "#text-3 tspan"
	return (<Samy path="text.svg"
		          style={{width:400, height:'auto'}}>
			  <Proxy select="#text-3 tspan">Text changed </Proxy>
			</Samy>)
}
