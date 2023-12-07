import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [userName, setUserName] = useState('in28minuts')
    const [password, setPassword] = useState('')

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const authContext = useAuth()

    const navigator = useNavigate()

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }
    function handleUserPasswordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if (authContext.login(userName, password)) {
            console.log("Authenticated Successfully")
            navigator(`/welcome/${userName}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className='Login'>
            <h1>Time to Login!</h1>
            {showErrorMessage && <div className="errorMessage">Authentication Failed.
                Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" value={userName} onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleUserPasswordChange} />
                </div>
                <div><button className='btn' onClick={handleSubmit}>Login</button></div>
            </div>
        </div>
    )
}

export default LoginComponent
