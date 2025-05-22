import React, { useState } from 'react'
import { router } from '@inertiajs/react';

export default function CarMileage() {
  const searchParams = new URLSearchParams(window.location.search);
  const mileageUrl = searchParams.get('mileage');

  const [mileage, setMileage] = useState(mileageUrl);

  const handleChange =(e)=>{
    const newMileage = e.target.value;
    setMileage(newMileage);
  }

  const handleRelease = (e)=>{
    const newMileage = e.target.value;

    
    searchParams.set('mileage', newMileage);
    
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
  }

  return (
    <label>Mileage <span className='ms-auto me-0 text-xs text-gray-500 block'>{mileage}</span>
      <input
          type="range"
          min={0}
          max={350000}
          value={(parseInt(mileage) < 350000 ? mileage : 350000)}
          step={5000}
          className="range range-xs"
          onChange={handleChange}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
        />
    </label>
  )
}
