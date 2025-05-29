import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import React from 'react';
import { FaDollarSign, FaRegEye } from "react-icons/fa";

export default function MostViews() {
  const { mostviews } = usePage().props;
  
  return (
    <div className='w-[98%] md:w-10/12 lg:w-9/12 xl:w-[1024px] mx-auto'>
      <p className='text-3xl font-bold text-gray-700 mb-3'>Most views</p>
      <div className='w-full grid grid-cols-3 gap-4 '>
        {mostviews.map(car => {
          const formattedNumber = new Intl.NumberFormat('en-US').format(car.price);
          return(
            <div key={car.slug_id} className='bg-white shadow-sm w-full rounded-md flex flex-row overflow-hidden'>
              <div className='bg-gray-400 h-[140px] w-[140px]'>
                <img src={`${car.thumbnail.image_url}?text=${car.car_make+'\\n'+car.car_model}`} />
              </div>
              <div className='flex-1 px-2'>
                <Link href={route('car.details',car.slug_id)} className='font-bold text-lg text-blue-500 leading-4  my-0'>{car.car_make} {car.car_model}</Link>
                <p className='text-sm text-gray-800 flex flex-row gap-0 my-0'>{car.year}</p>
                <p className='text-sm text-gray-800 flex flex-row gap-0 my-0'>
                    <FaRegEye className=" mt-1 pt-0.5 w-[15px]" />&nbsp;&nbsp;{car.views}&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;<FaDollarSign className=" mt-1 pt-0.5 w-[15px]" />{formattedNumber}
                </p>
                <Link className="font-bold text-blue-900" href={route('car.details',car.dealersel.dealer_slug)}>{car.dealersel.dealer_title}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
