'use client';
import { HTMLIcon } from '@/icons/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div className=' mx-4 md:mx-10 w-full h-full px-4'>
      <p className='py-6'>Skill Test</p>
      <div className='flex flex-col gap-4 h-full w-full'>
        <div className='w-[53%] h-28 px-4 border border-slate-200 shadow rounded-lg flex flex-row items-center gap-4 '>
          <HTMLIcon className='w-16 h-fit ' />
          <div className='flex flex-col justify-center'>
            <div className='text-lg text-black font-bold'>
              Hyper Text Markup Language
            </div>
            <div className='text-gray-700 font-medium tracking-tight'>
              Questions: 08 | Duration: 15mins | Submitted on 5 June 2021
            </div>
          </div>
          <div className='py-2 px-4 rounded-lg cursor-pointer border-2 border-gray-600 hover:bg-blue-800 bg-blue-900 text-white'>
            Update
          </div>
        </div>
        <div className='w-[53%]  h-28 px-4 border border-slate-200 shadow rounded-lg flex flex-col p-2'>
          <p className=' text-lg text-black font-bold'>Quick Statisticks</p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
