import React, { Component } from 'react'
import ChiledComponnent from './ChiledComponnent'

  class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parentname:'parent'
       }
       this.greetparent=this.greetparent.bind(this)
     }
     greetparent(chiledname){
         alert(`hello ${this.state.parentname} from ${chiledname}`)
     }
  render() {
    return (
      <div>
          <ChiledComponnent greetparent={this.greetparent} ></ChiledComponnent>
      </div>
    )
  }
}

export default ParentComponent