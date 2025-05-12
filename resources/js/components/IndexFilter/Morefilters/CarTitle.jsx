import React from 'react'

export default function CarTitle({title, chTitle}) {

  const handleChange = (e) =>{
    chTitle(e.target.value);
  }

  return (
    <>
      <label className='text-xl'>
        Title
        <select
          value={title}
          onChange={handleChange}
          className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option value="0">All Titles</option>
            <option value="reconstructed">reconstructed</option>
            <option value="dismantled">dismantled</option>
            <option value="odometer-rollback">Odometer Rollback</option>
            <option value="clearclean">Clear Title</option>
            <option value="water-damage">Water Damage</option>
            <option value="bonded">Bonded</option>
            <option value="junk">Junk</option>
            <option value="electronic">Electronic</option>
            <option value="salvage">Salvage</option>
            <option value="affidavit">Affidavit</option>
            <option value="rebuilt">Rebuilt</option>
        </select>
      </label>
    </>
  )
}
