import React, { useState } from 'react'
import { usePage,router } from '@inertiajs/react';
export default function CarYear({urlYear, chMinYear}) {

  const [selectedYear, setSelectecYear] = useState('');

  // year
  const years = [];
  for (let year = 1980; year <= 2025; year++) {
    years.push(year);
  }
  years.reverse();

  const handleChange = (e)=>{
    const newYear = e.target.value;
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set('yearmin', (newYear > 1980 & newYear < 2025) ? newYear : '0');

    // get car max to control
    // if user choose year after bigget than year before
    const yearBefore = parseInt(searchParams.get('yearmax'));
    if(yearBefore < parseInt(newYear)){
      searchParams.set('yearmax','0')
    }
  
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });

    // update sidefilter to use on max year component
    chMinYear(newYear);
  }
  

  return (
    <label>Year <span className='text-sm text-gray-600'>after:</span>
      <select value={urlYear || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
        <option value='0'>All years</option>
          {years && years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
      </select>
    </label>
  )
}
