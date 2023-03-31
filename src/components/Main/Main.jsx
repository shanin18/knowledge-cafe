import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [timeSpent, setTimeSpent] = useState(0);
    const [totalBookmark, setTotalBookmark] = useState([]);
    const [titles, setTitles] = useState([])

    // handle readTime
    const handleReadTime = (readTime) =>{
        setTimeSpent(timeSpent + readTime)  
    }

    // handle bookmark
    const handleBookmark =(id) =>{
        setTotalBookmark([...totalBookmark, id]);

        const blog = blogs.find(blog => blog.id === id);
        setTitles([...titles, blog.title])
    }

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='py-7 border-t flex gap-6'>
            <div className='w-4/6'>
                <Blogs handleReadTime={handleReadTime} handleBookmark={handleBookmark} blogs={blogs}></Blogs>
            </div>

            <div className='w-2/6'>
                <SideCart timeSpent={timeSpent} totalBookmark={totalBookmark} titles={titles}></SideCart>
            </div>  
        </div>
    );
};

export default Main;