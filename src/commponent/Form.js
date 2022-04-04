import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username:'',
          Comment :'',
          topic:'react'
       }
     }
     handelinputchane=(event)=>{
         this.setState({
             username :event.target.value
         })
         
     }
     handelcomment=(event) =>{
         this.setState({
             Comment :event.target.value
         })

     }
     tobicichandel=(event) =>{
        this.setState({
            topic :event.target.value
        })

    }
    handelSumbit=(event) =>{
           alert(`${this.state.username} ${this.state.Comment} ${this.state.topic}`)
           event.preventDefault() 
        

    }

  render() {
    return (
        <form onSubmit={this.handelSumbit}>
      <div>
          <label>username</label>
          <input type='text' value={this.state.username} onChange={this.handelinputchane}></input>
      </div>
      <div>
          <label>comments</label>
          <textarea value={this.state.Comment} onChange={this.handelcomment}></textarea>
      </div>
      <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.tobicichandel}>
              <option value={"react"} >react</option>
              <option value={"angular"} >angular</option>
              <option value={"C#"} >c#</option>
              <option value={"java "} >java</option>
          </select>
      </div>
      <button type='sumbit'>Sumbit</button>
      </form>
    )
  }
}

export default Form