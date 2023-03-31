import React, { useEffect, useState } from 'react';
import BlogsContainer from '../BlogsContainer/BlogsContainer';
import SideCart from '../SideCart/SideCart';

// react Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
        if(titles.includes(blog.title)){
            toast("This item already has been added")
        }
        
    }

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='py-7 border-t mx-3 md:mx-0 md:flex gap-6'>
            <div className='md:w-4/6'>
                <BlogsContainer handleReadTime={handleReadTime} handleBookmark={handleBookmark} blogs={blogs}></BlogsContainer>
            </div>

            <div className='md:w-2/6'>
                <SideCart timeSpent={timeSpent} totalBookmark={totalBookmark} titles={titles}></SideCart>
            </div>  
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;