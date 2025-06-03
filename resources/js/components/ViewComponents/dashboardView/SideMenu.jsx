import { Link } from '@inertiajs/react';
import { Car, LayoutDashboard, LogOut, Mail, Settings2 } from 'lucide-react';

export default function SideMenu({dealer}) {
  
  return (
    <>
      <p className='text-xl font-bold ps-5 pt-8 pb-3 select-none'>Dashboard</p>
      <div className='w-full flex flex-row my-10'>
        <div className='w-12 h-12 rounded-xl bg-gray-400 overflow-hidden ms-5 me-3'>
          <img src={dealer.dealer_logo+`?text=${dealer.dealer_title}` ? dealer.dealer_logo+`?text=${dealer.dealer_title}` : `/images/dealer/${dealer.dealer_slug}/logo.png`} alt="Dealer Logo" className='w-full h-full object-cover' />
        </div>
        <div className='flex-1 flex flex-col justify-start'>
          <p className='text-lg font-bold text-gray-700'>{dealer.dealer_title}</p>
          <a target='_blank' href={route('dealer.show', dealer.dealer_slug)} className='text-sm text-blue-500 hover:underline'>visit page</a>
        </div>
      </div>
      <ul className="menu rounded-box w-full">
        <li className=''>
          <Link href={route('dashboard')} className='py-3'>
            <LayoutDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/cars" className='py-3'>
            <Car />
            Cars
          </Link>
        </li>
        <li>
          <Link href="/dashboard/messages" className='py-3'>
            <Mail />
            User's Messages
          </Link>
        </li>
        <li className='border-t border-gray-300 mt-3'>
          <Link href="/dashboard/settings" className='py-3'>
            <Settings2 />
            Settings
          </Link>
        </li>
        <li className='border-t border-gray-300 hover:bg-red-400 hover:text-white'>
          <Link href="/dashboard/settings" className='py-3'>
            <LogOut />
            Logout
          </Link>
        </li>
      </ul>
    </>
  )
}
