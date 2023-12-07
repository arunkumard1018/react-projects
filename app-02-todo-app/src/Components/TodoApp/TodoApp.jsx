import './TodoApp.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './security/AuthContext'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='welcome/:userName' element={<WelcomeComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/todos' element={<ListTodosComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}


