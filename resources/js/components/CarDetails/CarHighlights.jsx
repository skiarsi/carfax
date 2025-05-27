import { CarFront, CarIcon, Circle, Cog, Fuel, Radius, SwatchBook } from 'lucide-react'
import React from 'react'

export default function CarHighlights({cardetails}) {

  const features = cardetails.feature;
  const dealerDescrip = cardetails.details.dealer;
  
  return (
    <div className='w-full flex flex-col gap-3'>
      <p className='text-3xl text-gray-800 pt-6 font-semibold'>Car Highlights</p>
      <div className='bg-white border border-gray-300 w-full rounded-md p-5 py-16 flex flex-col'>
        <div className='w-full grid grid-cols-4 '>
          <div className='flex flex-row gap-3'>
            <CarIcon size={30} strokeWidth={1.0} />
            <div className='flex flex-col gap-0'>
              <span className='font-semibold text-lg' >Body type</span>
              <span className='text-lg'>{cardetails.bodytype.title}</span>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-row gap-3'>
              <CarFront size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >MPG City/Hwy</span>
                <span className='text-lg'>{cardetails.mpg}</span>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-row gap-3 '>
              <Circle size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Drive Type</span>
                <span className='text-lg'>{cardetails.drive.title}</span>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-row gap-3 '>
              <SwatchBook size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Exterior Color</span>
                <span className='text-lg'>{cardetails.colors.exterior}</span>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            <div className='flex flex-row gap-3 '>
              <Fuel size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Fuel type</span>
                <span className='text-lg'>{cardetails.fueltype.title}</span>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            <div className='flex flex-row gap-3 '>
              <Cog size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Engine</span>
                <span className='text-lg'>{cardetails.engine.title}</span>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            <div className='flex flex-row gap-3 '>
              <Radius size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Transmission</span>
                <span className='text-lg'>{cardetails.transmission.title}</span>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            <div className='flex flex-row gap-3 '>
              <SwatchBook size={30} strokeWidth={1.0} />
              <div className='flex flex-col gap-0'>
                <span className='font-semibold text-lg' >Interior Color</span>
                <span className='text-lg'>{cardetails.colors.interior}</span>
              </div>
            </div>
          </div>
        </div>

        {features !==null ? 
          <>
            <hr className='my-10 me-auto ' />
            <div className=' ps-5'>
                <p className='text-xl font-bold'>Car features</p>
                <div className='flex flex-row gap-1 ps-2 pt-2'>
                  {features.map((features, index)=>{
                    return <span className='text-sm bg-gray-200 border border-gray-300 py-0.5 px-3 rounded-md' key={index}>{features}</span>
                  })}
                </div>
              </div>
          </>
         : ''
        }
        
        {dealerDescrip !== null ?
          <>
            <hr className='m-0 mt-10 me-auto ' />
            <div className='ps-5'>
              <p className='text-xl font-bold'>Dealer Description</p>
              <div className="text-lg ps-2">{dealerDescrip}</div>
            </div>
          </>
        : ''}
      </div>
    </div>
  )
}
