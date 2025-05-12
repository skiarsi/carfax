import React from 'react'
import Header from '@/components/Header';
import { Head, Link, usePage } from '@inertiajs/react';
import Resualt from '../components/Search/Resualt';
import Pagination from '../components/Search/Pagination';

export default function search() {
  
  const { searchresult } = usePage().props;
  const resualt = searchresult.data;
  
  return (
    <>
      <Head title={`Search for ${searchresult.brand}`}></Head>
      <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
          <div className="h-[40px] bg-blue-500">
              <Header />
          </div>
          <div className='w-full bg-gray-100  min-h-screen'>
            <div className="flex-1 flex flex-row pb-5 w-full md:w-11/12 lg:w-10/12 xl:w-[1250px] mx-auto pt-3">
              <div className='hidden md:block md:w-[300px] pe-2'>
                <div className='rounded-md bg-white'>
                  &nbsp;
                </div>
              </div>
              <div className='flex-1 px-3'>
                <Resualt searchresult={searchresult} />
                <Pagination searchresult={searchresult} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
