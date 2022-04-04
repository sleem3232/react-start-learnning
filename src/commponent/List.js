import React from 'react'

export function List() {
    const name=['sleem','sheene','maghar']
    const namelist=name.map(names => <h1>{name}</h1>)
  return (
    <div>
      
     {namelist}
    </div>
  )
}

export default List