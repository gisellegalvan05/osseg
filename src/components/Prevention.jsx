import React, { useRef, useState, useEffect } from "react";
import { getPrevTopRequest } from '../controllers/novedadesApi';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Scroll from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Prevention() {

  const imgRef = useRef(null);
  const block = useRef(null);
  const Element = Scroll.Element;

  // useEffect(() => {
  //   const el = imgRef.current;
  //   const bl1 = block.current;

  //   // IMAGEN
  //   gsap.fromTo(
  //     el,
  //     { y: 200 , opacity:0},
  //     { y: 0, opacity: 1, duration:3,
  //       scrollTrigger: {
  //         trigger: el,
  //       },
  //     }
  //   );
    
  //   // BLOCK 1
  //   gsap.fromTo(
  //     bl1,
  //     { y: 100 , opacity:0},
  //     { y: 0, opacity: 1, duration:2, delay: 1,
  //       scrollTrigger: {
  //         trigger: el,
  //       },
  //     }
  //   );

  // }, []);

  const [prev, setPrev] = useState([])

  useEffect( ()=>{
   async function loadPrevention(){
    const response = await  getPrevTopRequest()
    setPrev(response.data)
    }
    loadPrevention()
  },[]);

   return (
    <Element name = "prev">
    <div className="bg-soft lg:py-10 sm:py-32 xs:pt-0 xs:pb-16 relative flex">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl xs:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary2 sm:text-4xl">
            Programas Preventivos
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-100r overflow-hidden">
        <div className="mb-4 pl-8">
              <a href="/prevencion" className=""
                ><span
                  className="hover:text-primary1 text-primary2 font-medium text-base"
                  >Ver más Programas preventivos →
                </span>
                </a>
          </div>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div ref={imgRef} id="columnA">
              <div className="relative pl-8">
                <dt >
                  <img
                    className="imgRef mx-auto h-35r w-30r object-cover rounded-2xl shadow-xl"
                    src="/img/main2.jpg"
                    alt=""
                  />
                </dt>
              </div>
            </div>
          
            <div ref={block} id="columnB">
            {
              prev.map( programa =>(
                <a key={programa.NONovID} href={'/prevencion/'+programa.NONovID}>
                <div className="flex relative mt-3 mb-16 bg-white pl-3 pr-6 py-6 rounded-xl drop-shadow-xl hover:-translate-y-3 duration-200">                  
                    <div className=" w-1/5 my-auto mt-auto flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#009A96"
                        className="w-20 h-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className=" w-4/5">
                      <dt className="text-xl font-bold leading-7 text-gray-900">
                      {programa.NONovDescripcion}
                      </dt>
                      <dd className="line-clamp-2 mt-2 text-base leading-7 text-gray-600">
                      {programa.NONovTexto}
                      </dd>
                    </div>
                  </div>
                  </a>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default Prevention;
