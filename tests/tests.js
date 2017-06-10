var ReactDOM = require("react-dom")
var React = require("react")
var { Samy, Proxy } = require("../src/index")

var Basic = () => {
    return <Samy path="1.svg" scene={{}} />
}

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fill: "#000",
            offsetX:0
        }
    }

    componentDidMount() {
        setInterval(() => {
            var fillValue = this.state.fill === "#000" ? "#eee" : "#000"
            console.log("fillValue", fillValue)
            this.setState({ fill: fillValue, offsetX: Math.random()*50 })
        }, 1000)
    }

    render() {
        return (
            <Samy path="1.svg" svgAttributes={{viewBox:`${this.state.offsetX} 0 50 50`}}>
                <Proxy select={"polygon"} fill={this.state.fill} />
            </Samy>
        )
    }
}

var ModifyViewBox = () => {
    return <Samy path="1.svg" svgAttributes={{viewBox:'0 0 40 40'}}/>
}

var appnode = document.createElement("div")
appnode.setAttribute("id", "container")
document.body.appendChild(appnode)

ReactDOM.render(
    <div>
        Load an inject SVG
        <Basic />
        Change svg properties (viewbox) and fillcolor
        <Timer />
        Change viewbox
        <ModifyViewBox/>
    </div>,
    document.body.querySelector("#container")
)
