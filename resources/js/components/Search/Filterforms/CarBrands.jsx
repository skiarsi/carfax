import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react';
import axios from 'axios';

export default function CarBrands({brand, chBrand}) {

  const [allBrands, setAllbrands] = useState([]);
  
  useEffect(()=>{
    const resualt = async () => {
      await axios.get(`/api/brands`)
              .then((res)=>{
                setAllbrands(res.data);
              })
    }
    resualt();
  },[])

  const handleChange = (e) =>{
    chBrand(e.target.value);
  }
  
  
  return (
    <label>Car Brand
      <select value={brand || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
        <option value='0'>All brands</option>
        {allBrands && allBrands.map((brand) => {
          return (
             <option key={brand.id} value={brand.slug}>{brand.name}</option>
          );
        })}
      </select>
    </label>
  )
}
