import React, { useState} from 'react'
import { useCreateUser } from '../hooks'

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
                <div className="title">Register</div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label className="UserPass" htmlFor='username' >Username</label>
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
                    <label className="UserPass" htmlFor='password'>Password</label>
                    <input 
                        name='password'
                        id='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>
                    <button className="LogReg" type='submit' >Register</button>
                </form>
            </div>
        </div>
    )
}