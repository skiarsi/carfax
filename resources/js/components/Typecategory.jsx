import React from 'react'
import { usePage } from '@inertiajs/react';

export default function Typecategory() {
  const { image_path } = usePage().props;
  return (
    <div className='w-[98%] md:w-10/12 lg:w-9/12 xl:w-[1024px] mx-auto pb-5'>
      <p className='text-3xl font-bold text-gray-700 mb-3'>Discover by Type</p>
      <div className='w-full grid grid-cols-5 gap-4 '>
        <a href={`/q?bodytype=electric`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2 '>
          <img className='w-[100px] h-[100px] mx-auto p-5' src={image_path+'/icons/electric.png'} />
          <span className='font-bold block text-center text-xl'>Electric cars</span>
        </a>
        <a href={`/q?bodytype=suv`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto' src={image_path+'/icons/suv.png'} />
          <span className='font-bold block text-center text-xl'>SUV cars</span>
        </a>
        <a href={`/q?bodytype=minivan`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-1' src={image_path+'/icons/mini-van.png'} />
          <span className='font-bold block text-center text-xl'>Mini Vans</span>
        </a>
        <a href={`/q?bodytype=truck`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-2' src={image_path+'/icons/truck.png'} />
          <span className='font-bold block text-center text-xl'>Truck</span>
        </a>
        <a href={`/q?bodytype=coupe`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-2' src={image_path+'/icons/coupe.png'} />
          <span className='font-bold block text-center text-xl'>Coupe Cars</span>
        </a>

        <a href={`/q?bodytype=convertible`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-1' src={image_path+'/icons/convertibles.png'} />
          <span className='font-bold block text-center text-xl'>Convertible Cars</span>
        </a>
        <a href={`/q?bodytype=sedan`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-1' src={image_path+'/icons/sedan.png'} />
          <span className='font-bold block text-center text-xl'>Sedan Cars</span>
        </a>
        <a href={`/q?bodytype=hachback`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-2' src={image_path+'/icons/hachback.png'} />
          <span className='font-bold block text-center text-xl'>Hachback Cars</span>
        </a>
        <a href={`/q?bodytype=wagon`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-2' src={image_path+'/icons/wagon.png'} />
          <span className='font-bold block text-center text-xl'>Wagon Cars</span>
        </a>
        <a href={`/q?bodytype=van`} className='flex flex-col bg-white hover:shadow-lg rounded-md overflow-hidden pb-2'>
          <img className='w-[100px] h-[100px] mx-auto p-3' src={image_path+'/icons/van.png'} />
          <span className='font-bold block text-center text-xl'>Vans</span>
        </a>
      </div>
    </div>
  )
}
