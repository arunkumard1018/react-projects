import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className='flex items-center justify-center mt-10'>
            <div className=" form-container w-[40%] h-[25rem] shadow-2xl bg-white dark:bg-gray-100 m-5 flex items-center justify-evenly flex-col space-y-4 p-10 rounded-2xl">
                <h1 className="w-[100%] text-center text-[1.8rem]">Sign in Or Create Account</h1>
                {showErrorMessage && <div className="errorMessage">Authentication Failed.
                    Please check your credentials.</div>}
                <div action="" className="w-[60%] flex flex-col ">
                    <label className="text-sm pb-1" >User Name</label>
                    <input type="text" name="userName" value={userName} onChange={handleUserNameChange}
                        className="p-2 border  hover:border-blue-600 focus:outline-none" />
                    <label className="text-sm pb-1" >Password</label>
                    <input type="password" name="password" value={password} onChange={handleUserPasswordChange}
                        className="p-2 border  hover:border-blue-600 focus:outline-none" />
                    <button type="submit" className="p-2 mt-5 bg-blue-600" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
