import React, { Component } from 'react'

 export class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Islogged:false
       }
     }
  render() {
      if(this.state.Islogged===false){
          return(
              <div>
                  Wellcom salim
              </div>
          )
      }else{
          return(
              <div>
                  Wellcom gust
              </div>
              )
      }
    return (
        <div>
        <div>Wellcom app</div>
      <div>Wellcom salim</div>
      </div>
    )
  }
}

export default UserGreeting