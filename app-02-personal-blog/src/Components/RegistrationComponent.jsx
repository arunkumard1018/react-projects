import { useState } from "react"

function RegistrationComponent() {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,SetEmail] = useState('')
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <div className="text-3xl font-bold mb-4 text-center">Create An Account </div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email} onChange={(e) => SetEmail(e.target.value)} id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="********" />
                    </div>
                    <div className="mb-6">
                        <button
                            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign Up
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">
                        Already have an account? <a href="/" className="text-white underline">Register</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default RegistrationComponent