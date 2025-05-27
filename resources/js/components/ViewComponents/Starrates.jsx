import { Star } from 'lucide-react';
import React from 'react'

export default function Starrates({rating=3, counts=20}) {

  const fullStars = Math.round(rating);
  
  return (
    <div >
      
      <div className='flex flex-row w-[300px] select-none text-2xl py-0 align-middle justify-start items-center'>
        {
          [...Array(5)].map((_,i) => (
            <span key={i} className={`${i < fullStars ? 'text-amber-600' : 'text-gray-600'}`}>{i < fullStars ? '★' : '☆'}</span>
          ))
        }
        <span className='text-sm ps-4 cursor-pointer'>{counts} reviews</span>
      </div>
    </div>
  )
}
