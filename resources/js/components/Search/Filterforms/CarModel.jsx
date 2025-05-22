import React, { useEffect, useState } from 'react'
import { usePage,router } from '@inertiajs/react';
import axios from 'axios';

export default function CarModel({model, brand}) {
  
  const [allModel, setAllModel] = useState([]);

  useEffect(()=>{
    if (brand === '0') {
      setAllModel([]);
      return;
    }

    const getModels = async ()=>{
      
      try {
        const res = await axios.get(`/api/carmodels/${brand}`);
        setAllModel(res.data);
      } catch (error) {
        
      } finally {

      }
      
    }
    getModels();
  },[brand]);

  const handleChange = (e) =>{
    const newModel = e.target.value;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('model', newModel);

    router.visit(`${window.location.pathname}?${searchParams.toString()}`, {
      preserveScroll: true,
      preserveState: true,
    });
  }

  return (
    <label>Car Model
      <select disabled={brand === '0'} value={model || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
        <option value='0'>All Models</option>
        {allModel.map((carmodel) => (
          <option key={carmodel.id} value={carmodel.slug}>
            {carmodel.name}
          </option>
        ))}
      </select>
    </label>
  )
}
