import { Link } from "react-router-dom";

export default function Sidebar(params) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#548999] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ml-3.5 md:mr-28">
                <img src="https://res.cloudinary.com/dslzpyibe/image/upload/v1677854070/logo-ISSA_fine2_qoujtt.png" className="w-11 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-raleway italic font-bold sm:text-2xl whitespace-nowrap dark:text-white text-[white] ">I S S A</span>
              </a>
            </div>
            <div className="flex items-center ">
              <div className="flex items-center ml-3 ">
                <div className="flex justify-between">
                  <span className="self-center text-xl font-raleway italic font-bold  sm:text-xs whitespace-nowrap dark:text-white text-[white] mr-3">Hi, Admin!</span>
                  <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.P4_ruVl80z1A4CuuLFrDvgAAAA&pid=Api&rs=1&c=1&qlt=95&w=90&h=124" alt="user photo" />
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 shadow-[#626262] dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-grey dark:bg-gray-800">
          <ul className="space-y-2">
            <Link to="/">
              <li className="active:bg-gray-400">
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 active:bg-gray-400 focus:bg-gray-400 focus:text-white">
                  <span class="material-symbols-outlined opacity-70">dashboard</span>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
            </Link>
            <li className="active:bg-gray-400">
              <Link to="/addClass">
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 active:bg-gray-400 focus:bg-gray-400 focus:text-white">
                  <span class="material-symbols-outlined opacity-70">library_add</span>
                  <span className="flex-1 ml-3 whitespace-nowrap">Add Class</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/addSchedule">
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 active:bg-gray-400 focus:bg-gray-400 focus:text-white">
                  <span class="material-symbols-outlined opacity-70">note_add</span>
                  <span className="flex-1 ml-3 whitespace-nowrap">Add Schedule</span>
                </a>
              </Link>
            </li>
            {/* <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li> */}
            <li>
              <Link to="/newAdmin">
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 active:bg-gray-400 focus:bg-gray-400 focus:text-white">
                  <span class="material-symbols-outlined opacity-70">person_add</span>
                  <span className="flex-1 ml-3 whitespace-nowrap ">Add New Teachers</span>
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 active:bg-gray-400 focus:bg-gray-400 focus:text-white">
                <span class="material-symbols-outlined opacity-70">logout</span>
                <span className="flex-1 ml-3 whitespace-nowrap">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
