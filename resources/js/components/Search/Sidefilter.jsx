import React, { useEffect, useState } from 'react'
import CarBrands from './Filterforms/CarBrands'
import CarModel from './Filterforms/CarModel';

import { usePage } from '@inertiajs/react';

export default function Sidefilter() {
  
  const page = usePage();

  const [carbrand , setCarBrand] = useState('0');
  const [carmodel , setCarModel] = useState('0');
  
  useEffect(() => {
    const urlParams = new URLSearchParams(page.url.split('?')[1]);
    const urlBrand = urlParams.get('brand');
    const urlModel = urlParams.get('model');
    setCarBrand(urlBrand);
    setCarModel(urlModel);
  }, [page.url]);
  
  // get car's brand from carbrand's component
  
  
  return (
    <div className='flex flex-col w-full'>
      <p className='font-bold text-xl flex flex-row'>
        Filters
        <span className='text-blue-600 cursor-pointer ms-auto me-0 text-lg'>Clear all</span>
      </p>
      <div className='py-3'>
        <CarBrands brand={carbrand} chBrand={setCarBrand} />
        <CarModel model={carmodel} chModel={setCarModel} brand={carbrand} />
      </div>
    </div>
  )
}
