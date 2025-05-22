import React, { useState } from 'react'

export default function ImageCarousel({imgs}) {
  
  const [selectedImg, setSelectedImage] = useState(imgs[0]);


  return (
    <div className='flex flex-col w-full'>
      <div className='bg-black rounded-md w-full min-h-[300px] border border-gray-400'>
        <img src={`${selectedImg.image_url}?text=${selectedImg.id}`} className='w-full max-h-[600px] mx-auth' />
      </div>
      <div className="overflow-x-auto bg-white border border-gray-300 py-3 my-6 ">
        <div className="flex space-x-1 min-w-max py-1 px-3">
          {imgs.map((img)=>{
            return (
              <img
                key={img.id}
                src={`${img.image_url}?text=${img.id}`}
                alt="Car image"
                className={`w-20 h-20 shadow object-cover rounded cursor-pointer border-2 ${selectedImg.id === img.id ? 'border-gray-900' : 'border-white'}`}
                onClick={()=>setSelectedImage(img)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
