import { usePage } from '@inertiajs/react';
import React, { ChangeEvent, useEffect, useState } from 'react'

export default function CarBrand({selectedBrand, changeBrand, setModel}) {
  const { auth, carbrands } = usePage().props;
  const [brand, setBrand] = useState('0');

  const brandChange = async (e) => {
    setModel('0');
    changeBrand(e.target.value);
  }  

  return (
    <>
      <label className='text-xl'>
        Brand
        <select
        className='w-full border border-gray-300 py-1 px-2 text-xl bg-white rounded-md'
        onChange={brandChange}
        value={selectedBrand}
        >
          <option className='' value="0">All Brands</option>
          {carbrands && carbrands.map((brand) => {
            return (
              <option key={brand.id} value={brand.slug}>{brand.name}</option>
            );
          })}
        </select>
      </label>
    </>
  )
}
