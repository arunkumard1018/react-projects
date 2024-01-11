
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function BlogPost() {
    return (
        <div className='mt-[8rem] md:mx-[250px]'>
            <BlogEditor />
        </div>
    )
}


const BlogEditor = () => {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
    };

    return (
        <div>
            <h2>Create a New Blog</h2>
            <div>
                <label htmlFor="editor" className="block text-sm font-medium text-gray-600">
                    Blog Content:
                </label>
                <ReactQuill
                    id="editor"
                    value={content}
                    onChange={handleChange}
                    placeholder="Write your blog content here..."
                />
            </div>

            <button
                onClick={() => console.log('Blog content:', content)}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Submit
            </button>
        </div>
    );
};






export default BlogPost