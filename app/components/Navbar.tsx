import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FaUserAstronaut } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='flex justify-between border-b border-slate-200 h-20 items-center px-6'>
      <div className='font-bold text-3xl leading-2  '>WhatBytes</div>
      <div className='border-2 border-slate-300 flex  items-center gap-2  p-1 rounded-lg '>
        <FaUserAstronaut className='bg-indigo-600 text-slate-200 w-6 h-6 p-0.5 rounded-full' />
        <p className='font-semibold '>User Name</p>
      </div>
    </nav>
  );
};

export default Navbar;
