import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function HeaderComponent() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    
    const logout = ()=> {
        authContext.logout()
    }
    

    return (
        <header className="">
            <nav className=" bg-slate-200 shadow-xl mb-6">
                <div className="mx-52 nav-bar h-16  flex items-center justify-between">
                    <div className="nav-item flex">
                        <h1 className="text-2xl font-bold">in28minuts</h1>
                    </div>

                    <div className="nav-item flex space-x-5">
                        {isAuthenticated &&<>
                        <div className="py-1 px-3 rounded-lg text-black  hover:bg-slate-300"><Link to="/welcome/in28minuts">Home</Link></div>
                        <div className="py-1 px-3 rounded-lg text-black  hover:bg-slate-300"><Link to="/todos">Todos</Link></div>
                        <div className="py-1 px-3 rounded-lg text-black  hover:bg-slate-300"><Link to="/todos">Add todo</Link></div>
                        </>}
                    </div>
                    <div className="nav-item flex space-x-10 text-white font-bold">
                        {!isAuthenticated && <div className="py-1 px-3 rounded-lg text-black uppercase hover:bg-slate-300"><Link to="/login">Login</Link></div> }
                        {!isAuthenticated &&<div className="bg-zinc-800 py-1 px-3 rounded-md shadow-md active:opacity-[0.85] uppercase"><Link to="/">Register</Link></div> }
                        {isAuthenticated &&<div className="bg-zinc-800 py-1 px-3 rounded-md shadow-md active:opacity-[0.85] uppercase"><button onClick={logout}>Logout</button></div> }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent