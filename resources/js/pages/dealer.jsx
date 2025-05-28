import React from 'react'
import { Head, Link, usePage } from '@inertiajs/react';
import Header from '../components/Header';
import { Mail, MapPin, Phone, SquareArrowOutUpRight } from 'lucide-react';
import DealerworkHours from '../components/ViewComponents/DealerworkHours';

export default function dealer() {
  
  const { dealer, app } = usePage().props;
  console.log(dealer);
  
  const rating = dealer.reviews.rate;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      <Head title={dealer.dealer_title ? dealer.dealer_title : `Dealer`}></Head>
      <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
        <div className="h-[40px] bg-blue-500">
            <Header />
        </div>
        <div className='w-full bg-gray-100  min-h-screen flex flex-col'>
          <div className='bg-white border-b-4 border-gray-400 w-full'>
            <div className="flex flex-col py-10 w-full md:w-10/12 px-2 md:px-0 xl:w-[1250px] mx-auto">
              <div className="breadcrumbs text-sm">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/dealers">Dealers</Link></li>
                </ul>
              </div>
              <p className='text-2xl md:text-4xl font-semibold pt-3'>
                {dealer.name}
              </p>
              <div className='flex gap-2'>
                <span>{(dealer.reviews.all).length} reviews</span>
                <div className="flex items-center space-x-0">
                  {[...Array(fullStars)].map((_, i) => (
                    <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09L5.64 12 1 7.91l6.06-.88L10 2l2.94 5.03 6.06.88L14.36 12l1.518 6.09z" />
                    </svg>
                  ))}

                  {hasHalfStar && (
                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="half">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="#d1d5db" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#half)" d="M10 15l-5.878 3.09L5.64 12 1 7.91l6.06-.88L10 2l2.94 5.03 6.06.88L14.36 12l1.518 6.09z" />
                    </svg>
                  )}

                  {[...Array(emptyStars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09L5.64 12 1 7.91l6.06-.88L10 2l2.94 5.03 6.06.88L14.36 12l1.518 6.09z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className='text-lg font-normal py-6 flex gap-5'>
                <div className='flex gap-1'>
                  <Phone size={30} /> {dealer.phone}
                </div>
                <div className='flex gap-1'>
                  <a href={`mailto:${dealer.email}`} className='flex gap-2' ><Mail size={30} />{dealer.email}</a>
                </div>
                <div className='flex flex-1 gap-1'>
                  <a
                    target='_blank'
                    className='flex gap-1'
                    href={`https://www.google.com/maps?q=${dealer.lat},${dealer.lon}`} >
                      <MapPin size={30} /> {dealer.address} <SquareArrowOutUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-10/12 px-2 md:px-0 xl:w-[1250px] mx-auto flex flex-row py-3'>
            <div className='w-[300px] p-1 pe-3'>
              <DealerworkHours workhours={dealer.workhours} />
            </div>
            <div className='flex-1 bg-red-300'>
              {
                dealer.cars.map(car => {
                  return (
                    <>
                      <p>{car.carmake.name}</p>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
