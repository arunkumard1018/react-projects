import { Link } from "react-router-dom";

function LogoutComponent() {
    return (
        <div className="LogoutComponent text-center mt-40">
            <h1 className="text-2xl my-4">You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
            <p className="mt-2">Click here to <Link to="/login" className="text-blue-600 hover:underline" id="signin-btn">Sign in</Link> agin</p>
        </div>
    )
}
export default LogoutComponent;