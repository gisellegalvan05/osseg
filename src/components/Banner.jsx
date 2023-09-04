import { initFlowbite } from 'flowbite'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Banner() {
    SwiperCore.use([Autoplay]);
  return (
    <>
    <div className="relative h-30r overflow-hidden">
<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      navigation
    >
        
      <SwiperSlide>
      <div>
            <img src="/img/Slide1.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="font-montserrat font-medium lg:text-4xl sm: text-xl z-50 absolute top-36 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">OSSEG , al servicio de sus Afiliados en todo el Territorio Nacional.</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div>
            <img src="/img/Slide2.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="font-montserrat font-medium lg:text-4xl sm: text-xl z-50 absolute top-40 xs:left-14 md:left-48 text-white xs:w-1/2 md:w-1/3">Realice sus trámites desde la comodidad de su Hogar.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img src="/img/Slide3.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="font-montserrat font-medium lg:text-4xl sm: text-xl z-50 absolute top-40 xs:left-14 md:left-48 text-white xs:w-1/2 md:w-1/3">Descargue la App y lleve su credencial y la de su grupo familiar en el celular.</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default Banner