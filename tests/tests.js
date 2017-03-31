var ReactDOM = require('react-dom')
var React = require('react')
var {Samy,Proxy} = require('../src/index')

var Basic = ()=>{
    return <Samy path="1.svg" scene={{}}/>
}

class Timer extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            fill:'#000'
        }
    }

    componentDidMount(){
        setInterval( () => { 
            var fillValue = this.state.fill === '#000' ? '#eee' : '#000'      
            console.log('fillValue',fillValue)
            this.setState({fill:fillValue})
        },1000)
    }

    render() {
        return <Samy path="1.svg" scene={this.state}>
                <Proxy select={"polygon"} fill={this.state.fill}/>
            </Samy>
    }
}

var appnode = document.createElement('div')
appnode.setAttribute('id','container')
document.body.appendChild(appnode)

ReactDOM.render(
      <div>
        <Basic/>
        <Timer/>
    </div>,
      document.body.querySelector('#container')
);

