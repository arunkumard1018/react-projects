// import './TodoApp.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthProvider, { useAuth } from './security/AuthContext'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()

    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/login" />
}

export default function TodoApp() {
    return (
        <div className='TodoApp '>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='welcome/:userName' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent /></AuthenticatedRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}


