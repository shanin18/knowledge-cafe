import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';

const Main = () => {
    const [timeSpent, setTimeSpent] = useState(0)
    const handleReadTime = (readTime) =>{
        setTimeSpent(timeSpent + readTime)  
    }
    
    console.log(timeSpent)


    return (
        <div className='py-7 border-t flex gap-6'>
            <div className='w-4/6'>
                <Blogs handleReadTime={handleReadTime}></Blogs>
            </div>

            <div className='w-2/6'>
                <SideCart timeSpent={timeSpent}></SideCart>
            </div>  
        </div>
    );
};

export default Main;