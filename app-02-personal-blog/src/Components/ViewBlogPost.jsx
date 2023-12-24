function ViewBlogPost({postDetails}) {
    return (
        <div className="ViewBlogPost">
            <div className="container mx-auto mt-20 px-32">
                <article className="bg-white p-8 rounded-lg">

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{postDetails.postTitle}</h2>
                        <div className="flex items-center">
                            <img src={postDetails.autherimsgeUrl} alt="Author" className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <p className="text-gray-600">By Author Name</p>
                                    <p className="text-gray-500">Published on January 1, 2023</p>
                                </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <img src={postDetails.imageurl} alt="Blog Image" className="mb-4 rounded-lg w-[192px] h-[192px]" />
                            <p className="text-gray-800 text-justify">
                                {postDetails.postDesc}
                            </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">More Posts by Author Name</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="text-lg font-semibold mb-2">Post 1</h4>
                                <p className="text-gray-600">Published on January 2, 2023</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="text-lg font-semibold mb-2">Post 2</h4>
                                <p className="text-gray-600">Published on January 3, 2023 lorem100</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="text-lg font-semibold mb-2">Post 2</h4>
                                <p className="text-gray-600">Published on January 3, 2023 lorem100</p>
                            </div>

                        </div>
                    </div>

                </article>
            </div>

        </div>
    )

}
export default ViewBlogPost