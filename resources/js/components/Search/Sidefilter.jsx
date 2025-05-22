import React, { useEffect, useState } from 'react'
import CarBrands from './Filterforms/CarBrands'
import CarModel from './Filterforms/CarModel';
import CarYear from './Filterforms/CarYear';

import { usePage } from '@inertiajs/react';
import CarPrice from './Filterforms/CarPrice';
import CarYearBefore from './Filterforms/CarYearBefore';
import CarMileage from './Filterforms/CarMileage';
import Transmission from './Filterforms/Transmission';
import CarTitle from './Filterforms/CarTitle';
import BodyType from './Filterforms/BodyType';
import Drivetype from './Filterforms/Drivetype';

export default function Sidefilter() {
  
  const page = usePage();

  const [carbrand , setCarBrand] = useState('0');
  const [carmodel , setCarModel] = useState('0');
  const [yearafter , setYearafter] = useState('0');
  const [yearbefore , setYearbefore] = useState('0');
  const [drivetrain , setDrivetrain] = useState('0');
  // const [mileage , setMileage] = useState('0');
  // const [price , setPrice] = useState('0');
  // const [title , setTitle] = useState('0');
  // const [transmission , setTransmission] = useState('0');
  // const [body , setBodyUrl] = useState('0');
  
  
  useEffect(() => {

    const urlParams = new URLSearchParams(page.url.split('?')[1]);
    

    const brandUrl = urlParams.get('brand') || '0';
    const modelUrl = urlParams.get('model') || '0';
    const yearafter = urlParams.get('yearmin') || '0';
    const yearbefore = urlParams.get('yearmax') || '0';
    const driveUrl = urlParams.get('drivetrain') || '0';

    setCarBrand(brandUrl);
    setCarModel(modelUrl);
    setYearafter(yearafter);
    setYearbefore(yearbefore);
    setDrivetrain(driveUrl);

  }, [page.url]);
  
  // get car's brand from carbrand's component
  
  
  return (
    <div className='flex flex-col w-full'>
      <p className='font-bold text-xl flex flex-row'>
        Filters
        <span className='text-blue-600 cursor-pointer ms-auto me-0 text-lg'>Clear all</span>
      </p>
      <div className='py-3'> {carbrand}
        <CarBrands brand={carbrand} />
        <CarModel model={carmodel} brand={carbrand} />
        <hr className='my-3' />
        <div className=' flex flex-col gap-2'>
          <div className='grid grid-cols-2 gap-1'>
            <div>
              <CarYear urlYear={yearafter} chMinYear={setYearafter} />
            </div>
            <div>
              <CarYearBefore urlYear={yearbefore} afterYear={yearafter} />
            </div>
          </div>
          <CarPrice />
          <CarMileage />
          <Transmission />
          <CarTitle />
          <hr className='my-3' />
          <BodyType />
          <Drivetype />
        </div>
      </div>
    </div>
  )
}
