import React from 'react'

export default function Pricecategoury() {
  return (
    <div className='w-[98%] md:w-10/12 lg:w-9/12 xl:w-[1024px] mx-auto pb-5'>
      <p className='text-3xl font-bold text-gray-700 mb-3'>Discover by Price</p>
      <div className='w-full grid grid-cols-4 gap-4 '>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=1000`}>Under $1,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=3000`}>Under $3,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=5000`}>Under $5,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=10000`}>Under $10,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=15000`}>Under $15,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=20000`}>Under $20,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=25000`}>Under $25,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=30000`}>Under $30,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=35000`}>Under $35,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=45000`}>Under $45,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=50000`}>Under $50,000</a>
        <a className='bg-white rounded-md overflow-hidden py-3 px-3 text-xl font-bold border border-gray-300 hover:shadow-lg' href={`/q?price=75000`}>Under $75,000</a>
      </div>
    </div>
  )
}
