import React, {useState} from 'react'
import { usePage,router,useForm } from '@inertiajs/react';
import { Plus, Minus } from 'lucide-react';

export default function SendDealerMsg({car, inpRef}) {
  const { auth,flash } = usePage().props;
  const [showNote, setShowNote] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const carname = car.year+' '+car.carmodel.name+' '+car.carmake.name;

  
    

  const initialForm = {
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
    phone: '',
    message: '',
    car: car.id,
    dealer: car.dealersel?.id
  };
  
  const { data, setData, post, processing, errors } = useForm(initialForm)
  

  function handleSubmit(e){
    e.preventDefault()

    post(route('message.store'), {
      preserveScroll: true,
      onSuccess: () => {
				setData(initialForm);
        setShowNote(false); 
			}
    })
  }

  // show hide comment
  function handleComment(){
    setData((prevData) => ({
      ...prevData,
    }));

    setShowNote(!showNote);
  }

  return (
    <div className='p-3 w-full sticky top-4'>
      
      <p className='font-semibold text-2xl'>I'm interesting in this car
        <span className='block font-normal text-xl'>{carname}</span>
      </p>
      
      <form className="space-y-3 bg-white border border-gray-300 p-4 mt-5 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold">Your Contact Information</h2>
        {
          flash?.success && (
            <>
              <div className="bg-green-100 text-green-800 border border-green-900 p-3 rounded-md mt-2">
                <p className="text-sm">{flash.success}</p>
              </div>
            </>
          )
        }
        <div className='block'>
          {errors && Object.values(errors).map((error, index) => (
            <span key={index} className="text-red-500 text-sm block">{error}</span>
          ))}
        </div>
          
        <div className="grid grid-cols-2 gap-2">
          <input
            value={data.firstName}
            onChange={e => setData('firstName', e.target.value)}
            id="firstName"
            type="text"
            placeholder="First Name"
            className={`border rounded p-2 ${errors.firstName ? 'border-red-600' : ''}`}
            ref={inpRef}
          />
          <input
            value={data.lastName}
            onChange={e => setData('lastName', e.target.value)}
            id="lastName"
            type="text"
            placeholder="Last Name"
            className={`border rounded p-2 ${errors.lastName ? 'border-red-600' : ''}`}
          />
        </div>

        <input
          value={data.zipCode}
          onChange={e => setData('zipCode', e.target.value)}
          id="zipCode"
          type="text"
          placeholder="ZIP Code"
          className={`border w-full rounded p-2 ${errors.zipCode ? 'border-red-600' : ''}`}
        />

        <input
          value={data.email}
          onChange={e => setData('email', e.target.value)}
          id="email"
          type="email"
          placeholder="Email"
          className={`border w-full rounded p-2 ${errors.email ? 'border-red-600' : ''}`}
        />

        <input
          value={data.phone}
          onChange={e => setData('phone', e.target.value)}
          id="phone"
          type="tel"
          placeholder="Phone Number (Optional)"
          className={`border w-full rounded p-2 ${errors.phone ? 'border-red-600' : ''}`}
        />

        
        <div>
          <button
            type="button"
            onClick={handleComment}
            className="flex items-center text-sky-700 hover:underline text-sm cursor-pointer"
          >
            {showNote ? (
              <>
                <Minus color="#050505" /> No personal note
              </>
            ) : (
              <>
                <Plus color="#050505" /> Add a personal note (optional)
              </>
            )}
          </button>

          {showNote && (
            <textarea
              value={data.message}
              onChange={e => setData('message', e.target.value)}
              id="message"
              placeholder="Your message..."
              className={`border w-full rounded p-2 ${errors.message ? 'border-red-600' : ''}`}
              rows="3"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={processing}
          className="w-full
                    bg-sky-800
                    text-white
                    disabled:bg-gray-500
                    disabled:text-black
                    hover:bg-sky-700
                    font-semibold
                    py-2
                    rounded
                    flex
                    justify-center
                    items-center
                    gap-2
                    cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
