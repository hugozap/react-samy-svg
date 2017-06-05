var ReactDom = require('react-dom')
var React = require('react');
var {Samy, Proxy} = require('../src/index')
var { Animate } = require( 'react-move' )



export default class Robot1 extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	bodyY: 0,
    	leg1Y: 0,
    	leg2Y: -20,
    	headRotation: 0,
    	headDirection: 1,
    	steamOpacity: 0
    }
  }



  jump(prevState) {
  	return {bodyY: (Math.random()* 10) - 10}
  }

  walk(prevState) {
  	var length = 5
  	return {leg1Y: prevState.leg1Y === 0 ? -length : 0,
  			leg2Y: prevState.leg2Y === -length ? 0 : -length}
  }

  rotateHead(prevState) {
  	var max = 10
  	return {
  		headDirection: -prevState.headDirection,
  		headRotation : max * prevState.headDirection
  	}
  
  }

  steam(prevState) {
  	return {
  		steamOpacity: prevState.steamOpacity === 0 ? 1.0 : 0
  	}
  }

  componentDidMount() {


  	//Use React Move to animate the body
  	setInterval(()=>{
  		this.setState(this.jump)
  	},100)

  	setInterval(()=>{
  		this.setState(this.walk)
  	},200)

  	setInterval(()=>{
  		this.setState(this.rotateHead)
  		this.setState(this.steam)
  		
  	},1000)
  }


  render() {
    console.log(this.state.headRotation)
    return (<div><Samy path="./robots/gertbot.svg"
    	          style={{width:268, height:406}}>
    		 
    		  		<Animate
    		  		  // Set some default data
    		  		  default={{
    		  		    y: 0,
    		  		    leg1: 0,
    		  		    leg2: 0,
    		  		    headRotation: 0,
    		  		  }}
    		  		  // Update your data to whatever you want
    		  		  data={{
    		  		    y: this.state.bodyY,
    		  		    leg1: this.state.leg1Y,
    		  		    leg2: -this.state.leg1Y,
    		  		    headRotation: this.state.headRotation,
    		  		    steamOpacity: this.state.steamOpacity
    		  		  }}
    		  		  duration={50}
    		  		  easing='cubicin' // anything from https://github.com/d3/d3-ease
    		  		>
    		  		  {data => 
    		      		  <div><Proxy select="#core" transform={`translate(0 ${data.y})`}> </Proxy>
    		      		  <Proxy select="#arm1" transform={`translate(0 ${data.y*0.5})`}> </Proxy>
    		      		  <Proxy select="#arm2" transform={`translate(0 ${-data.y*0.5})`}> </Proxy>
    		      		  <Proxy select="#leg1" transform={`translate(0 ${data.leg1})`}> </Proxy>
    		      		  <Proxy select="#leg2" transform={`translate(0 ${data.leg2})`}> </Proxy>
    		  			  <Proxy select="#head" transform={`rotate(${data.headRotation} 134 176)`}> </Proxy>
    		  			 
    		      		  </div>
    		  		  }
    		  		</Animate>

    		  		<Animate
    		  		  // Set some default data
    		  		  default={{
    		  		    headRotation: 0,
    		  		    steamOpacity: 0
    		  		  }}
    		  		  // Update your data to whatever you want
    		  		  data={{ 
    		  		  	headRotation: this.state.headRotation,
    		  		    steamOpacity: this.state.steamOpacity
    		  		   }} duration={300} easing='cubicin' >
    		  		  { data => <div> <Proxy select="#head" transform={`rotate(${data.headRotation} 134 176)`}> </Proxy> 
    		  		   <Proxy select="#steam:nth-child(odd)" fill-opacity={data.steamOpacity}> </Proxy>
    		  		   <Proxy select="#steam:nth-child(even)" fill-opacity={1-data.steamOpacity}> </Proxy>
    		  		  </div>}
    		  		</Animate>

    		</Samy>

    		</div>)
  }
}



const animateBody= ()=>{
	console.log('yeah')
	
}
