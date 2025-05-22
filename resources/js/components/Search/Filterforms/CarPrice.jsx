import React, { useState } from 'react'
import { router } from '@inertiajs/react';

export default function CarPrice() {

  const searchParams = new URLSearchParams(window.location.search);
  const urlPrice = searchParams.get('price');

  const[price, setPrice] = useState(urlPrice);

  const min = 0
  const max = 200000

  const handleChange = (e)=>{
    // chPrice(e.target.value)
    setPrice((parseInt(e.target.value) < 5000 ? '5000' : e.target.value))
  }

  const handleRelease = (e) =>{
    const newPrice = e.target.value;
    
    searchParams.set('price', newPrice);
    
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
  }

  return (
    <label>Price <span className='ms-auto me-0 text-xs text-gray-500 block'>Max {price}</span>
      <input
          type="range"
          min={min}
          max={max}
          value={(parseInt(price) < 5000 ? 5000 : price)}
          step={5000}
          className="range range-xs"
          onChange={handleChange}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
        />
    </label>
  )
}
