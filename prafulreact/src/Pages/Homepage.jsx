import React, { useState, useRef } from "react";
// import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  EffectFade,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import TabComponent from '../Components/TabComponent';
import SelectComponent from '../Components/SelectComponent';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import '../Homepage.css'
import ImgTabComp from "../Components/ImgTabComp";
import ImgSelComp from "../Components/ImgSelComp";

SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

const Homepage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  
  // const [key, setKey] = useState("tab1");

  const [selectedTab, setSelectedTab] = useState('Trending');

  const handleTabChange = (tabKey) => {
    setSelectedTab(tabKey);
  };

  const [selectediMGTab, setSelectediMGTab] = useState('All');

  const handleiMGTabChange = (tabKey) => {
    setSelectediMGTab(tabKey);
  };

  


  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div>
      <>
        <Swiper
          loop={true}
          spaceBetween={10}
          effect={"fade"}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectFade, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Ericsson-and-Huawei-renew-global-patent-license-agreement.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>

              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Samsung-funds-Irreverent-Labs-a-startup-that-creates-AI-videos.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Hugging-Face-an-open-source-AI-startup-receives-USD-235M-in-funding-from-tech-giants.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/03/SolarWinds-Observability-Now-Available-in-Microsoft-Azure-Marketplace-Empowering-More-Customers-to-Manage-Complex-IT-Environments-and-Accelerate-Digital-Transformation.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Weekday-secures-2.2m-funding-as-it-tackles-1.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Ericsson-and-Huawei-renew-global-patent-license-agreement.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>

              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Samsung-funds-Irreverent-Labs-a-startup-that-creates-AI-videos.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Hugging-Face-an-open-source-AI-startup-receives-USD-235M-in-funding-from-tech-giants.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/03/SolarWinds-Observability-Now-Available-in-Microsoft-Azure-Marketplace-Empowering-More-Customers-to-Manage-Complex-IT-Environments-and-Accelerate-Digital-Transformation.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Banner"
              className="bannerImg"
              src="https://enterprisetalk.com/wp-content/uploads/2023/08/Weekday-secures-2.2m-funding-as-it-tackles-1.jpg"
            />
            <div className="bannerText">
              <h1 className="bannerH1">
                Ericsson and Huawei renew global patent license agreement
              </h1>
              <br />
              <p>
                Ericsson and Huawei have renewed a multi-year global patent
                cross-licensing agreement that covers patents essential to
                standards relevant to the pr...
              </p>
              <div className="navBtn">
                <button
                  ref={navigationPrevRef}
                  className="nextBTN chevron-left-button"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  ref={navigationNextRef}
                  className="nextBTN chevron-right-button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          freeMode={true}
          // navigation={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1199: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Ericsson-and-Huawei-renew-global-patent-license-agreement.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Samsung-funds-Irreverent-Labs-a-startup-that-creates-AI-videos.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Hugging-Face-an-open-source-AI-startup-receives-USD-235M-in-funding-from-tech-giants.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/03/SolarWinds-Observability-Now-Available-in-Microsoft-Azure-Marketplace-Empowering-More-Customers-to-Manage-Complex-IT-Environments-and-Accelerate-Digital-Transformation.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Weekday-secures-2.2m-funding-as-it-tackles-1.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Ericsson-and-Huawei-renew-global-patent-license-agreement.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Samsung-funds-Irreverent-Labs-a-startup-that-creates-AI-videos.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Hugging-Face-an-open-source-AI-startup-receives-USD-235M-in-funding-from-tech-giants.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/03/SolarWinds-Observability-Now-Available-in-Microsoft-Azure-Marketplace-Empowering-More-Customers-to-Manage-Complex-IT-Environments-and-Accelerate-Digital-Transformation.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="" id="grade">
                <div class="card-body  d-flex align-items-center fdc">
                  <div>
                    <img
                      class="sliderImg"
                      src="https://enterprisetalk.com/wp-content/uploads/2023/08/Weekday-secures-2.2m-funding-as-it-tackles-1.jpg"
                      alt="Banner"
                    />
                  </div>
                  <div class="col ps-3 sliderInfo ht">
                    <div className="sliderInfoText">
                      <h6 class="m-0 mb-1 mttt">
                        Switching to the Future: Advancements in DC
                      </h6>
                      <span class="">
                        <p>Aug 2023</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </>

      <div className="marBoth1">
       

         

   <div className="App-content">
        
        <div className="mobile-view d-block d-sm-none">
          <SelectComponent selectedTab={selectedTab} onTabChange={handleTabChange} />
        </div>
        <div className="desktop-view ">
          <TabComponent activeKey={selectedTab} onTabChange={handleTabChange} />
        </div>
        
      </div>





      

          
      
        
      </div>













      <div className="App-content">
        
        <div className="mobile-view d-block d-sm-none">
          <ImgSelComp selectediMGTab={selectediMGTab} onTabChange={handleiMGTabChange} />
        </div>
        <div className="desktop-view tabsMargin">
          <ImgTabComp activeKey={selectediMGTab} onTabChange={handleiMGTabChange} />
        </div>
        
      </div>





        <div>



        <div class="parent1">
<div class="div11" style={{border:'1px solid red'}}> asa</div>
<div class="div22" style={{border:'1px solid red'}}> asas</div>
<div class="div33" style={{border:'1px solid red'}}>assa </div>
<div class="div44" style={{border:'1px solid red'}}>asas </div>
<div class="div55" style={{border:'1px solid red'}}>assa </div>
</div>


        </div>

      
    </div>

    
  );
};

export default Homepage;
