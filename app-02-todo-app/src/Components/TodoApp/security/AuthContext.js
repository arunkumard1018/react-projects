import { createContext, useContext, useState } from "react"

// 1: Create a Context
export const AuthContext = createContext("")
export const useAuth = () => useContext(AuthContext)

//2: Share the Created Context with Other Components
export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)


    //3: Put some state in the context or share methods to use
    function login(username, password) {
        if (username === 'in28minuts' && password === 'dummy') {
            setAuthenticated(true)
            return true
        }else{
            setAuthenticated(false)
            return false
        }
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login} }>
            {children}
        </AuthContext.Provider>
    )

}
