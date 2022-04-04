import React, { Component } from 'react'
import RegCom from './RegCom'

 class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sleem'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sheene'
            })
        },2000)
    }
  render() {
    return (
      <div>ParentCom
          <RegCom name={this.state.name}></RegCom>
          <ParentCom name={this.state.name} ></ParentCom>
      </div>
    )
  }
}

export default ParentCom