import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Samy, SvgProxy} from '../src/index'

/* Add different use cases. Assertions will be made from 
   the test files and run with cypress */
const App = ()=>{
    return(
        <div>
           {/* Basic ajax loading */}
           <Samy path="1.svg">
           </Samy>

           {/* change property */}
           <Samy path="1.svg">
             <SvgProxy selector="#Star" fill="red"/>
           </Samy>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#container'))
