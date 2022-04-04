import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
      this.gethandel=this.gethandel.bind(this)
    }
    gethandel(){
        this.setState({
            message:'goodbye!' 
        })
    }
  render() {
    return (
        <div>
      <div>{this.state.message}</div>
      <button onClick={this.gethandel.bind(this)} >Click</button>
      <button onClick={()=>this.gethandel()} >Click</button>
      <button onClick={this.gethandel} >Click</button>
      </div>
    )
  }
}

export default EventBind