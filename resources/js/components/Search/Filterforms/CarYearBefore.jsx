import React, { useState } from 'react'
import { usePage,router } from '@inertiajs/react';
export default function CarYearBefore({urlYear, afterYear}) {

  const [selectedYear, setSelectecYear] = useState('');
  const firstYear = afterYear < 1980 ? 1980 : afterYear;
  // year
  const years = [];
  for (let year = firstYear; year <= 2025; year++) {
    years.push(year);
  }
  years.reverse();

  const searchParams = new URLSearchParams(window.location.search);

  const handleChange = (e)=>{
    const newYearBefore = e.target.value;
    const yearBefore = parseInt(searchParams.get('yearmin'));
    

    // just add data in url variable if number is between 1980-2025 and year for 'before' is bigger than year for 'after' 
    searchParams.set('yearmax', (newYearBefore > 1980 & newYearBefore < 2025) & (yearBefore < newYearBefore) ? newYearBefore : '0');
  
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
  }
  

  return (
    <label>Year <span className='text-sm text-gray-600'>before:</span>
      <select value={urlYear || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
        <option value='0'>All years</option>
          {years && years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
      </select>
    </label>
  )
}
