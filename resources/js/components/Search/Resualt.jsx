import { Link } from '@inertiajs/react';
import React from 'react'

export default function Resualt({searchresult}) {
  const resualt = searchresult.data;
  console.log(resualt);
  
  return (
    <>
      <div className='grid grid-cols-1 gap-3 pb-4 mx-auto'>
        {resualt && resualt.map(car=>{
          return (
            <div key={car.id} className='bg-white rounded-md overflow-hidden shadow-md border border-gray-300 flex flex-col md:flex-row'>
              <Link href={route('car.details',car.slug_id)}>
                <div className='w-full overflow-hidden bg-gray-200'>
                  <img className='object-cover w-full md:max-w-[300px]' src={car.thumbnail_url ? `${car.thumbnail_url}?text=${car.carmake.name} ${car.carmodel.name}` : 'storage/imgs/car.jpg'} />
                </div>
              </Link>
              <div className='flex-1 px-2 py-3'>
                <Link href={route('car.details',car.slug_id)} className='pt-2 text-xl font-bold text-blue-700 block'>
                  {car.year} {car.carmake.name} {car.carmodel.name}
                </Link>

                <p>
                  {car.mileage} <span className='italic text-gray-600'>mile</span>
                </p>
                
                <p className='text-2xl font-bold py-0 '>
                  <span className='text-lg align-super relative top-1 me-0.5 font-normal'>$</span>
                  {car.price}
                </p>
                
                <div className='flex flex-wrap gap-2 py-3'>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>Transmission : </span>
                    <span className='font-semibold'>{car.transmission.title}</span>
                  </p>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>Title : </span>
                    <span className='font-semibold'>{car.cartitle.title}</span>
                  </p>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>Engine : </span>
                    <span className='font-semibold'>{car.engine.title}</span>
                  </p>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>Drivetrain : </span>
                    <span className='font-semibold'>{car.drive.title}</span>
                  </p>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>MPG : </span>
                    <span className='font-semibold'>{car.mpg}</span>
                  </p>
                  <p className='badge badge-ghost border border-gray-400 px-2'>
                    <span className='font-semibold hidden lg:inline'>Fuel : </span>
                    <span className='font-semibold'>{car.fueltype.title}</span>
                  </p>
                </div>
                <p className='text-gray-600 text-sm italic'>{car.descrip}</p>
                
                <Link className="text-blue-700 my-1" href={route('dealer.show',car.dealersel.slug)}>{car.dealersel.name}</Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
