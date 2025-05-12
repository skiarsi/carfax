import React from 'react'

export default function Price({selPrice, chPrice}) {

  const handleChange = (e) =>{
    chPrice(e.target.value);
  }

  return (
    <>
      <label className='text-xl'>
        Price Under
        <select
          onChange={handleChange}
          value={selPrice}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">Any price</option>
            <option value="5000">$5,000</option>
            <option value="10000">$10,000</option>
            <option value="15000">$15,000</option>
            <option value="20000">$20,000</option>
            <option value="25000">$25,000</option>
            <option value="35000">$35,000</option>
            <option value="50000">$50,000</option>
            <option value="75000">$75,000</option>
            
        </select>
      </label>
    </>
  )
}
