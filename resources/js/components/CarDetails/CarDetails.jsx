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

      <Link href={`/dealer/${cardetails.dealersel.slug}`} className='my-6 text-xl text-blue-700 inline-block'>
        <div className='flex flex-row gap-2'>
          <div className='rounded-full bg-gray-200 w-12 h-12 border border-gray-300'>
            &nbsp;
          </div>
          <span className='py-2'>
            {cardetails.dealersel.name}
          </span>
        </div>
      </Link>
      <p className='pb-7 text-xl font-bold text-gray-700 flex flex-row'>
        <MapPin className="text-dark me-2" />
        {cardetails.dealersel.details.address}
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
