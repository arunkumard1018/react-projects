import { Link, useNavigate } from "react-router-dom"

const BlogPost = ({postDetails}) => {
    
    const navigate = useNavigate()

    const viewPost = (postId) => {
        navigate(`/viewPost/${postId}`)
    }

    return (
        <div className="BlogPost flex justify-between items-center h-[180px] md:mb-20">
            <div className="content w-8/12 md:w-9/12">
                <div className='flex space-x-3'>
                    <img className='w-6 rounded-full' src="../logo192.png" alt="" />
                    <a className="text-sm" href="/">Author Name</a>
                </div>
                <div className="p-2">
                    <h1 onClick={() => viewPost(postDetails.postId) } className='h-[40px] md:h-[60px] overflow-hidden text-sm md:text-lg font-bold cursor-pointer'>{postDetails.postTitle}</h1>
                    <p className='h-[40px] md:h-[60px] overflow-hidden text-sm   text-gray-500'>{postDetails.postDesc}</p>
                    <p className='md:mt-2 text-sm'>Post Publish Date</p>
                </div>
            </div>
            <div className="image w-4/12 md:w-3/12 object-cover" >
                <img className='md:h-[175px] ' src="../img/sample-image.jpg" alt="" />
            </div>
        </div>
    )
}
function PostContainer(props) {
    return (
        <div className="conatiner  p-2 md:px-5  mt-[100px]">
            <BlogPost  {...props}/>
        </div>
    )
}
export default PostContainer