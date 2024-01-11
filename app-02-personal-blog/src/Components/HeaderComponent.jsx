import { Link } from "react-router-dom";
import { useAuth } from "./Security/AuthContext";

function HeaderComponent() {

    function showMenu() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    }
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    const logout = () => authContext.logout();

    return (
        <div className="NavBar bg-white  fixed top-0 z-10 w-[100%]">
            <nav className="bg-white border-b border-black py-5">
                <div className="flex justify-between items-center md:mx-[350px]">
                    <a href="/" className="text-white text-lg font-bold"><img src="../channel-logo-removebg.png" alt=" " /></a>

                    <div className="hidden md:flex space-x-4 text-black justify-center items-center">
                        <a href="/" className="text-black hover:underline">Our Story</a>
                        <a href="/" className="text-black hover:underline">MemberShip</a>
                        {isAuthenticated && <a href="/post" className="text-black hover:underline">write</a>}

                        {!isAuthenticated && <Link to="/login" className="text-black hover:underline" id="signin-btn">Sign in</Link>}
                        {!isAuthenticated && <Link to="/register"><button
                            className="bg-green-500 px-5 py-2 rounded-full hover:bg-green-600 text-white">Register</button></Link>}
                        {isAuthenticated &&
                            <Link to="/logout" onClick={logout}>
                                <button className="px-5 py-2  hover:bg-slate-200 hover underline rounded-lg text-black flex items-center">
                                    <span>Logout</span>
                                    <img src="../icons/logout-svgrepo-com.png" className="mx-1 w-6 mb-1" alt=" " />
                                </button>
                            </Link>}
                    </div>

                    <div className="md:hidden">
                        <button onClick={showMenu} id="mobile-menu-btn" className="text-white focus:outline-none">
                            <img src="../bars-solid.svg" className="mx-3 w-6" alt=" " />
                        </button>
                    </div>

                    
                </div>
            </nav>

            <div id="mobile-menu" className="md:hidden bg-white p-4 hidden space-y-2 ">
                <a href="/" className="text-black hover:underline block mx-3">Our Story</a>
                <a href="/" className="text-black hover:underline block mx-3">MemberShip</a>
                {isAuthenticated && <a href="/" className="text-black hover:underline block mx-3">write</a>}
                {isAuthenticated && <a href="/" className="text-black hover:underline block mx-3">Saved</a>}
                {!isAuthenticated && <Link to="/login" className="text-black hover:underline block mx-3 ">Sign in</Link>}
                {!isAuthenticated && <Link to="/register" className="block">
                    <button className="bg-green-500 px-5 py-2 rounded-full hover:bg-green-600 text-black">Register</button>
                </Link>}
                {isAuthenticated &&
                    <Link to="/logout" onClick={logout}>
                        <button className="pl-3 py-2   hover:bg-slate-200 hover:underline rounded-lg text-black flex items-center">
                            <span>Logout</span>
                            <img src="../icons/logout-svgrepo-com.png" className="mx-1 w-5 " alt=" " />
                        </button>
                    </Link>}
            </div>
        </div>
    )
}

export default HeaderComponent