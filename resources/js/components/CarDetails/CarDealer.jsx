import { MapPinned } from 'lucide-react'
import React from 'react'

export default function CarDealer({cardetails}) {
  return (
    <>
      <div className='w-full flex flex-col gap-3'>
        <p className='text-3xl text-gray-800 pt-6 font-semibold'>Car </p>
        <div className='bg-white border border-gray-300 w-full rounded-md p-5 py-9 flex flex-col'>
          <div className='flex flex-row gap-2'>
            <div className='w-18 h-18 rounded-full bg-gray-500 overflow-hidden'>
              &nbsp;
            </div>
            <div className='flex flex-col'>
              <p className='text-xl font-bold ps-2 pt-2'>{cardetails.dealersel.name}</p>
              <p className='text-lg font-normal px-2'>{cardetails.dealersel.address}</p>
            </div>
          </div>
          
          <hr className='my-5'/>

          <div className=''>
              <a
                href={`https://www.google.com/maps?q=${cardetails.dealersel.lat},${cardetails.dealersel.lon}`}
                target='_blank'
                className='flex flex-row gap-2 text-sky-700'>
                  <MapPinned />Find {cardetails.dealersel.name} on GoogleMap
              </a>
          </div>
        </div>
      </div>
    </>
  )
}
