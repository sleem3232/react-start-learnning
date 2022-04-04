import React from "react"
import { Component } from "react"
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'wellcom visetor',
            age:'32'
        }
    }
    changemessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }
    render(){
        return (
            <div> <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemessage()}>subscribe</button>
            </div>
        )
                

    }
}
export default Message