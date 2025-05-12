import React from 'react'

export default function Resualt({searchresult}) {
  const resualt = searchresult.data;
  return (
    <div className='grid grid-cols-2 gap-3 pb-4'>
      {resualt && resualt.map(cars=>{
        return (
          <div key={cars.id} className='bg-white rounded-md overflow-hidden shadow-md border border-gray-300 flex flex-row'>
            <div className='w-[200px] h-[200px] bg-gray-200'>
              &nbsp;
            </div>
            <div className='flex-1'>
              &nbsp;
            </div>
          </div>
        )
      })}
    </div>
  )
}
