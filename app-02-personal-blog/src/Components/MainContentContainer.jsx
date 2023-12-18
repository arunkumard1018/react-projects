import CatogoryContainer from './CatogoryContainer';
import PostContainer from './PostContainer';


function MainContentContainer() {
    return (
        <div className="conatiner md:mx-[350px] ">
            <div className="contentConatiner md:flex justify-between relative">
                <PostContainer />
                <CatogoryContainer />
            </div>
        </div>
    )
}
export default MainContentContainer




