import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CarModel({carBrand, setModel, models, value, updatevalue}) {
  useEffect(()=>{
    
    const getModels = async ()=>{
      await axios.get(`/api/carmodels/${carBrand}`)
                        .then((response) => {                            
                            setModel(response.data)
                        });
    }
    getModels();
  },[carBrand])

  const handleChange = (e)=>{
    updatevalue(e.target.value);
  }

  return (
    <>
      <label className='text-xl'>
          Model
          <select
            disabled={carBrand === '0' ? true : false}
            value={value}
            onChange={handleChange}
            className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md disabled:bg-gray-100'>
            <option className='' value="0">All Models</option>
              {models && models.map((model) => {
                return (
                  <option key={model.id} value={model.slug}>{model.name}</option>
                );
              })}
          </select>
      </label>
    </>
  )
}
