import React from 'react'

export default function DealerworkHours({workhours}) {
  return (
    <div className='rounded-lg shadow-md bg-white border border-gray-300 p-4'>
      <p className='text-xl font-semibold pb-4'>Work Days</p>
      <div className='flex flex-col w-full px-3 divide-y divide-gray-200'>
        {(workhours).map(work => {
          return [
            <div key={work.id} className='flex flex-row py-2'>
              <span className='w-[50px] text-sm'>{work.day[0]+work.day[1]+work.day[2]}</span>
              <span className='flex-1 text-sm'>{(work.opens_at === null) ? `close` : work.opens_at}</span>
              <span className='flex-1 text-sm'>{work.closes_at}</span>
            </div>
          ]
        })}
      </div>
    </div>
  )
}
