// import { dropdo } from "flowbite"
import { Collapse } from "flowbite"
import { Carousel } from "flowbite"

import { Navbar, Dropdown } from "flowbite-react"


export default function Name() { 
  // set the target element that will be collapsed or expanded (eg. navbar menu)
  const $targetEl = document.getElementById('user-dropdown');
  // optionally set a trigger element (eg. a button, hamburger icon)
  const $triggerEl = document.getElementById('user-menu-button');
  const collapse = new Collapse($targetEl, $triggerEl);

  return (
    <>
      {/* <div className="max-w-screen-xl font-satu mx-auto box-border border-4 border-black grid grid-flow-col ">

        <div className="border border-black flex justify-center items-center " >
          <Avatar imgUrl="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg" />
        </div>

        <div className="border border-black flex flex-col justify-center  " >
          <p className="text-lg">Lorem ipsum dolor sit amet</p>
          <p className="text-sm">7493645643573947975345</p>
          <p className="text-sm">Online</p>
        </div>

      </div> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex  justify-center items-center">
            <Avatar imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKLXSarFSMsiSY7umUqr9wKJ_Tpx_h_zOTv_yn1JxwogDfI6JL9Rw_B5yGUjuiVY6G_Q&usqp=CAU" />
          </div>

          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Michael Ustynovych - Repa </h1>
            <p class="max-w-2xl mb-1 font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">3247923749823742472398</p>
            {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Active </p> */}
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </a>
          </div>
        </div>
      </section>


      {/* chat popup */}
      {/* <div id="toast-notification" class="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
        <div class="flex items-center mb-3">
          <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
          <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="flex items-center">
          <div class="relative inline-block shrink-0">
            <img class="w-12 h-12 rounded-full" src="https://i.servimg.com/u/f42/19/69/61/77/201918.jpg" alt="Jese Leos image" />
            <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
              <svg aria-hidden="true" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Message icon</span>
            </span>
          </div>
          <div class="ml-3 text-sm font-normal">
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
            <div class="text-sm font-normal">commmented on your photo</div>
            <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
          </div>
        </div>
      </div> */}


      <div id="toast-notification" class="w-full max-w-xs p-4 m-3 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">

        <div class="flex items-center">
          <div class="relative inline-block shrink-0">
            <img class="w-12 h-12 rounded-full" src="https://i.servimg.com/u/f42/19/69/61/77/201918.jpg" alt="Jese Leos image" />
            <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
              <svg aria-hidden="true" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Message icon</span>
            </span>
          </div>
          <div class="ml-3 text-sm font-normal">
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
            <div class="text-sm font-normal">I just wanna make it</div>
            <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
          </div>
        </div>
      </div>


      {/* carosel */}






      {/* <div id="default-carousel" class="relative" data-carousel="slide">
        
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hid
          den duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/https://i.servimg.com/u/f42/19/69/61/77/haut23.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
         
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.servimg.com/u/f42/19/69/61/77/haut23.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
       
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.servimg.com/u/f43/16/53/17/83/bas30.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
        </div>
       
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
     
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div> */}



      {/* list */}
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a href="#" aria-current="true" class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
          Today
        </a>
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">IPA</li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">PENJASKES</li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">MTK</li>
      </ul>





    </>
  )
}








function Avatar(props) {
  const { imgUrl } = props
  return (
    <div class="relative">
      <img class="w-10 h-10 rounded-full" src={imgUrl} alt="" />
      <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  )
}






















{/* <div className=" max-w-screen-xl mx-auto box-border border-4 border-black grid ">
<img className='row-start-1 col-start-1' src='https://images.hugoboss.com/is/image/hugobossdm/230213_B_MW_Suit_1920x880?%24large%24&fmt=webp&align=0,-1&fit=crop,1&ts=1676394980832&qlt=80&wid=1440&hei=660 ' />

<div className='text-white row-start-1  border-white col-start-1 grid items-center justify-end pr-[12%] '>
  <div className=" reveal_top font-raleway font-bold text-right leading-[1em]  text-7xl tracking-widest">BE BOLD<br /> BE BEAUTIFUL <br /> BE MACLO <br />
    <div className=" reveal_bottom text-sm mt-5 ">
     
    </div>
  </div>
</div>
</div> */}