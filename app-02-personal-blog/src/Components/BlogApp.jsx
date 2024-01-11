import LoginComponent from './LoginComponent'
import RegistrationComponent from "./RegistrationComponent"
import MainContentContainer from './MainContentContainer'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AuthProvider, { useAuth } from "./Security/AuthContext"
import HeaderComponent from "./HeaderComponent"
import LogoutComponent from './LogoutComponent'
import ViewBlogPost from './ViewBlogPost'
import BlogPost from './BlogPost'

function BlogApp() {
    const postDetails = {
        postId: 111,
        autherimsgeUrl: "../logo192.png",
        imageurl: "../img/sample-image.jpg",
        postTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. N",
        postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis facilis error amet tempora placeat id ex inventore officia praesentium repellat? Aut veniam laboriosam aliquam obcaecati, labore consectetur facilis amet unde. Fugiat beatae, quibusdam totam omnis veritatis et repellendus dolores odio praesentium, deserunt deleniti nihil ullam. Voluptatum tenetur iusto autem animi saepe consequuntur libero labore blanditiis nam hic ducimus cupiditate excepturi sint facere quae consectetur debitis, et iste numquam ex sed, doloribus odio voluptates tempore. Repudiandae quaerat mollitia obcaecati debitis iusto consectetur quo esse necessitatibus rerum modi pariatur laborum, doloribus, minus architecto placeat qui odit tenetur nisi adipisci repellat. Rem deserunt ipsam inventore nihil laudantium. Assumenda est ut totam, aperiam similique iste aliquid, quis dicta hic eius labore placeat veritatis sapiente modi odio, maiores optio. Molestias, autem dolores ab doloremque amet iusto rerum officia veniam facilis architecto dicta veritatis officiis voluptas ducimus neque laborum facere natus hic, odio, deserunt repellat temporibus eligendi ipsum soluta? Nobis cupiditate voluptas iure natus? Tempora, quasi. Itaque saepe laudantium velit omnis adipisci possimus eligendi quisquam voluptatum alias magni, veniam nisi. Animi ducimus quae molestias laborum porro? Atque, debitis fugit? Est minima dolorem error maxime consequuntur facilis, mol"
    }


    function AuthenticatedRoute({ children }) {
        const authContext = useAuth()

        if (authContext.isAuthenticated) {
            return children;
        }
        return <Navigate to='/login' />
    }
    return (
        <div className="BlogApp">
            <BrowserRouter>
                <AuthProvider>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/register" element={<RegistrationComponent />} />
                        <Route path="/" element={<MainContentContainer postDetails={postDetails} />} />
                        <Route path="/logout" element={<LogoutComponent />} /> 
                        <Route path="/post" element={<BlogPost />} /> 
                        
                        <Route path="/viewPost/:postId" element={
                            <AuthenticatedRoute>
                                <ViewBlogPost postDetails={postDetails} />
                            </AuthenticatedRoute>
                        } />


                    </Routes>

                </AuthProvider>

            </BrowserRouter>
        </div>
    )
}



export default BlogApp