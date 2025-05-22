import React from 'react'
import { MapPin } from 'lucide-react';
import { Link } from '@inertiajs/react';
export default function CarDetails({cardetails}) {
  
  return (
    <div className='bg-white border border-gray-300 w-full rounded-md p-5'>
      <h1 className='text-3xl font-semibold pt-4'>
        {cardetails.year} {cardetails.carmake.name} {cardetails.carmodel.name}
      </h1>
      <p>{cardetails.mileage}</p>

      <Link href="/" className='mt-7 text-xl text-blue-700 inline-block'>
        {cardetails.dealersel.dealersel}
      </Link>
      <p className='pb-7 pt-2 text-xl font-bold text-gray-700 flex flex-row'>
        <MapPin className="text-dark me-2" />
        {cardetails.dealersel.address}
      </p>
    </div>
  )
}
