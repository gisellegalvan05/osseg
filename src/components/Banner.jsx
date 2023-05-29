import { useRef, useEffect } from "react";
import { initFlowbite } from 'flowbite'


function Banner() {

  return (
    <>

<div id="controls-carousel" className="relative w-full" data-carousel="slide">  
    <div className="relative h-30r overflow-hidden">
        <div className="hidden duration-1000 ease-in-out" data-carousel-item="active">
            <img src="/img/Slide1.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src="/img/Slide2.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src="/img/Slide3.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
    </>
  )
}

export default Banner