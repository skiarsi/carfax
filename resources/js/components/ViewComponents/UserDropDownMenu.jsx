import { usePage,Link } from '@inertiajs/react';


export default function UserDropDownMenu() {

  const page = usePage()
  const pageUrl = page.component;
  const user = usePage().props.auth.user;
  const dealer = usePage().props.auth.isDealer;
    
  
  return (
    <div
      className={`dropdown dropdown-end ${pageUrl === 'dashboard' ? 'text-black' : 'text-white'}`}>
      <div tabIndex={0} role="button" className="m-1">
        <div className='flex flex-row-reverse items-center gap-2 cursor-pointer select-none'>
          <div className={`w-8 h-8 rounded-xl overflow-hidden ${pageUrl === 'dashboard' ? 'bg-gray-500' : 'bg-gray-200'}`}>
            &nbsp;
          </div>
          <span className='text-lg '>
            {user.name}
          </span>
        </div>
      </div>
      <ul tabIndex={0} className={`dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm`}>
        {dealer && (
          <li>
            {
              pageUrl !== 'dashboard' && (
                <Link href={route('dashboard')} className="w-full text-left">
                  Dashboard
                </Link>
              )
            }
          </li>
      )}
        <li className='hover:bg-red-400 hover:text-white'>
          <Link className="w-full text-left" href="/logout" method='post'>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}
