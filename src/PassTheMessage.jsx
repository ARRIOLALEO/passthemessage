import React from "react";
import './App.css'
import Message from "./components/Message";
class PassTheMessage extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue:"hello",
            lastMessage:""
        }
    }
    handlerButton = () =>{
        console.log("i was clicked")
        //change lstMessage for what is ininputValue
        //i have to clean input value
    }
    render(){
        
        const formStyles = {
            backgroundColor:"white",
            padding:"2rem",
            marginTop:"5rem"
        }

        const h1Styles ={
            fontSize:"30px"
        }
       return(
           <>
           <div className="row">
               <div className="col-md-3"></div>
               <div className="col-md-6" style={formStyles}>
                   <h1 style={h1Styles}>A Message You Would Like To Pass</h1>
                   <label htmlFor="message" className="form-label">Write your Message here </label>

                   <input name="message" value={this.state.inputValue} onChange={(event)=>this.setState({...this.state,inputValue:event.target.value})} className="form-control"/>
                   
                   <button className="btn-primary" onClick={this.handlerButton} >Send</button>
                   <div></div>
                   <Message data={this.state.lastMessage}/>
                </div>
               <div className="col-md-3"></div>
           </div>
           </>
       )
    }
}
export default PassTheMessage