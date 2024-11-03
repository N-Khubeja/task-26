import React from 'react'
import { Form } from 'react-router-dom'

const Formpage:React.FC = () => {
    

  return (
    <Form method='POST' action='/form'>
        <div>
            <label htmlFor="k">email</label>
            <input type="text" name='email' id='k'/>
        </div>

        <div>
            <label htmlFor="kk">password</label>
            <input type="password" name='password' id='kk'/>
        </div>

        <button type='submit'>submit</button>
    </Form>
  )
}

export default Formpage

export const action = async ({request}:any) => {
    const data = await request.formData()

    const input = {
        email:data.get('email'),
        password:data.get('password')
    }

    console.log(input)
}