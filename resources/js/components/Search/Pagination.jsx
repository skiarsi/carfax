import React from 'react'
import { Link } from '@inertiajs/react';

export const Pagination = ({searchresult}) => {
  
  const { current_page, last_page, per_page } = searchresult.meta;
  // همه پارامترهای query فعلی رو نگه‌می‌داریم
  const queryString = typeof window !== 'undefined' ? window.location.search : '';

  // تابعی برای ساختن URL با صفحه خاص
  const buildLink = (page) => {
    const params = new URLSearchParams(queryString);
    params.set('page', page); // فقط page رو آپدیت کن
    return `?${params.toString()}`;
  };

  const totalToShow = 5;

  const getPageNumbers = () => {
    let start = Math.max(current_page - 2, 1);
    let end = Math.min(current_page + 2, last_page);

    if (end - start + 1 < totalToShow) {
      if (start === 1) {
        end = Math.min(start + totalToShow - 1, last_page);
      } else if (end === last_page) {
        start = Math.max(end - totalToShow + 1, 1);
      }
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const hasFirst = pageNumbers[0] > 1;
  const hasLast = pageNumbers[pageNumbers.length - 1] < last_page;

  return (
    <>
      <div className='bg-white border border-gray-300 rounded-md w-full px-3 py-3 flex flex-row gap-1'>
        <div className='py-2'>
          <PaginationDetails searchresult={searchresult} size={`text-sm`}  />
        </div>


        {/* Previous */}
        {current_page > 1 && (
          <Link
            href={buildLink(current_page - 1)}
            className="px-3 py-1 border rounded"
          >
            Prev
          </Link>
        )}

        {/* first page & ... */}
        {hasFirst && (
          <>
            <Link href={buildLink(1)} className="px-3 py-1 border rounded">1</Link>
            <span className="px-2">...</span>
          </>
        )}

        {/* middle links */}
        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={buildLink(page)}
            className={`px-3 py-1 border rounded ${
              page === current_page ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {page}
          </Link>
        ))}

        {/* ... & last page */}
        {hasLast && (
          <>
            <span className="px-2">...</span>
            <Link href={buildLink(last_page)} className="px-3 py-1 border rounded">
              {last_page}
            </Link>
          </>
        )}

        {/* Next */}
        {current_page < last_page && (
          <Link
            href={buildLink(current_page+1)}
            className="px-3 py-1 border rounded"
          >
            Next
          </Link>
        )}
      </div>
    </>
  )
}


export const PaginationDetails = ({searchresult, size})=>{
  const { from, to, total } = searchresult.meta;
  return (
    <div className='px-1'>
      {total!= 0 ? 
        <p className={`${size} text-gray-800`}>
          <span className='font-semibold'>{from}</span> - 
          <span className='font-semibold'>{to}</span> of&nbsp;
          <span className='font-semibold'>{total}</span> resualts
        </p> : ''}
    </div>
  )
}


// export default {Pagination,PaginationDetails};