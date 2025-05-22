import React, { useState } from 'react'
import { router } from '@inertiajs/react';

export default function Drivetype() {

  const searchParams = new URLSearchParams(window.location.search);
  const driveUrl = searchParams.get('drivetrain');

  const [drive, setDrive] = useState(driveUrl);

  const selectType = (e) => {
    const newDrive = e.target.getAttribute('value');
    searchParams.set('drivetrain', newDrive);
    
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
    
    setDrive(newDrive);
  }

  return (
    <>
      <label>Body type</label>
      <div className='flex flex-wrap gap-2 py-1 w-full'>
        <span className={`badge badge-neutral ${drive === '0' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="0" onClick={selectType}>All Body type</span>
        <span className={`badge badge-neutral ${drive === 'fwd' ? '' : 'badge-outline border'} cursor-pointer px-2`} value="fwd" onClick={selectType}>FWD</span>
        <span className={`badge badge-neutral ${drive === 'rwd' ? '' : 'badge-outline border'}  cursor-pointer px-2`} value="rwd" onClick={selectType}>RWD</span>
        <span className={`badge badge-neutral ${drive === '4wd' ? '' : 'badge-outline border'}  cursor-pointer px-2`} value="4wd" onClick={selectType}>4WD</span>
        <span className={`badge badge-neutral ${drive === 'awd' ? '' : 'badge-outline border'}  cursor-pointer px-2`} value="awd" onClick={selectType}>AWD</span>
      </div>
    </>
  )
}
