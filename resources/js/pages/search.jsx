import React from 'react'
import Header from '@/components/Header';
import { Head, Link, usePage } from '@inertiajs/react';
import Resualt from '../components/Search/Resualt';
import {Pagination} from '../components/Search/Pagination';
import Sidefilter from '../components/Search/Sidefilter';
import SortingBar from '../components/Search/SortingBar';

export default function search() {
  
  const { searchresult } = usePage().props;
  const resualt = searchresult.data;
  
  
  return (
    <>
      <Head title={`Search`}></Head>
      <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
          <div className="h-[40px] bg-blue-500">
              <Header />
          </div>
          <div className='w-full bg-gray-100  min-h-screen'>
            <div className="flex-1 flex flex-row pb-5 w-11/12 md:w-11/12 lg:w-10/12 xl:w-[1250px] mx-auto pt-3">
              <div className='hidden lg:block lg:w-[300px] pe-2'>
                <div className='rounded-md bg-white px-2 py-3 shadow-md'>
                  <Sidefilter />
                </div>
              </div>
              <div className='flex-1 ps-3'>
                {searchresult.total !== 0 ? (
                  <>
                    <SortingBar searchresult={searchresult} />
                    <Resualt searchresult={searchresult} />
                    <Pagination searchresult={searchresult} />
                  </>
                ) : (
                  <div className="text-center text-gray-500 py-10 bg-white rounded-lg shadow-md">
                    هیچ نتیجه‌ای یافت نشد.
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
