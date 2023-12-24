import CatogoryContainer from './CatogoryContainer';
import PostContainer from './PostContainer';
import ViewBlogPost from './ViewBlogPost';


function MainContentContainer(props) {
    
    return (
        <div className="conatiner md:mx-[350px]">
            <div className="contentConatiner md:flex justify-between relative">
                <PostContainer {...props}/>
                <CatogoryContainer />
                {/* <ViewBlogPost/> */}
            </div>
        </div>
    )
}
export default MainContentContainer




