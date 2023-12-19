import NavBar from "./NavBar"
import LoginComponent from './LoginComponent'
import RegistrationComponent from "./RegistrationComponent"
import MainContentContainer from './MainContentContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./Security/AuthContext"

function BlogApp() {
    return (
        <div className="BlogApp">
            <BrowserRouter>
                <AuthProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/register" element={<RegistrationComponent />} />
                        <Route path="/" element={<MainContentContainer />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default BlogApp