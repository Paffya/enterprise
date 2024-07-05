import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: 1,
    imgUrl:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2023/12/Maxime-Vermeir.webp?width=500",
    name: "Maxime Vermier",
    position: "Senior Director of AI Strategy",
    dataByte:
      "Actian Launches Zen 16.0, the Newest Version Actian Launches Zen 16.0, the Newest Version",
    etData: "ET Bureau",
    desc: "Cognite launches Cognite Atlas AI&trade;, a set of utilities",
  },
  {
    id: 2,
    imgUrl:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/01/The-Domino-Effect-Why-Relying-on-Quick-Tech-Fixes-Can-Lead-to-Long-Term-Business-Challenges.webp?width=500",
    name: "Meloni Vermier",
    position: "Prime mininster of Italy",
    dataByte:
      "Actian Launches Zen 16.0, the Newest Version Actian Launches Zen 16.0, the Newest Version",
    etData: "ET Bureau",
    desc: "Cognite launches Cognite Atlas AI&trade;, a set of utilities",
  },
  {
    id: 3,
    imgUrl:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2023/11/How-HCM-Solutions-Transform-Conventional-HR-Functions.webp?width=500",
    name: "Jersey data",
    position: "Senior Director of AI Strategy",
    dataByte:
      "Actian Launches Zen 16.0, the Newest Version Actian Launches Zen 16.0, the Newest Version",
    etData: "ET Bureau",
    desc: "Cognite launches Cognite Atlas AI&trade;, a set of utilities",
  },
  {
    id: 4,
    imgUrl:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2023/10/Navigating-the-Complex-World-of-Data-and-Technology.webp?width=500",
    name: "Maxime Vermier",
    position: "Senior Director of AI Strategy",
    dataByte:
      "Actian Launches Zen 16.0, the Newest Version Actian Launches Zen 16.0, the Newest Version",
    etData: "ET Bureau",
    desc: "Cognite launches Cognite Atlas AI&trade;, a set of utilities",
  },
  {
    id: 5,
    imgUrl:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2023/12/Maxime-Vermeir.webp?width=500",
    name: "Maxime Vermier",
    position: "Senior Director of AI Strategy",
    dataByte:
      "Actian Launches Zen 16.0, the Newest Version Actian Launches Zen 16.0, the Newest Version",
    etData: "ET Bureau",
    desc: "Cognite launches Cognite Atlas AI&trade;, a set of utilities",
  },
];

export function GuestComp() {
  // eslint-disable-next-line
  const [swiper, setSwiper] = useState(null);

  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();

  return (
    <div>
      <h3 className="fw-bold py-1 h4 text-center container mt-5 container-max borderB">
        Guest Author
      </h3>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-12 swiperBox">
            <Swiper
              onSwiper={setSwiper}
              loop={true}
              className="mb-4"
              spaceBetween={10}
              slidesPerView={1}
              slidesPerGroup={1}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 10 },
                1199: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              <Swiper spaceBetween={50} slidesPerView={3}>
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="card">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        loading="lazy"
                        width="100"
                        height="45"
                        style={{ width: "100%", height:"auto" }}
                      />
                      <div className="card-body" style={{height:"157px"}}>
                        <h3 className="card-title h5  fw-bold hoverHead" >{item.name}</h3>
                        <p className="card-text ">
                          <strong> By {item.etData} | June 2024</strong>
                        </p>
                        <p className="card-text mt-2">{item.dataByte}</p>
                       
                        
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}