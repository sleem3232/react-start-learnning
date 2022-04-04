import React, { Component } from 'react'


class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:1
        }
      }
      increment(){
      
      }
      incrementfic(){
          this.increment()
          this.increment()
          this.increment()
          this.increment()
          this.increment()
          this.setState((previes)=>({
            count : previes.count+1
        }))
      }
  render() {
    return (
        <div>
      <div>count{this.props.count}</div>
        <button onClick={()=>this.incrementfic()}>increment</button>
        </div>  
    )
  }
}

export default Counter