
const BlogPost = () => {
    const postTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. N";
    const postDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatem animi, quos nemo porro nisi veniam corrupti nobis dolor impedit!"

    return (
        <div className="BlogPost flex justify-between items-center h-[175px] md:mb-10 border-b border-black">
            <div className="content w-8/12 md:w-9/12">
                <div className='flex space-x-3'>
                    <img className='w-6 rounded-full' src="../logo192.png" alt="" />
                    <a className="text-sm" href="/">Author Name</a>
                </div>
                <h1 className='h-[40px] md:h-[60px] overflow-hidden text-sm md:text-lg font-bold'>{postTitle}</h1>
                <p className='h-[40px] md:h-[60px] overflow-hidden text-sm   text-gray-500'>{postDesc}</p>
                <p className='md:mt-2 text-sm'>Post Publish Date</p>
            </div>
            <div className="image w-4/12 md:w-3/12 object-cover" ><img className='md:h-[175px] ' src="../img/sample-image.jpg" alt="" /></div>
        </div>
    )
}
function PostContainer() {
    return (
        <div className="conatiner md:w-4/6 p-2 md:px-5  mt-[100px]">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />


        </div>
    )
}
export default PostContainer