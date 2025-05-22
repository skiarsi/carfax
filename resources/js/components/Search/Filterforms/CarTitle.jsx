import React, { useState } from 'react'
import { router } from '@inertiajs/react';
export default function CarTitle() {
  
  const searchParams = new URLSearchParams(window.location.search);
  const bodyType = searchParams.get('title');

  const [title, setTitle] = useState(bodyType);

  const handleChange = (e) =>{
    const newTitle = e.target.value;
    searchParams.set('title', newTitle);
  
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });

    setTitle(newTitle);
  }

  return (
    <label>Car Title
      <select value={title || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
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
  )
}
