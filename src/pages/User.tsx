import React from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'

const User:React.FC = () => {
  
  const obj:{message:string} = useOutletContext()
  const location = useLocation()
  const state = location.state

  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{obj.message}</h1>
    </div>
    
  )
}

export default User