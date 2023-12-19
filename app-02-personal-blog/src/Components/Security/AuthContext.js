import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);


export default function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function authenticate(userName, password) {
        if (userName === "admin" && password === "dummy") {
            console.log("Authentication Success");
            setIsAuthenticated(true);
            return true
        } else {
            console.log("invalid Credentials");
            setIsAuthenticated(false);
            return false
        }
    }
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
            {children}
        </AuthContext.Provider>
    )
}

