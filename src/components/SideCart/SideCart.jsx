import React from 'react';

const SideCart = () => {
    return (
        <div>
            <div className='py-6 border border-[#6047EC] rounded-xl text-center bg-[#6047ec1a]'>
                <h2 className='text-[#6047EC] text-2xl font-bold'>Spent time on read : 177 min</h2>
            </div>

            <div className='p-7 bg-[#1111110d] rounded-xl mt-6'>
                <h3 className='text-2xl font-bold'>Bookmarked Blogs : 8</h3>
            </div>
        </div>
    );
};

export default SideCart;