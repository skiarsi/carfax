import { Head, Link, usePage } from '@inertiajs/react';

import axios from 'axios';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import CarBrand from './IndexFilter/CarBrand';
import CarModel from './IndexFilter/CarModel';
import Year from './IndexFilter/Year';
import Mileage from './IndexFilter/Mileage';
import Price from './IndexFilter/Price';
import ResultButton from './IndexFilter/ResultButton';
import Transmission from './IndexFilter/Morefilters/Transmission';
import CarTitle from './IndexFilter/Morefilters/CarTitle';
import BodyType from './IndexFilter/Morefilters/BodyType';
import Drivetrain from './IndexFilter/Morefilters/Drivetrain';

export default function IndexFilter() {
  const { auth } = usePage().props;

  const [brand, setBrand] = useState('0');
  const [carmodel, setCarmodel] = useState([]);
  const [selectedModel, setSelectedModel] = useState('0');
  const [selectedYear, setSelectedYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [transmission, setTransmission] = useState(0);
  const [title, setTitle] = useState(0);
  const [bodytype, setBodytype] = useState(0);
  const [drivetrain, setDrivetrain] = useState(0);

  const [count, setCount] = useState('0');
  
  const [loading, setLoading] = useState(true);

  // show more filters
  const[showmore, setShowmore] = useState(false);
  

  // return car's count
  useEffect(()=>{
    const countCars = async()=>{
      setLoading(true);
      await axios.get(`/api/vehicles/count?brand=${brand}&model=${selectedModel}&year=${selectedYear}&price=${price}&mileage=${mileage}&transmission=${transmission}&title=${title}&bodytype=${bodytype}&drivetrain=${drivetrain}`)
                    .then((response)=>{
                      setCount(response.data.count);
                    });
                    setLoading(false)
    }
    countCars();
  },[brand, selectedModel, selectedYear,price, mileage, transmission, title, bodytype, drivetrain]);

  

  return (
    <div className='w-[98%] md:w-10/12 lg:w-9/12 xl:w-[1024px] mx-auto flex flex-col bg-white rounded-sm md:rounded-lg px-4 py-10  overflow-hidden shadow-md mt-1 md:-mt-[2%]'>
      
      <div className='flex flex-col md:flex-row'>
        <div className="w-full md:w-[40%] flex grid-cols-2">
          <div className='w-full py-2 md:py-5 px-1'>
            <CarBrand
                changeBrand={setBrand}
                selectedBrand ={brand}
                setModel={setSelectedModel} /> 
          </div>
          <div className='w-full py-2 md:py-5 px-1'>
            <CarModel
                carBrand={brand}
                setModel={setCarmodel}
                models={carmodel}
                value={selectedModel}
                updatevalue={setSelectedModel} />
          </div>
          </div>
        <div className="w-full md:w-[60%] grid grid-cols-3">
          <div className='w-full py-2 pb-5 md:py-5 px-1'>
            <Year
              chYear={setSelectedYear}
              selYear={selectedYear}/>
          </div>
          <div className='w-full py-2 pb-5 md:py-5 px-1'>
            <Price
              chPrice={setPrice}
              selPrice={price} />
          </div>
          <div className='w-full py-2 pb-5 md:py-5 px-1'>
            <Mileage
              chMileage={setMileage}
              selMileage={mileage} />
          </div>
        </div>
      </div>
      <div className={`py-5 md:py-2 px-1 grid grid-cols-2 md:grid-cols-4 gap-2 ${!showmore && 'hidden'}`}>
        <div className='w-full'>
          <Transmission selTransmission={transmission}  chTransmission={setTransmission} />
        </div>
        <div className='w-full'>
          <CarTitle title={title} chTitle={setTitle} />
        </div>
        <div className='w-full'>
          <BodyType body={bodytype} setBody={setBodytype} />
        </div>
        <div className='w-full'>
          <Drivetrain drive={drivetrain} setDrive={setDrivetrain} />
        </div>
      </div>
      <div className='flex flex-row px-1 py-3'>
        {/* <Link href={`${route('cars.filterresualt')}?brand=${brand}&model=${selectedModel}&year=${selectedYear}&price=${price}&mileage=${mileage}&transmission=${transmission}&title=${title}&bodytype=${bodytype}&drivetrain=${drivetrain}`}>resualts</Link> */}
        <ResultButton
          link= {`${route('cars.filterresualt')}?brand=${brand}&model=${selectedModel}&year=${selectedYear}&price=${price}&mileage=${mileage}&transmission=${transmission}&title=${title}&bodytype=${bodytype}&drivetrain=${drivetrain}`}
          count={count}
          loading={loading}
          filters={showmore} setFilters={setShowmore} />
      </div>

    </div>
  )
}
