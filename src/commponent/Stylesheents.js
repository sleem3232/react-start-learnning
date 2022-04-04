import React from 'react'
import './Stylec.css'

export function Stylesheents(props) {
    let className=props.primary ?'primary':''
  return (
    <div>
        <h1 className={`${className} font-xl`}>Stylesheents </h1>
    </div>
  )
}

export default Stylesheents