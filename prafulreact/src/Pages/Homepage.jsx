import React, {useState, useRef, useEffect} from 'react'
import "../Styles/Homepage.css"
import { Tab, Tabs, TabContent, Card } from 'react-bootstrap';
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
import axios from "axios"
import { Link } from "react-router-dom";



const Homepage = () => {


  const options = {
   
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const limit = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/post/homepost');
        setData(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const [activeKey, setActiveKey] = useState('tab1');

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };



  const [ setThumbsSwiper] = useState(null);

  const navigationPrevRef = useRef();
const navigationNextRef = useRef();
  return (

  
    <div style={{overflow:"hidden"}}>  
    
    <div className='mt-3'>
      

    <div className="container container-max" style={{}}>
      <div className="row">
      <h5 className='fw-bold borderB py-1 '>Latest</h5>
        <div className="col-md-8 borderR"> {/* 70% width on medium screens and larger */}
        <div>
        <div>
       
      {loading ? (
        <p></p>
        
      ) : ( 
        <div>
          <img className='homeImg' src={data.latestNews[0].banner_img} alt="home_img" />

          <div className='paddings'>
           <a href={`/topic/${data.latestNews[0].id}`}> <h1 className='fw-bold  h2 hoverHead'>{data.latestNews[0].post_title}</h1></a>
            <p style={{ fontSize: '14px' }}>
              By <span className='fw-bold'>{data.latestNews[0].post_author}</span> | {new Date(data.latestNews[0].post_date).toLocaleDateString(undefined, options)}
            </p>

            <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
              {data.latestNews[0].post_content}
            </p>
          </div>

          <p className='hr' />
        </div>
      )}
    </div>


          <div className='flexAddver mt-3 ' style={{gap:"11px"}}>

          {loading ? (
        <p></p>
        
      ) : (
            <div  className='addvert zoom-in' >
            <div>
              <img className='' style={{width:"100%", borderRadius:"20px", height:"250px", objectFit:"cover"}} src={data.latestNews[1].banner_img} alt="home_img" />
            </div>
            <div className='padLR'>
           <a href={`/topic/${data.latestNews[1].id}`}> <h4 className='fw-bold h5 mt-3 hoverHead'>{data.latestNews[1].post_title}</h4></a>
            <p style={{ fontSize: "13px" }}>
            By <span className='fw-bold'>{data.latestNews[1].post_author}</span> | {new Date(data.latestNews[1].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{data.latestNews[1].post_content}</p>
          </div>
            </div>
            )}
           
            <div className='borderR'></div>

            {loading ? (
        <p></p>
        
      ) : (
            <div  className='addvert zoom-in'>
            <div>
              <img  style={{width:"100%" , borderRadius:"20px", height:"250px", objectFit:"cover"}} src={data.latestNews[2].banner_img} alt="home_img" />
            </div>
            <div className='padLR'>
            <a href={`/topic/${data.latestNews[2].id}`}><h4 className='fw-bold h5 mt-3 hoverHead'>{data.latestNews[2].post_title}</h4></a>
            <p style={{ fontSize: "13px" }}>
            By <span className='fw-bold'>{data.latestNews[2].post_author}</span> | {new Date(data.latestNews[2].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{data.latestNews[2].post_content}</p>
          </div>
            </div>
 )}


          </div>

     </div>
          


          
        </div>
        <div className="col-md-4"> {/* 30% width on medium screens and larger */}
          <div >
            {/* Content for the 30% column */}

            <div>
            <Tabs activeKey={activeKey} onSelect={handleTabSelect} id="tabs-example" className='tabBtn nav-link1' style={{color:"black !important"}}>

      <Tab eventKey="tab1" title="Latest" className='text-black'>
        <TabContent className='marTop'>
        <div>
      {loading ? (
        <p></p>
      ) : (
        <div>
          {data.latest.map((post, index) => (
            <div key={index}>
              <div className='paddings'>
                <Link to={`/topic/${post.id}`}><h4 className='fw-bold h5 hoverHead'>{post.post_title}</h4></Link>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                </p>
                <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                  {post.post_content}
                </p>
              </div>
              <p className='hr' />
            </div>
          ))}
        </div>
      )}
    </div>
        </TabContent>
      </Tab>

      <Tab eventKey="tab2" title="Popular" className='text-black'>
        <TabContent className='marTop'>
        <div>
      {loading ? (
        <p></p>
      ) : (
        <div>
          {data.popular.map((post, index) => (
            <div key={index}>
              <div className='paddings'>
                <Link to={`/topic/${post.id}`}><h4 className='fw-bold h5 hoverHead'>{post.post_title}</h4></Link>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                </p>
                <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                  {post.post_content}
                </p>
              </div>
              <p className='hr' />
            </div>
          ))}
        </div>
      )}
    </div>
        </TabContent>
      </Tab>

    </Tabs>

      
    </div>

    <div className='marTop ' style={{ backgroundColor: '#e0e0e0', height: '400px' }}>
            {/* Content for the 30% column */}
            <p className=' bllack'>340*400</p>

          </div>
            
          </div>
        </div>
      </div>
    </div>





    </div>



    <h5  className='fw-bold  py-1 h4 container mt-5 container-max borderB' style={{marginBottom:"-40px", textAlign:"center"}}>Guest Author</h5>
    <div className="container-fluid" style={{padding:"0px"}}>
      <div className="row mt-5">
        <div className="col-md-12" > {/* 70% width on medium screens and larger */}


        <div className='swiperBox'>
        
        <Swiper
          
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
        
        <div>
      {loading ? (
        <p></p>
      ) : (
        <Swiper spaceBetween={50} slidesPerView={3}>
          {/* Latest News from API */}
          {data.interview.map((interview, index) => (
            <SwiperSlide key={index} style={{}}>
              <Card style={{}}>
                <Card.Img style={{ objectFit: 'cover' }} src={interview.banner_img} alt={interview.imageAlt} />
                <Card className='p-md-3'>
                <a href={`/Topic/${interview.id}`} className='text-black hoverHead'> <Card.Title className='fw-bold line-clamp'>{interview.post_title}</Card.Title> </a>
                  <Card.Title>{interview.post_author}</Card.Title>
                  <Card.Text className='fw-bold line-clamp1'>{interview.post_name}</Card.Text>
                  <Card.Text className='mt-2 just-text line-clamp'>{interview.post_content}</Card.Text>
                </Card>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>



            {/* <SwiperSlide style={{}}>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'cover'}} src="https://kgv.ae/wp-content/uploads/2023/03/01-Kenny-Waribam-XDBS.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title className='fw-bold'>Wondershare EdrawMax</Card.Title>
        <Card.Title>CEO | BOEAT</Card.Title>
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2 just-text line-clamp'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide style={{}}>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'cover'}} src="https://kgv.ae/wp-content/uploads/2023/03/05-Samarth-Bhargava-Kings-Research.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title className='fw-bold'>Wondershare EdrawMax</Card.Title>
        <Card.Title>CEO | BOEAT</Card.Title>
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2 just-text line-clamp'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>


            <SwiperSlide style={{}}>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'cover'}} src="https://kgv.ae/wp-content/uploads/2023/04/10-Kelvin-Cheung-Juns.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title className='fw-bold'>Wondershare EdrawMax</Card.Title>
        <Card.Title>CEO | BOEAT</Card.Title>
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2 just-text line-clamp'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>

            <SwiperSlide style={{}}>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'cover'}} src="https://kgv.ae/wp-content/uploads/2023/03/04-Kunal-Jain.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title className='fw-bold'>Wondershare EdrawMax</Card.Title>
        <Card.Title>CEO | BOEAT</Card.Title>
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2 just-text line-clamp'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide>

            <SwiperSlide style={{}}>
            <Card style={{}}>
      <Card.Img style={{ objectFit:'cover'}} src="https://kgv.ae/wp-content/uploads/2023/04/09-Abhinav-Mishra-Vibe.jpg" />
      <Card className='p-md-3 cardHover'>
        <Card.Title className='fw-bold'>Wondershare EdrawMax</Card.Title>
        <Card.Title>CEO | BOEAT</Card.Title>
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2 just-text line-clamp'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>
            </SwiperSlide> */}
            <button className='btn-nav' ref={navigationPrevRef}>Previous</button>
        <button className='btn-nav' ref={navigationNextRef}>Next</button>
            </Swiper>
            
            </div>
        </div>
        
      </div>
    </div>


  <div className='container container-max'>
    <div className='row mt-5'>


    <h5  className='fw-bold borderB py-1 h4'>Quick Bytes</h5>
    <div className='col-md-4 '>
      {loading ? (
        <p></p>
      ) : (
        <>
          {/* Quick Bytes from API */}
          {data.quickbyte.slice(0, limit).map((quickbyte, index) => (
            <div key={index} className='mt-3'>
              <div className=''>
                <a href={`/Topic/${quickbyte.id}`}><h3 className='fw-bold h5 hoverHead line-clamp'>{quickbyte.post_title}</h3></a>
                <p style={{ fontSize: '13px' }} className='mt-1'>
                  By <span className='fw-bold'>{quickbyte.post_author}</span> | {new Date(quickbyte.post_date).toLocaleDateString(undefined, options)}
                </p>
              </div>
              <p className='hr' />
            </div>
          ))}
        </>
      )}
    </div>

    {loading ? (
        <p></p>
        
      ) : (
        <div className='col-md-4 mt-3 borderR borderL'>
        <div  className='zoom-in' >
            <div>
              <img  style={{width:"100%", borderRadius:"20px", height:"250px", objectFit:"cover"}} src={data.quickbyte[0].banner_img} alt="QuickBytes_img" />
            </div>
            <div className='padLR'>
            <a  href={`/Topic/${data.quickbyte[0].id}`}><h4 className='fw-bold h5 mt-3 hoverHead line-clamp'>{data.quickbyte[0].post_title}</h4></a>
            <p style={{ fontSize: "13px" }}>
            By <span className='fw-bold'>{data.quickbyte[0].post_author}</span> |  {new Date(data.latestNews[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{data.quickbyte[0].post_content}</p>
          </div>
            </div>
        </div>
         )}

{loading ? (
        <p></p>
        
      ) : (
        <div className='col-md-4 mt-3'>
        <div  className='zoom-in' >
            <div>
              <img  style={{width:"100%", borderRadius:"20px", height:"250px", objectFit:"cover"}} src={data.quickbyte[1].banner_img} alt="QuickBytes_img" />
            </div>
            <div className='padLR'>
            <a href={`/Topic/${data.quickbyte[1].id}`}><h4 className='fw-bold h5 mt-3 hoverHead line-clamp'>{data.quickbyte[1].post_title}</h4></a>
            <p style={{ fontSize: "13px" }}>
            By <span className='fw-bold'>{data.quickbyte[1].post_author}</span> | {new Date(data.latestNews[1].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{data.quickbyte[1].post_content}</p>
          </div>
            </div>
        </div>
         )}

      












      
    </div>

  </div>





  <div className='container container-max'>
    <div className='row mt-5'>


    <h5  className='fw-bold borderB py-1 h4'>Articles</h5>



    
      {loading ? (
        <p></p>
      ) : (
        <div className='col-md-4 mt-3'>
          <div className='zoom-in'>
            <div>
              <img
                style={{ width: '100%', borderRadius: '20px', height: '250px', objectFit: 'cover' }}
                src={data.article[0].banner_img} // Assuming your API response has an 'imageSrc' property
                alt="article_img"
              />
            </div>
            <div className='padLR'>
             <a href={`/Topic/${data.article[0].id}`}> <h4 className='fw-bold h5 mt-3 hoverHead'>{data.article[0].post_title}</h4></a>
              <p style={{ fontSize: '13px' }}>
                By <span className='fw-bold'>{data.article[0].post_author}</span> |  {new Date(data.article[0].post_date).toLocaleDateString(undefined, options)}
              </p>
              <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                {data.article[0].post_content}
              </p>
            </div>
          </div>
        </div>
      )}
 


 {loading ? (
        <p></p>
      ) : (
        <div className='col-md-4 mt-3 borderR borderL' >
        <div  className='zoom-in' >
            <div>
              <img  style={{width:"100%", borderRadius:"20px", height:"250px", objectFit:"cover"}} src={data.article[1].banner_img} alt="article_img" />
            </div>
            <div className='padLR'>
            <a href={`/Topic/${data.article[1].id}`}><h4 className='fw-bold h5 mt-3 hoverHead'>{data.article[1].post_title}</h4></a>
            <p style={{ fontSize: "13px" }}>
            By <span className='fw-bold'>{data.article[1].post_author}</span> | {new Date(data.article[1].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}> {data.article[1].post_content}</p>
          </div>
            </div>
        </div>
)}


      <div className='col-md-4 '>
      
      
      {loading ? (
        <p></p>
      ) : (
        <>
          {/* Quick Bytes from API */}
          {data.article.slice(0, limit).map((article, index) => (
            <div key={index} className='mt-3'>
              <div className=''>
               <a href={`/Topic/${article.id}`}> <h3 className='fw-bold h5 hoverHead line-clamp'>{article.post_title}</h3></a>
                <p style={{ fontSize: '13px' }} className='mt-1'>
                  By <span className='fw-bold'>{article.post_author}</span> | {new Date(article.post_date).toLocaleDateString(undefined, options)}
                </p>
              </div>
              <p className='hr' />
            </div>
          ))}
        </>
      )}
       
        </div>

      

      












      
    </div>

  </div>


  <div className='container container-max'>

  <div className='row mt-5 justify-content-between'>
  <h5  className='fw-bold borderB py-1 h4'>Podcasts</h5>

  {loading ? (
          <p></p>
        ) : (
    <div className="col-md-7">
      <div className='podText'>
      <a href={`/Topic/${data.podcast[0].id}`}><h1 className='fw-bold hoverHead guestFont2'>{data.podcast[0].post_title}
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
      By <span className='fw-bold'>{data.podcast[0].post_author}</span> | {new Date(data.podcast[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        <div id="hotseat"></div>
      </h1></a>
      
                        </div>
    </div>
  )}

{loading ? (
          <p></p>
        ) : (
    <div className="col-md-5 ">
      <img className='ImgBoxGuets2'  src={data.podcast[0].banner_img} alt="podcast_img" />
      
    </div>
)}
      
  </div>

</div>



<div className='container container-max'>
  <div className='row mt-5'>
    <div className="col-md-12 mb-5 borderB" >
   <div style={{height:"150px", backgroundColor:"#ebebeb"}}>
   <p className='bllack'>1090*200</p>
   </div>
    </div>
  </div>

</div>

    </div>
  
  )
}

export default Homepage