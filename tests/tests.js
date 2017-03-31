var ReactDOM = require('react-dom')
var React = require('react')
var {Samy,Proxy} = require('../src/index')

var App = ()=>{
    return <Samy path="1.svg" scene={{}}/>
}

var appnode = document.createElement('div')
appnode.setAttribute('id','container')
document.body.appendChild(appnode)

ReactDOM.render(
      <div>
        <App/>
    </div>,
      document.body.querySelector('#container')
);

