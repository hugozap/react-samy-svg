import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Samy, SvgProxy} from '../src/index'

/* Add different use cases. Assertions will be made from 
   the test files and run with cypress */
const App = ()=>{
    return(
        <div>
    
           <p> Basic ajax loading</p>
           <Samy path="1.svg">
           </Samy>

           <p> Update fill property to red</p>           
           <Samy path="1.svg">
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>

           <p> Pass style prop with custom width and border</p>           
           
           <Samy style={{width:'500px', height:'200px', border:'solid 1px'}} path="1.svg">
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#container'))
