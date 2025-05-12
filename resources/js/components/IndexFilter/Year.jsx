import React from 'react'

export default function Year({chYear,selYear}) {


  // year
  const years = [];
  for (let year = 1980; year <= 2025; year++) {
    years.push(year);
  }
  years.reverse();

  const handleChange = (e)=>{
    chYear(e.target.value)
  }

  return (
    <>
      <label className='text-xl'>
        Min Year
        <select
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">Select a year</option>
            {years && years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
        </select>
      </label>
    </>
  )
}
