import React from "react";

class App extends React.Component{
  constructor(){
    super()
    this.state = {isOn:false}
  }
  render(){
    const url = this.state.isOn ? "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy.gif": "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy_s.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy_s.gif"
    return(<>
    <h1>Click the button to turn on/off the light</h1>
    <img src= {url}/>
    <button onClick={()=> this.setState({isOn:!this.state.isOn})}>Turn On / Turn Off</button>
    </>)
  }
}

export default App