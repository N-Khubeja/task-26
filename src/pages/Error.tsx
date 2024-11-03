import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error:React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },2000)
    })

  return (
    <div>Error</div>
  )
}

export default Error