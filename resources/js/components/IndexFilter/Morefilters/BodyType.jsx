import React from 'react'

export default function BodyType({body, setBody}) {
  const handleChange = (e) =>{
    setBody(e.target.value);
  }
  return (
    <>
      <label className='text-xl'>
        Body type
        <select
          value={body}
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">All Body type</option>
            <option value="pickup">Pickup</option>
            <option value="suv">Suv</option>
            <option value="sedan">Sedan</option>
            <option value="coupe">Coupe</option>
            <option value="van">Van</option>
            <option value="convertible">Convertible</option>
            <option value="chassis">Chassis</option>
            <option value="hatchback">Hatchback</option>
            <option value="minivan">Minivan</option>
            <option value="wagon">Wagon</option>
        </select>
      </label>
    </>
  )
}
