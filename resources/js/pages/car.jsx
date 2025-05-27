import React, { useRef } from 'react'
import { Head, Link, usePage } from '@inertiajs/react';
import Header from '../components/Header';
import Sidefilter from '../components/Search/Sidefilter';
import ImageCarousel from '../components/CarDetails/ImageCarousel';
import CarDetails from '../components/CarDetails/CarDetails';
import CarHighlights from '../components/CarDetails/CarHighlights';
import CarDealer from '../components/CarDetails/CarDealer';
import SendDealerMsg from '../components/ViewComponents/SendDealerMsg';
import Carreviews from '../components/CarDetails/Carreviews';
import Suggestioncars from '../components/ViewComponents/Suggestioncars';

export default function car() {
  const { cardetails, ratingDistribution } = usePage().props;    
      
  if(!cardetails){
    return <>
      <div className='bg-gray-300 border border-gray-200 mx-auto w-[400px] md:w-[600px] my-48 rounded-xl py-8 px-4'>
        <p className=''>No car found</p>
      </div>
    </>
  }

  // make a name for title
  const carname = cardetails.year+' '+cardetails.carmake.name +' '+ cardetails.carmodel.name

  /*
    sort car's images
    always first thumbnail
    then other pictures
  */
  const sortedImages = cardetails.images.list.sort((a, b) => b.isThumbnail - a.isThumbnail);
  
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Head title={carname}></Head>
      <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
        <div className="h-[40px] bg-blue-500">
            <Header />
        </div>
        <div className='w-full bg-gray-100  min-h-screen  pt-5'>
          <div className="flex-1 flex flex-row pb-5 w-11/12 md:w-11/12 lg:w-10/12 xl:w-[1250px] mx-auto">
            <div className='w-8/12 flex flex-col gap-3 '>
              <ImageCarousel imgs={sortedImages} />
              <CarDetails cardetails={cardetails} />
              <CarHighlights cardetails={cardetails} />
              <CarDealer onClickText={handleFocus} cardetails={cardetails} />
              <Carreviews rateDistrib={ratingDistribution} car={cardetails} />
              <Suggestioncars currentcar={cardetails} /> 
            </div>
            <div className='w-4/12 relative'>
              <SendDealerMsg inpRef={inputRef} car={cardetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
