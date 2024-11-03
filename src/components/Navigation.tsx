import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation:React.FC = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>main</Link>
            <Link to={'/'}>contact</Link>
            <Link to={'/'}>about</Link>
        </nav>

        <div>
            <Outlet context={{message:'hello'}} />
        </div>
    </div>
  )
}

export default Navigation