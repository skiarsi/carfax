import { Head, Link, usePage } from '@inertiajs/react';
import Header from '../components/Header';
import SideMenu from '../components/ViewComponents/dashboardView/SideMenu';

export default function Dashboard() {
    const pageProps = usePage().props;
    const dealer = pageProps.dealer;
    
    return (
        <>
          <Head title="Dashboard"></Head>
          <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
            <div className="bg-gray-100">
              <Header />
            </div>
            <div className="flex-1 bg-white flex flex-row pb-5 min-h-screen">
              <div className="w-[300px] p-3">
                <div className=' bg-gray-100 dark:bg-[#1a1a1a] h-full rounded-lg shadow-md'>
                  <SideMenu dealer={dealer} />
                </div>
              </div>
              <div className="flex-1 p-5">
                <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
                <p className="text-gray-600">Here you can manage your cars, view messages, and update your settings.</p>
                {/* Add more dashboard content here */}
                <div className='w-full mt-5 flex flex-row gap-5'>
                  <div className='bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-5 flex-1'>
                    <p className='text-lg font-bold text-gray-700'>Messages</p>
                    <p className='text-sm text-gray-500'>View and manage messages from users.</p>
                    {/* Placeholder for messages component */}
                  </div>
                  <div className='bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-5 flex-1'>
                    <p className='text-lg font-bold text-gray-700'>Your Cars</p>
                    <p className='text-sm text-gray-500'>Manage your car listings and view statistics.</p>
                    {/* Placeholder for car management component */}
                  </div>
                  <div className='bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-5 flex-1'>
                    <p className='text-lg font-bold text-gray-700'>Your Cars</p>
                    <p className='text-sm text-gray-500'>Manage your car listings and view statistics.</p>
                    {/* Placeholder for car management component */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
