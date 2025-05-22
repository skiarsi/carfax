import React from 'react'
import { router } from '@inertiajs/react';

export default function BodyType() {
  
  const searchParams = new URLSearchParams(window.location.search);
  const bodyType = searchParams.get('bodytype');

  const selectType = (e) =>{
    const newTitle = e.target.getAttribute('value');
    
    searchParams.set('bodytype', newTitle);
    
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
  }
  return (
    <>
      <label>Body type</label>
      <div className='flex flex-wrap gap-2 py-1 w-full'>
        <span className={`badge badge-neutral ${bodyType === '0' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="0" onClick={selectType}>All Body type</span>
        <span className={`badge badge-neutral ${bodyType === 'pickup' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="pickup" onClick={selectType}>Pickup</span>
        <span className={`badge badge-neutral ${bodyType === 'suv' ? '' : 'badge-outline border'}  cursor-pointer px-2`} value="suv" onClick={selectType}>Suv</span>
        <span className={`badge badge-neutral ${bodyType === 'sedan' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="sedan" onClick={selectType}>Sedan</span>
        <span className={`badge badge-neutral ${bodyType === 'coupe' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="coupe" onClick={selectType}>Coupe</span>
        <span className={`badge badge-neutral ${bodyType === 'van' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="van" onClick={selectType}>Van</span>
        <span className={`badge badge-neutral ${bodyType === 'convertible' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="convertible" onClick={selectType}>Convertible</span>
        <span className={`badge badge-neutral ${bodyType === 'chassis' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="chassis" onClick={selectType}>Chassis</span>
        <span className={`badge badge-neutral ${bodyType === 'hatchback' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="hatchback" onClick={selectType}>Hatchback</span>
        <span className={`badge badge-neutral ${bodyType === 'minivan' ? '' : 'badge-outline border'} badge-outline border cursor-pointer px-2`} value="minivan" onClick={selectType}>Minivan</span>
        <span className={`badge badge-neutral ${bodyType === 'wagon' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="wagon" onClick={selectType}>Wagon</span>
      </div>
    </>
  )
}
