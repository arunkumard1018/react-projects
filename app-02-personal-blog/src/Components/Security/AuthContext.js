import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/BlogPostService";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);


export default function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null)

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

    async function login(username, password) {
        try {
            const response = await executeJwtAuthenticationService(username, password)
            if (response.status === 200) {

                const jwtToken = 'Bearer ' + response.data.token

                console.log("Authentication Success");
                setIsAuthenticated(true);
                setToken(jwtToken)
                console.log("JWT Token is :",jwtToken);

                return true
            }else{
                console.log("Authentication Failure");
                logout()
                return false
            }
        }
        catch (error) {
            logout();
            console.log("Authentication Failure at response stage");
            setToken(null)
            return false
        }
    }



    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate, logout ,login}}>
            {children}
        </AuthContext.Provider>
    )
}

