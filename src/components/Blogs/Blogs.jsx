import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='flex flex-col gap-10'>
            {
                blogs.map(blog =><SingleBlog key={blog.id} blog={blog} handleReadTime={handleReadTime}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;