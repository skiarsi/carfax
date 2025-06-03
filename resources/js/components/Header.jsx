import { Link, usePage } from '@inertiajs/react';
import React from 'react'
import UserDropDownMenu from './ViewComponents/UserDropDownMenu';

export default function Header({customclass = ""}) {
  const page = usePage()
  const pageUrl = page.component;
  const user = usePage().props.auth.user;
  const dealer = usePage().props.auth.isDealer;
  
  
  return (
    <div className='w-full'>
        <div className={`w-[98%] md:w-10/12 lg:w-9/12 mx-auto flex flex-row ${customclass ? customclass : 'xl:w-[1250px]'}`}>
            <div className='ms-0 me-auto'>
              <Link
                className={`
                            inline-block px-5 py-1.5 text-lg leading-normal
                            ${pageUrl === 'dashboard' ? 'text-black hover:text-gray-600' : 'text-white hover:text-blue-100'}
                          `}
                href="/">Home</Link>
            </div>
            <div className='ms-auto me-0'>
                {user ? (
                  <UserDropDownMenu />
                ) : (
                  <>
                    <Link
                      href={route('login')}
                      className="inline-block px-5 py-1.5 text-lg leading-normal text-white dark:text-[#EDEDEC] hover:text-blue-100"
                    >
                      Log in
                    </Link>
                    <Link
                      href={route('register')}
                      className="inline-block px-5 py-1.5 text-lg leading-normal text-white dark:text-[#EDEDEC] hover:text-blue-100 "
                    >
                      Register
                    </Link>
                  </>
                )}
            </div>
        </div>
    </div>
  )
}
