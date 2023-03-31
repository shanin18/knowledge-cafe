import React from 'react';
import logo from "../../images/Logo.png";
import userImage from "../../images/user.png";

const Header = () => {
    return (
        <div className='mt-7 mb-5 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className='w-16'/>
                <h1 className='font-bold text-3xl md:text-4xl'>Knowledge Cafe</h1>
            </div>

            <div className='flex gap-8'>
                <a href="/home" className='font-semibold text-lg hover:text-[#6047EC]'>Home</a>
                <a href="/blog" className='font-semibold text-lg hover:text-[#6047EC]'>Blog</a>
                <a href="/contact" className='font-semibold text-lg hover:text-[#6047EC]'>Contact</a>
            </div>

            <div className='mt-5 md:mt-0 cursor-pointer'>
                <img src={userImage} alt="user-image" className='w-12 rounded-full bg-gray-300'/>
            </div>
        </div>
    );
};

export default Header;