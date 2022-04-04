import React from 'react'

 function ChiledComponnent(props) {
  return (
    <div>
        <button onClick={()=>props.greetparent('chiled')}>Greet parent</button>
    </div>
  )
}

export default ChiledComponnent