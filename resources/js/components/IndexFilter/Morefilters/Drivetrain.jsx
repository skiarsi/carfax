import React from 'react'

export default function Drivetrain({drive, setDrive}) {
  const handleChange = (e) =>{
    setDrive(e.target.value);
  }
  return (
    <>
      <label className='text-xl'>
        Drivetrain
        <select
          value={drive}
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">All Transmission</option>
            <option value="fwd">FWD</option>
            <option value="rwd">RWD</option>
            <option value="4wd">4WD</option>
            <option value="awd">AWD</option>
        </select>
      </label>
    </>
  )
}
