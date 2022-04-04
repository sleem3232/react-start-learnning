import React, { Component } from 'react'
import LifeCycleS from './LifeCycleS'

 export class LifeCycle extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'sleem'
       }
       console.log('life constructor')
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log('lifecgetDeerivedStateformPropsyclea')
         return null;
     }
     componentDidMount(){
         console.log( 'componentDidMount' )  }
  render() {
      console.log('lifecyclaa')
    return (<div>
        <LifeCycleS> </LifeCycleS>
      <div>LifeCycle</div>
      </div>
    )
  }
}

export default LifeCycle