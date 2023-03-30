import React from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';

const Main = () => {
    return (
        <div className='py-7 border-t flex gap-6'>
            <div className='w-4/6'>
                <Blogs></Blogs>
            </div>

            <div className='w-2/6 border'>
                <SideCart></SideCart>
            </div>
            
            
        </div>
    );
};

export default Main;