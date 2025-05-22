import { Link, usePage } from '@inertiajs/react';
import React from 'react'

export default function Header() {
  const { auth} = usePage().props;
  return (
    <div className='w-full'>
        <div className='w-[98%] md:w-10/12 lg:w-9/12 xl:w-[1024px] mx-auto flex flex-row'>
            <div className='ms-0 me-auto'>
                <Link className="inline-block px-5 py-1.5 text-lg leading-normal text-white dark:text-[#EDEDEC] hover:text-blue-100 " href="/">Home</Link>
            </div>
            <div className='ms-auto me-0'>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                    >
                        Dashboard
                    </Link>
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
