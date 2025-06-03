import React from 'react'
import Header from '@/components/Header';
import { Head, Link, router, usePage, useForm } from '@inertiajs/react';
import { AtSign, KeyRound } from 'lucide-react';

export default function login() {
  const props = usePage().props

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function handleLogin(e){
    e.preventDefault();
    post(route('login'));
  }

  return (
    <>
        <Head title={`Login`}></Head>
        <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
            <div className="h-[40px] bg-blue-500">
                <Header showloginlinks={false} />
            </div>
            <div className='w-full bg-gray-100  min-h-screen flex justify-center items-center'>
              <div className="flex justify-center items-center pb-5 w-11/12 md:w-11/12 lg:w-10/12 xl:w-[1250px] mx-auto pt-3">
                <div className='bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-8 w-full max-w-md'>
                  <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
                        Email
                      </label>
                      <div className="relative flex flex-col">
                        <div className='relative'>
                          <input
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Type your username"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-500 px-4 py-2 pl-10" />
                          <span className="absolute left-0 top-2.5 text-gray-400">
                            <AtSign color='#ddd' size={22} />
                          </span>
                        </div>
                        {errors.email && <p className='text-red-500 text-sm mb-2'> {errors.email}</p> }
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password
                      </label>
                      <div className="relative flex flex-col">
                        <div className="relative">
                          <input
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Type your password"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-500 px-4 py-2 pl-10" />
                          <span className="absolute left-0 top-2.5 text-gray-400">
                            <KeyRound color='#ddd' size={22} />
                          </span>
                        </div>
                        {errors.password && <p className='text-red-500 text-sm mb-2'> {errors.password}</p> }
                      </div>
                      <div className="text-right mt-2">
                        {/* <a href="#" className="text-sm text-gray-500 hover:text-purple-500">Forgot password?</a> */}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="remember"
                          checked={data.remember}
                          onChange={e => setData('remember', e.target.checked)}
                          className="form-checkbox h-4 w-4 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-700">Remember me</span>
                      </label>
                    </div>

                    <button
                      disabled={processing}
                      className={`w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white py-2 rounded-full mt-6 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed`}>
                        LOGIN
                    </button>
                  </form>
                    {/* Google Button */}
                    <div className="flex justify-center my-6">
                      <button className="bg-white border border-gray-300 rounded-full w-full p-3 shadow hover:shadow-md transition flex items-center justify-center gap-2">
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          className="h-6 w-6"
                          alt="Google"
                        />
                        <span className="text-gray-700 font-medium">Login with Google</span>
                      </button>
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      <p>
                        Don't have an account?&nbsp;    
                        <Link href="/register" className="text-purple-600 font-semibold">
                          SIGN UP
                        </Link>
                      </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
