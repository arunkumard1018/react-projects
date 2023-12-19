import {  useState } from "react"
import {  useAuth } from "./Security/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginComponent() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setSetShowErrorMessage] = useState(false);
    const authContext = useAuth();
    const navigate = useNavigate();

    function handleUserNameChange(event) {
        setUserName(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function HandleLoginSubmit() {
        
        if(authContext.authenticate(userName,password)){
            navigate(`/`)
        }else{
            console.log("Authentication failure")
            setSetShowErrorMessage(true);
        }
    }
    



    return (
        <div className="LoginComponent">

            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md" >
                    <div className="text-3xl font-bold mb-4 text-center">Login</div>
                    {showErrorMessage && <div className="text-red-600  text-center">Invalid Credintails ! please check</div>}
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={userName} onChange={handleUserNameChange} id="username" type="text" placeholder="Enter your username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={password} onChange={handlePasswordChange} id="password" type="password" placeholder="********" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={HandleLoginSubmit} type="button">
                                Sign In
                            </button> 
                            <a className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-500" href="/">
                                Forgot Password?
                            </a>
                        </div>
                        
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy; 2023 Channel. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent