'use client';
import React, { useEffect } from 'react';
import Home from './Home/page';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/skill-test');
  }, []);
  return <Home />;
};

export default page;
