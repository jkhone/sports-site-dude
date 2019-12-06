import React, { useState } from "react"
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import '../styles/login.css'

export default function Login(props){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const { signin } = useAuth()


function handleSubmit(e){
    e.preventDefault()
    signin(username, password).then(resp =>{
        props.history.push('/')
    })
}
    return(
        <div className='formcontainer'>
            <div className='login'>
                <Link to='/register' >Don't have an account? Register Here!</Link>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username' >Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        required
                        onChange={e => setUsername(e.target.value)}/> 
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        required
                        onChange={e => setPassword(e.target.value)}/> 
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}