import { MapPinned, MessageCircle, Phone, Star } from 'lucide-react'
import React from 'react'
import Starrates from '../ViewComponents/Starrates'

export default function CarDealer({cardetails, onClickText}) {
  return (
    <>
      <div className='w-full flex flex-col gap-3'>
        <p className='text-3xl text-gray-800 pt-6 font-semibold'>Dealer Details</p>
        <div className='bg-white border border-gray-300 w-full rounded-md p-5 py-9 flex flex-col'>
          <div className='flex flex-row gap-2'>
            <div className='w-24 h-24 rounded-full bg-gray-500 overflow-hidden'>
              &nbsp;
            </div>
            <div className='flex flex-col py-0'>
              <p className='text-lg font-bold ps-2'>{cardetails.dealersel.name}</p>
              <p className='text-md font-normal px-2'>{cardetails.dealersel.details.address}</p>
              <Starrates rating={cardetails.dealersel.details.rating} counts={cardetails.dealersel.details.count} />
            </div>
          </div>
          
          <hr className='my-5'/>

          <div className=''>
            <a
              href={`https://www.google.com/maps?q=${cardetails.dealersel.details.lat},${cardetails.dealersel.details.lon}`}
              target='_blank'
              className='flex flex-row gap-2 text-sky-700'>
                <MapPinned />Find {cardetails.dealersel.name} on GoogleMap
            </a>
          </div>

          <p className='flex flex-row py-8 gap-2 text-xl'>
            <Phone />
            <span>
              {cardetails.dealersel.details.phone}
            </span>
          </p>

          <span className='flex flex-row gap-1 cursor-pointer text-sky-700' onClick={onClickText}>
            <MessageCircle />
            Send {cardetails.dealersel.name} a message
          </span>
        </div>
      </div>
    </>
  )
}
