import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { UserInt } from '../interface/User.interface'

const Users:React.FC = () => {
  const users = useLoaderData() as UserInt[]

  return (
    <div>
      {users.map(({id,name}) => (
        <div key={id}>
          <Link state={{name}} to={`/users/${id}`}>
          <h1>{name}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Users

export const loader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}