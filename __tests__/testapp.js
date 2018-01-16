import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Samy, SvgProxy} from '../src/index'
import svgcontents from 'raw-loader!./1.svg'
import textsvg from 'raw-loader!./text.svg'

/* Add different use cases. Assertions will be made from 
   the test files and run with cypress */
const App = ()=>{
    return(
        <div>
           /* <h1> Cypress tests make assertions against this page rendered elements.</h1>
           <p> Basic ajax loading</p>
           <Samy id="basic" path="1.svg">
           </Samy>

           <p> Update fill property to red</p>           
           <Samy id="basic-update" path="1.svg">
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>

           <p> Pass style prop with custom width and border</p>           
           
           <Samy id="use-style-prop" style={{width:'500px', height:'200px', border:'solid 1px'}} path="1.svg">
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>

           <p> Pass null as path</p>           
           
           <Samy id="null-path" style={{width:'500px', height:'200px', border:'solid 1px'}} path={null}>
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>

           <p> Avoid ajax request, use svgXML prop to set svg contents </p>
           <Samy svgXML={svgcontents} style={{width:'500px', height:'200px', border:'solid 1px'}}>
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>

           <p> Using style prop for proxy (change color to red)</p>
           <Samy svgXML={svgcontents} style={{width:'500px', height:'200px', border:'solid 1px'}}>
             <SvgProxy selector="#Star" style={{fill:'red'}}/>
           </Samy> 

            <p> Using className prop for proxy to set a class</p>
           <Samy svgXML={svgcontents} style={{width:'500px', height:'200px', border:'solid 1px'}}>
             <SvgProxy selector="#Star" className="my-custom-class"/>
           </Samy> 
           

           <p> Replacing text content to "Hello SVG"</p>
           <Samy svgXML={textsvg} style={{width:'500px', height:'200px', border:'solid 1px'}}>
             <SvgProxy selector="text#label tspan" stroke="black">Hello SVG</SvgProxy>
           </Samy>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#container'))
