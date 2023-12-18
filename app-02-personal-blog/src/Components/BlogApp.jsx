import MainContentContainer from "./MainContentContainer"
import NavBar from "./NavBar"

function BlogApp(){
    return(
        <div className="BlogApp">
            <NavBar/>
            <MainContentContainer/>
        </div>
    )
}

export default BlogApp