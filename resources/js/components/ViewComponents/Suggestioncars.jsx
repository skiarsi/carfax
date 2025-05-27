import React from 'react'
import { Link, usePage } from '@inertiajs/react';

export default function Suggestioncars() {
  const { suggestions } = usePage().props;
  
  return (
    <div className='w-full flex flex-col gap-3'>
      <p className='text-3xl text-gray-800 pt-6 font-semibold'>Saggestions</p>
      <div className='bg-white border border-gray-300 w-full rounded-md p-5 grid grid-cols-4 gap-1'>
        {suggestions.map(car=>{
          return (
            <Link key={car.id} href={`./${car.slug_id}`}>
              <div  className='border border-gray-300 p-3 rounded-md'>
                <div className='w-full h-auto overflow-hidden rounded-sm'>
                  <img src={car.thumbnail_url} className='w-full h-auto' />
                </div>
                <p className='text-sm font-semibold h-15 py-1'>{car.year} {car.carmake.name} {car.carmodel.name}</p>
                <p className='font-semibold text-xl p-0'>${car.price}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
