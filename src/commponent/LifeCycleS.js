import React, { Component } from 'react'

 export class LifeCycleS extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'sleem'
       }
       console.log('LifeCycleS constructor')
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log('lifecgetDeerivedStateformPropsyclea')
         return null;
     }
     componentDidMount(){
         console.log( 'componentDidMount' )  }
  render() {
      console.log('LifeCycleS')
    return (
      <div>LifeCycleS</div>
    )
  }
}

export default LifeCycleS