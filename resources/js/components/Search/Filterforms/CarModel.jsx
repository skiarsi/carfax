import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react';
import axios from 'axios';

export default function CarModel({model, chModel, brand}) {
  const [selectedBrand,setSelectedBrand] = useState(brand);
  
  const [allModel, setAllModel] = useState([]);

  useEffect(()=>{
    const getModels = async ()=>{
      await axios.get(`/api/carmodels/${brand}`)
              .then((res)=>{
                setAllModel(res.data);
              })
    }
    getModels();
  },[brand]);

  const handleChange = (e) =>{

  }

  return (
    <label>Car Model
      <select value={model || '0'} className="select select-sm border border-gray-300" onChange={handleChange}>
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
