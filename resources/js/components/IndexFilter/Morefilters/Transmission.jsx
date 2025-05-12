import React from 'react'

export default function Transmission({selTransmission, chTransmission}) {
  
  const handleChange = (e) =>{
    chTransmission(e.target.value);
  }

  return (
    <>
      <label className='text-xl'>
        Transmission
        <select
          value={selTransmission}
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">All Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manuel">Manuel</option>
        </select>
      </label>
    </>
  )
}
