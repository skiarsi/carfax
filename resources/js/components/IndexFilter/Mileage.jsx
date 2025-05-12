import React from 'react'

export default function Mileage({chMileage, selMileage}) {

  const handleChange = (e) =>{
    chMileage(e.target.value)
  }
  return (
    <>
      <label className='text-xl'>
        Max Mileage
        <select
          value={selMileage}
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">Any Mileage</option>
            <option value="10000">10,000</option>
            <option value="30000">30,000</option>
            <option value="60000">60,000</option>
            <option value="100000">100,000</option>
            <option value="150000">150,000</option>
            <option value="200000">200,000</option>
        </select>
      </label>
    </>
  )
}
