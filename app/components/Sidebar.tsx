'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFileBarGraph } from 'react-icons/bs';
import { FiAward } from 'react-icons/fi';
import { IoDocument } from 'react-icons/io5';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <div className='flex flex-col font-sans gap-4 pt-16 w-72 h-full border-e border-slate-200'>
      <div
        onClick={() => handleNavigation('dashboard')}
        className='flex gap-4 items-center py-4 px-4 mr-4 cursor-pointer font-semibold text-gray-600 hover:bg-slate-100 hover:text-blue-700 rounded-e-full'
      >
        <BsFileBarGraph className='w-5 h-5' />{' '}
        <p className='text-lg'>Dashboard</p>
      </div>

      <div
        onClick={() => handleNavigation('skill-test')}
        className='flex gap-4 items-center py-4 px-4 mr-4 cursor-pointer font-semibold text-gray-600 hover:bg-slate-100 hover:text-blue-700 rounded-e-full'
      >
        <FiAward className='w-5 h-5' />
        <p className='text-lg'>Skill Test</p>
      </div>

      <div
        onClick={() => handleNavigation('internship')}
        className='flex gap-4 items-center py-4 px-4 mr-4 cursor-pointer font-semibold text-gray-600 hover:bg-slate-100 hover:text-blue-700 rounded-e-full'
      >
        <IoDocument className='w-5 h-5' />
        <p className='text-lg'>Internship</p>
      </div>
    </div>
  );
};

export default Sidebar;
