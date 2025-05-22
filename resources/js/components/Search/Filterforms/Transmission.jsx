import React, { useState } from 'react'
import { router } from '@inertiajs/react';

export default function Transmission() {

  const searchParams = new URLSearchParams(window.location.search);
  const transUrl = searchParams.get('transmission');


  const [trans, setTrans] = useState(transUrl);
  const [transmission , setTransmission] = useState(trans);

  const handleChange = (e) =>{

    const newTransmission = e.target.value;
    setTransmission(newTransmission);
    setTrans(newTransmission);

    searchParams.set('transmission', newTransmission);
    
    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true,
    });
  }

  return (
    <label>Transmission
      <select value={trans || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
        <option value='0'>Any Transmission</option>
        <option value='automatic'>Automatic</option>
        <option value='manuel'>Manuel</option>
      </select>
    </label>
  )
}
