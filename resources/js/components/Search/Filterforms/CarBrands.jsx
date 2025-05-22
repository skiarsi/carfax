import React, { useEffect, useState } from 'react'
import { usePage,router } from '@inertiajs/react';

import axios from 'axios';

export default function CarBrands({brand}) {

  const [allBrands, setAllbrands] = useState([]);
  
  useEffect(()=>{
    const resualt = async () => {
      await axios.get(`/api/brands`)
              .then((res)=>{
                setAllbrands(res.data);
              }).catch(function (error) {
                console.log(error.toJSON());
              });
    }
    resualt();
  },[])

  const handleChange = (e) =>{
    const newBrand = e.target.value;
    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('brand', newBrand);
    
    // reset model to 0
    searchParams.set('model', '0');

    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true, // یا false اگه بخوای همه چیز ریست بشه
    });
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
