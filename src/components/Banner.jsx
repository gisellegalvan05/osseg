import { initFlowbite } from 'flowbite'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Banner() {
    SwiperCore.use([Autoplay]);
  return (
    <>
    <div className="relative h-30r overflow-hidden">
<Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
      <SwiperSlide>
      <div>
            <img src="/img/Slide1.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div>
            <img src="/img/Slide2.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img src="/img/Slide3.png" className="absolute block w-full xs:h-full xs:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <p className="lg:text-5xl sm: text-2xl z-50 absolute top-48 xs:right-14 md:right-48 text-white xs:w-1/2 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default Banner