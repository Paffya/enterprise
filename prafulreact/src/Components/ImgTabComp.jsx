import React, {useState, useRef} from 'react';
import { Tabs, Tab, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ImgTabComp({ activeKey, onTabChange }) {

  const [ setThumbsSwiper] = useState(null);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <Tabs activeKey={activeKey} onSelect={onTabChange}  className='marbot3'>
      <Tab eventKey="Latest" title={<span className="d-none d-sm-block h2 fw-bold">THOUGHT LEADERSHIP</span>}  className="d-none d-sm-block" disabled>
       
      </Tab>
      <Tab className='backC' eventKey="All" title={<span className="d-none d-sm-block">All</span>}>
      <div className="LatestViwAll1 responsive1">View All</div>
      
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>





          </div>
        </Swiper>

        <div className="LatestViwAll1 responsive2">View All</div>
      </Tab>



      <Tab className='backC' eventKey="Interview" title={<span className="d-none d-sm-block">INTERVIEW</span>} >
      <div className="LatestViwAll1 px-3">View All</div>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>





          </div>
        </Swiper>

        <div className="LatestViwAll1 responsive2">View All</div>
      </Tab>




      <Tab className='backC' eventKey="Podcasts" title={<span className="d-none d-sm-block">PODCASTS</span>}>
      <div className="LatestViwAll1 px-3">View All</div>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>





          </div>
        </Swiper>

        <div className="LatestViwAll1 responsive2">View All</div>
      </Tab>




      <Tab className='backC' eventKey="Videos" title={<span className="d-none d-sm-block">VIDEOS</span>}>
      <div className="LatestViwAll1 px-3">View All</div>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>





          </div>
        </Swiper>

        <div className="LatestViwAll1 responsive2">View All</div>
      </Tab>



      <Tab className='backC' eventKey="Guest" title={<span className="d-none d-sm-block">GUEST AUTHOR</span>}>
      <div className="LatestViwAll1 px-3">View All</div>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <div className="mobSlider">
            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/07/IT-leaders-need-new-solutions-to-manage-the-complexity-of-hybrid-environments.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/11/Murat-Yanar-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Best-Digital-Transformation-Approach-A-Leadership-View.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/04/Safi-Raza-Senior-Director-of-Cybersecurity-at-Fusion-Risk-Management-2.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2022/08/Benjamin-Dorr-2.png" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Advantages-and-Challenges-of-SME-Lending-Technology.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>



            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/Upping-Your-Game-Leadership-in-the-Age-of-Artificial-Intelligence.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'fill'}} src="https://enterprisetalk.com/wp-content/uploads/2023/08/How-Cloud-Computing-Can-Help-Enterprises-Save-Money.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title>Wondershare EdrawMax Reveals Version 12.5.0</Card.Title>
        <Card.Text>
          9 Mins
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>





          </div>
        </Swiper>

        <div className="LatestViwAll1 responsive2">View All</div>
      </Tab>
      
    </Tabs>
  );
}

export default ImgTabComp;