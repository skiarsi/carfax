import React from 'react'
import { router } from '@inertiajs/react';
import { PaginationDetails } from './Pagination'

export default function SortingBar({searchresult}) {
  const changesorch = (e) =>{
    const newSort = e.target.value;
    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('sort', newSort);

    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true,
    });
  }
  return (
    <div className='flex flex-row py-2'>
      <div className='ms-0 me-auto'>
        <PaginationDetails searchresult={searchresult} size={`text-xl`}/>
      </div>
      <div className='ms-auto me-0'>
        <select
          onChange={changesorch}
          defaultValue="Pick a browser"
          className="select select-sm border border-gray-400 pe-10">
            <option value="price-desc" className='text-lg'>Price - Hight to Low</option>
            <option value="price-asc" className='text-lg'>Price - Low to Hight</option>

            <option value="mileage-desc" className='text-lg'>Mileage - Hight to Low</option>
            <option value="mileage-asc" className='text-lg'>Mileage - Low to Hight</option>

            <option value="year-desc" className='text-lg'>Year - New To Old</option>
            <option value="year-asc" className='text-lg'>Year - Old to New</option>
            
            <option value="date-asc" className='text-lg'>Date - Newes to Oldes</option>
            <option value="date-desc" className='text-lg'>Date - Oldest to Newest</option>
        </select>
      </div>
    </div>
  )
}
