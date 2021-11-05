/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Slide() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/europa/europa-capa.jpg" alt="europa" />
          <div className="infoSlide">
            <h1>Europa</h1>
            <p>O continente mais antigo</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/america_sul/america-sul-capa.jpg"
            alt="america do sul"
          />
           <div className="infoSlide">
            <h1>America do Sul</h1>
            <p>Rica em recursos naturais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/africa/africa-capa.jpg" alt="africa" />
          <div className="infoSlide">
            <h1>África</h1>
            <p>Conhecida pela sua pluralidade étnica e cultural</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/oceania/oceania-capa.jpg" alt="oceania" />
          <div className="infoSlide">
            <h1>Oceania</h1>
            <p>São mais de 10 mil ilhas e 14 países</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            styles="width: 100%; "
            src="/images/america_norte/america-norte-capa.jpg"
            alt="america do norte"
          />
          <div className="infoSlide">
            <h1>America do Norte</h1>
            <p>Do frio do Canadá ao calor do México</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/asia/asia-capa.jpg" alt="asia" />
          <div className="infoSlide">
            <h1>Asia</h1>
            <p>O berço das mais antigas civilizações</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
