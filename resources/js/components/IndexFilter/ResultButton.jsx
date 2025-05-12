import React, { useState } from 'react'
import { Link } from '@inertiajs/react';
export default function ResultButton({count, loading, filters, setFilters, link}) {
  const moreFilters = () =>{
    setFilters(true);
  }

  return (
    <>
      <div className='w-2/6'>
        <Link
          href={link}
          className='bg-blue-500 text-white text-lg py-2 px-10 font-semibold rounded-md me-5'>
            Result 
        </Link>

        <span className='me-2'>{count > 0 ? count+' '+' Vehicles' : 'No found vehicles'}</span>
        {loading && <span className='text-sm'>loading...</span>}

      </div>
      <div className='w-4/6 relative text-end'>
        <button onClick={moreFilters} className={`text-blue-500 cursor-pointer py-2 font-bold px-5 ${filters && 'hidden'}`}>More Filters</button>
      </div>
    </>
  )
}
