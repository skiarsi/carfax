import React from 'react'

export default function Carreviews({rateDistrib, car}) {
  console.log(car);
  const fullStars = Math.round(car.reviews.avgreviews);
  // console.log(reviews.user_id.users);
  
  return (
    <div className='w-full flex flex-col gap-3'>
      <p className='text-3xl text-gray-800 pt-6 font-semibold'>{car.carmake.name} {car.carmodel.name} Reviews</p>
      <div className='flex flex-col gap-10 bg-white border border-gray-300 w-full rounded-md p-10'>
        <div className=' flex flex-row '>
          <div className='w-[150px] flex flex-col justify-center'>
            <span className='w-full text-center'>{car.reviews.countReviews} Reviews</span>
            <p className='text-blue-500 text-8xl font-semibold text-center'>{(parseFloat(car.reviews.avgreviews)).toFixed(1)}</p>
            <span className='flex flex-row mx-auto'>
            {
              [...Array(5)].map((_,i) => (
                <span key={i} className={`${i < fullStars ? 'text-amber-600' : 'text-gray-600'} text-3xl`}>{i < fullStars ? '★' : '☆'}</span>
              ))
            }
            </span>
          </div>
          <div className='flex-1 px-10'>
            <div className='flex flex-col gap-1 w-full'>
              <div className='flex gap-2'>
                <span className='w-[60px]'>5 Start</span>
                <div className='w-[200px] bg-gray-200 relative'>
                  <div
                    className={`absolute top-0 left-0 bg-amber-400`}
                    style={{ width: `${((rateDistrib[5] / car.reviews.countReviews) * 100).toFixed(1)}%` }}
                    >&nbsp;</div>
                </div>
                <span>{(rateDistrib[5]!==null && (rateDistrib[5] / car.reviews.countReviews) * 100).toFixed(1)}%</span>
              </div>

              <div className='flex gap-2'>
                <span className='w-[60px]'>4 Start</span>
                <div className='w-[200px] bg-gray-200 relative'>
                  <div
                    className={`absolute top-0 left-0 bg-amber-400`}
                    style={{ width: `${((rateDistrib[4] / car.reviews.countReviews) * 100).toFixed(1)}%` }}
                    >&nbsp;</div>
                </div>
                <span>{(rateDistrib[4]!==null && (rateDistrib[4] / car.reviews.countReviews) * 100).toFixed(1)}%</span>
              </div>

              <div className='flex gap-2'>
                <span className='w-[60px]'>3 Start</span>
                <div className='w-[200px] bg-gray-200 relative'>
                  <div
                    className={`absolute top-0 left-0 bg-amber-400`}
                    style={{ width: `${(rateDistrib[3]!==null && (rateDistrib[3] / car.reviews.countReviews) * 100).toFixed(1)}%` }}
                    >&nbsp;</div>
                </div>
                <span>{((rateDistrib[3] / car.reviews.countReviews) * 100).toFixed(1)}%</span>
              </div>

              <div className='flex gap-2'>
                <span className='w-[60px]'>2 Start</span>
                <div className='w-[200px] bg-gray-200 relative'>
                  <div
                    className={`absolute top-0 left-0 bg-amber-400`}
                    style={{ width: `${(rateDistrib[2]!==null && (rateDistrib[2] / car.reviews.countReviews) * 100).toFixed(1)}%` }}
                    >&nbsp;</div>
                </div>
                <span>{((rateDistrib[2] / car.reviews.countReviews) * 100).toFixed(1)}%</span>
              </div>

              <div className='flex gap-2'>
                <span className='w-[60px]'>1 Start</span>
                <div className='w-[200px] bg-gray-200 relative'>
                  <div
                    className={`absolute top-0 left-0 bg-amber-400`}
                    style={{ width: `${(rateDistrib[1]!==null && (rateDistrib[1] / car.reviews.countReviews) * 100).toFixed(1)}%` }}
                    >&nbsp;</div>
                </div>
                <span>{((rateDistrib[1] / car.reviews.countReviews) * 100).toFixed(1)}%</span>
              </div>
            </div>
            
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Latest users reviews</p>
          <div className='flex gap-2'>
            {car.reviews.latestReviews.list && (car.reviews.latestReviews.list).map(reviews => {
              return (
              <div key={reviews.id} className='w-1/3 h-min-[200px] border border-gray-300 p-3'>
                <p className='font-semibold'>{reviews.user}</p>
                  <div className='py-4'>
                    {
                      [...Array(5)].map((_,i) => (
                        <span key={i} className={`${i < reviews.rating ? 'text-amber-600' : 'text-gray-600'} text-3xl`}>★</span>
                      ))
                    }
                  </div>
                <p>{reviews.comment}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
