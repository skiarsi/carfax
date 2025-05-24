import React from 'react'
import { MapPin } from 'lucide-react';
import { Link } from '@inertiajs/react';
export default function CarDetails({cardetails}) {
  
  return (
    <div className='bg-white border border-gray-300 w-full rounded-md px-5 py-5'>
      <h1 className='text-3xl font-semibold'>
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


      <div className="collapse border border-gray-300 bg-gray-100 mb-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Description</div>
        <div className="collapse-content text-sm">{cardetails.details.description}</div>
      </div>

      <div className="collapse border border-gray-300 bg-gray-100">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">title details</div>
        <div className="collapse-content text-sm">{cardetails.details.title}</div>
      </div>
    </div>
  )
}
