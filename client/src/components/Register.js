import React, { useState} from 'react'
import { useCreateUser } from '../hooks'
import { Link } from 'react-router-dom'

export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { create } = useCreateUser()

    function handleSubmit(e) {
        e.preventDefault()

        create(username, password).then(() => {
            props.history.push('/')
        })
    }


    return (
        <div className='formcontainer'>
            <div className='register'>
                <Link to='/login' >Already have an account? Login Here!</Link>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor='username' >Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        name='password'
                        id='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>
                    <button type='submit' >Register</button>
                </form>
            </div>
        </div>
    )
}