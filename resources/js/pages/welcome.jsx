import Header from '@/components/Header';
import IndexFilter from '@/components/IndexFilter';
import { Head, Link, usePage } from '@inertiajs/react';
import MostViews from '../components/MostViews';
import Typecategory from '../components/Typecategory';
import Pricecategoury from '../components/Pricecategoury';



export default function Welcome() {
    const { auth } = usePage().props;

    


    return (
        <>
            <Head title="Welcome"></Head>
            <div className="flex flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
              <div className="min-h-[40px] md:h-[200px] bg-blue-500">
                <Header showloginlinks={true} customclass={`xl:w-[1024px]`} />
              </div>
              <div className="flex-1 bg-blue-100 flex flex-col  pb-5">
                <IndexFilter />

                <div className=' mt-20 overflow-hidden'>
                  <MostViews />
                </div>

                <div className=' mt-20 overflow-hidden'>
                  <Typecategory />
                </div>

                <div className=' mt-20 overflow-hidden'>
                  <Pricecategoury />
                </div>

              </div>
            </div>
        </>
    );
}
