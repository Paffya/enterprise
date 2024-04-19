import React, {useState, useEffect} from 'react'
import "../Styles/Latest.css"
// import { Card } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Sidenav from '../Components/Sidenav';
import {API_ROOT,webPath} from "../apiConfig";
import {Helmet} from "react-helmet"
import LazyLoad from 'react-lazyload';




const Tag  = () => {
  
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const { subcat } = useParams();

  const [data, setData] = useState(null);
  const [subcatName, setsubcatName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 3;
  // const cardLimit = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/post/tag/${subcat}`);
        
        setData(response.data.posts);
        setsubcatName(response.data.posts.subCatName)
      } catch (error) {
        setError(error)
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subcat]);

  

  const [advertisementData, setAdvertisementData] = useState([]);

useEffect(() => {
  const fetchAdvertisementData = async () => {
    try {
      const response = await axios.get(`${API_ROOT}/api/advertisement/get_active`);
      setAdvertisementData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching advertisement data:', error);
    }
  };

  fetchAdvertisementData();
}, []); // The empty dependency array ensures that this effect runs once when the component mounts


  
   const pageTitle = `${subcatName}`
   const canonicalUrl = `https://enterprisetalk.com/tag/${subcat}`




   const [className, setClassName] = useState('');
const [className1, setClassName1] = useState('');
const [className2, setClassName2] = useState('');
const [className3, setClassName3] = useState('');
const [className4, setClassName4] = useState('');
const [className5, setClassName5] = useState('');
const [className6, setClassName6] = useState('');
const [className7, setClassName7] = useState('');
const [className8, setClassName8] = useState('');
// const [className9, setClassName9] = useState('');

useEffect(() => {
  const sections = 5; 
  let currentSection = 1;

  const setSectionClassName = () => {
    
    const removeTimer = setTimeout(() => {
      setClassName('');
    }, 0);

   
    const setTimer = setTimeout(() => {
      setClassName('loaded');
      currentSection++;

      
      if (currentSection <= sections) {
        setSectionClassName();
      }
    }, currentSection * 30); 

  
    return () => {
      clearTimeout(removeTimer);
      clearTimeout(setTimer);
    };
  };

  setSectionClassName();
}, []); 

 useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName1('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName1('loaded1');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 150);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
     
      if (window.scrollY > 100) { 
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName2('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName2('loaded2');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 190 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 190);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 190) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName3('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName3('loaded3');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 230 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 230);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 230) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName4('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName4('loaded4');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 290);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 290) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName5('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName5('loaded5');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 290);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 290) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  
  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName6('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName6('loaded6');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 320);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 320) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  
  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName7('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName7('loaded7');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 360);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 360) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  
  useEffect(() => {
    const sections = 5; 
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName8('');
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName8('loaded8');
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 290 is reached
          window.removeEventListener('scroll', handleScroll);
        }
      }, currentSection * 400);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 400) { // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 






  return (

    

    <div className=''>

<Helmet>
      <title>{pageTitle} | Enterprise Talk</title>
	<meta name="description" content="A Peer Knowledge Resource Expert inputs on challenges, triumphs &amp; innovative solutions from corporate Movers &amp; Shakers in global Leadership." />
	<link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content="Home" />
        <meta property="og:url" content={canonicalUrl} />

       

  
      </Helmet> 
  
  <Sidenav />
  
  <LazyLoad className={className}>
    <div className='container container-max' id="news">
   

        <div className='row'>
          
            <div className='col-md-12'>
                <h1 className='fw-bold py-1 mt-3 mb-3'>{subcatName}</h1>
            </div>

            <div className='d-flex mt-3 fixedGoTo d-none'>
              <div><p className='fw-bold DesktopResponsive'>Go To : </p></div>

             <div className='mx-3 DesktopResponsive'>
               <a href="#news" className={`btn-sm1 ${activeLink === 'news' ? 'active' : ''}`}
        onClick={() => handleLinkClick('news')} >News</a>

              <a href="#article" className={`btn-sm1 ${activeLink === 'article' ? 'active' : ''}`}
        onClick={() => handleLinkClick('article')}>Article</a>

              <a href="#quick" className={`btn-sm1 ${activeLink === 'QuickBytes' ? 'active' : ''}`}
        onClick={() => handleLinkClick('QuickBytes')}>Quick Bytes</a>

              <a href="#podcast" className={`btn-sm1 ${activeLink === 'podcasts' ? 'active' : ''}`}
        onClick={() => handleLinkClick('podcasts')}>Podcasts</a>

              <a href="#hotseat" className={`btn-sm1 ${activeLink === 'hot' ? 'active' : ''}`}
        onClick={() => handleLinkClick('hot')}>Hot Seats</a>

              {/* <a href="#featured" className={`btn-sm1 ${activeLink === 'featured' ? 'active' : ''}`}
        onClick={() => handleLinkClick('featured')}>Featured Interview</a> */}

              <a href="#future" className={`btn-sm1 ${activeLink === 'future' ? 'active' : ''}`}
        onClick={() => handleLinkClick('future')}>Future Ready</a>

              <a href="#guest" className={`btn-sm1 ${activeLink === 'guest' ? 'active' : ''}`}
        onClick={() => handleLinkClick('guest')}>Guest Author</a>
        
              <a href="#learning" className={`btn-sm1 ${activeLink === 'learning' ? 'active' : ''}`}
        onClick={() => handleLinkClick('learning')}>Learning Center</a>
              
              </div>

              <div className='MobileResponsive' style={{margin:"auto", display:"none"}}>
              <div><p className='fw-bold'>Go To : </p></div>
                <select name="" id="" className='tabMobile'>
                  <option value="#news" href="#news"> <a href="#news" className=' btn-sm1'>News</a></option>
                  <option value="#article"> <a href="#article" className=' btn-sm1'>Article</a></option>
                  <option value="#quick"><a href="#quick" className=' btn-sm1'>Quick Bytes</a></option>
                  <option value="#podcast"><a href="#podcast" className=' btn-sm1'>Podcasts</a></option>
                  <option value="#hotseat"><a href="#hotseat" className=' btn-sm1'>Hot Seats</a></option>
                  <option value="#featured"><a href="#featured" className=' btn-sm1'>Featured Interview</a></option>
                  <option value="#future"> <a href="#future" className=' btn-sm1'>Future Ready</a></option>
                  <option value="#guest"><a href="#guest" className=' btn-sm1'>Guest Author</a></option>
                  <option value="#learning"><a href="#learning" className=' btn-sm1'>Learning Center</a></option>
                </select>
              </div>
              
            </div>


            {data && data.news && data.news.length > 0 && (
  <div>
    <h2 className='fw-bold borderB py-1 h4'>News</h2>

    <div>
      {loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='flexAddver mt-3' style={{ gap: '11px' }}>
          {data.news.slice(0, limit).map((post, index) => (
            <div key={index} className='addvert hover01'>
              <a href={`/${post.cat_slug}/${post.post_name}`}>
                <div>
                  <figure>
                    <img style={{ width: '100%', borderRadius: '20px', height: 'auto', objectFit: 'cover' }} src={`${webPath}${post.banner_img}?width=500`} alt={post.post_title} />
                  </figure>
                </div>
              </a>
              <div className='padLR'>
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  <h3 className='fw-bold h5 mt-3 hoverHead line-clamp'>{post.post_title}</h3>
                </a>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                </p>
                <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                  {post.p_content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}

           

        </div>

    </div>
    </LazyLoad>


<LazyLoad className={className}>
<div className='container container-max d-flex gap-2 '>
      {loading ? (
        <p></p>
      ) : (
        data.events && data.events.length > 0 ? (
          <div className='row border-top border-bottom' style={{ padding: '10px' }}>
            {data.events.map((event, index) => (
              <div key={index} className='col-md-6 paddings mt-3 mb-4 borderR'>
                <a href={`/${event.cat_slug}/${event.post_name}`}>
                  <h3 className='fw-bold hoverHead'>{event.post_title}</h3>
                </a>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{event.post_author}</span> |{' '}
                  {new Date(event.post_date).toLocaleDateString(undefined, options)}
                </p>
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
    </LazyLoad>


    <LazyLoad className={className}>
    <div className="container container-max">
        <div className="row mt-5 spaceincontent">
          <div className="col-md-12 mb-5 spaceincontentbottm borderB">
            <div >
              <div id="article"></div>

              {advertisementData && advertisementData.length > 0 && (
            <a href={`${advertisementData[2].dest_url}`}>  <img
                style={{ width: "100%" }}
                src={`${webPath}${advertisementData[2].banner_img}`}
                alt={advertisementData[2].banner_name}
              /> </a>
              )}
            </div>
          </div>
        </div>
      </div>
      </LazyLoad>

      <LazyLoad className={className1}>
<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.events and it has at least one item
    data.featured && data.featured.length > 0 ? (
  <div className="row ">

  <h3  className='fw-bold borderB py-1 h4'>Articles</h3>
  
   
  <div className='col-md-3 mt-2'>
      
  {data.featured.slice(0,7).map((featured, index) => (
      <div className='borderB mt-3'>
      <a href={`/${featured.cat_slug}/${featured.post_name}`}>  <h3 className='fw-bold h5 hoverHead '>{featured.post_title}</h3></a>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">{featured.post_author}</span> | {new Date(featured.post_date).toLocaleDateString(undefined, options)}
                    </p>
      </div>
      
  ))}





     
   
    </div>

    {data.featured.slice(6,7).map((featured, index) => (
    <div className="col-md-9 mt-2">
    <a href={`/${featured.cat_slug}/${featured.post_name}`}> <div >
            
           <div >
           <img  className='homeImg' src={`${webPath}${featured.banner_img}?width=700`} alt={featured.post_title} />
           </div>
           
           <div className='paddings'>
            <h3 className='fw-bold mt-1 h3 hoverHead' id="quick"> {featured.post_title}</h3>
            <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">{featured.post_author}</span> | {new Date(featured.post_date).toLocaleDateString(undefined, options)}
                        </p>

                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{featured.p_content}</p>
           </div>

           
           
          </div>
          </a>
    </div>
    ))}

  </div>
 ) : null // Render nothing when there is no data or remove complete Div
 )}
</div>
</LazyLoad>


<LazyLoad className={className2}>
<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.events and it has at least one item
    data.quickbytes && data.quickbytes.length > 0 ? (
  <div className="row mt-5 spaceincontent">

  <h4  className='fw-bold borderB py-1 h4'>Quick Bytes</h4>


    <div className="col-md-8">
    {data.quickbytes.map((post, index) => (
    <div key={index} className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div  className='quickImgBox'>
        <img style={{ width:"90%"  , borderRadius:"14px"}} src={`${webPath}${post.banner_img}?width=500`} alt={post.post_title} />
      </div>

      <div className='' style={{width:"74%"}}>
     <a href={`/${post.cat_slug}/${post.post_name}`}> <h4 className='fw-bold hoverHead quickText h5 line-clamp'>{post.post_title}</h4></a>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold" >{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                        </p>
      </div>
      <div className='borderB'></div>
    </div>
    ))}

   


{/* <div  id="podcast"></div> */}


    

    </div>



    <div className="col-md-4"  >
    <div style={{height:"648px", textAlign:"center", margin:"auto", alignItems:"center"}}>
    {/* <p className='bllack'>340*900</p> */}
    {advertisementData && advertisementData.length > 0 && (
   <a href={`${advertisementData[0].dest_url}`}> <img style={{height:"648px", width:"auto"}}  src={`${webPath}${advertisementData[0].banner_img}`} alt={advertisementData[0].banner_name} /> </a>
    )}
</div>
    </div>
  </div>
  ) : null // Render nothing when there is no data or remove complete Div
  )}
</div>
</LazyLoad>

<LazyLoad className={className2}>
<div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 ">
          <div id="podcast"></div>
            <div   style={{ textAlign:"center", alignItems:"center", margin:"auto"}}>
            {advertisementData && advertisementData.length > 0 && (
             <a href={`${advertisementData[2].dest_url}`}> <img
                style={{width:"100%"}}
                src={`${webPath}${advertisementData[2].banner_img}`}
                alt={advertisementData[2].banner_name}
              /> </a>
            )}
            </div>
          </div>
        </div>
      </div>
      </LazyLoad>


      <LazyLoad className={className3}>
<div className='container container-max ' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.podcasts and it has at least one item
    data.podcasts && data.podcasts.length > 0 ? (
  <a href={`/${data.podcasts[0].cat_slug}/${data.podcasts[0].post_name}`}><div className='row mt-5 spaceincontent justify-content-between'>
  <h4  className='fw-bold borderB py-1 h4'>Podcasts</h4>
    <div className="col-md-7 d-flex">
      <div className='podText'>
      <h4 className='fw-bold hoverHead guestFont2' > <p style={{fontSize:"50px"}} className='fw-bold hoverHead guestFont2 line-clamp'>{data.podcasts[0].post_title}</p>
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{data.podcasts[0].post_author}</span> | {new Date(data.podcasts[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        {/* <div id="hotseat"></div> */}
      </h4>
      
                        </div>
    </div>

    <div className="col-md-5 " style={{margin:"auto"}}>
      <img className='ImgBoxGuets'  src={`${webPath}${data.podcasts[0].banner_img}?width=700`} alt={data.podcasts[0].post_title} />
      
    </div>


  </div> 
  <div id="hotseat" style={{height:"80px"}} className=" DesktopResponsive"></div>
  </a>
 ) : null // Render nothing when there is no data or remove complete Div
 )}
</div>
</LazyLoad>



<LazyLoad className={className4}>
<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.interview and it has at least one item
    data.interview && data.interview.length > 0 ? (
  <div className="row mt-5 spaceincontent">
{/* <div id="future"></div> */}
  <h4  className='fw-bold borderB py-1 h4'>Hot Seats</h4>

  {data.interview.slice(0,4).map((post, index) => (
    <div className="col-md-6">
   
    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src={`${webPath}${post.banner_img}?width=500`} alt={post.post_title} />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
     <a href={`/${post.cat_slug}/${post.post_name}`}> <h4 className='fw-bold hoverHead h5'>{post.post_title}</h4></a>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                        </p>
                       
      </div>
      {/* <div id='future'></div> */}
    </div>
   

    <div className='borderB'></div>
    <div id="future"></div>

    {/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src={data.interview[1].banner_img} alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <a href={`/${data.interview[1].cat_slug}/${data.interview[1].post_name}`}>   <h4 className='fw-bold hoverHead h5'>{data.interview[1].post_title}</h4> </a>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.interview[1].post_author}</span> | {new Date(data.interview[1].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        
                        <div id="future"></div>
      </div>
    </div> */}


    </div>
 ))}
    <div className="col-md-6">
    

    {/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src={data.interview[2].banner_img} alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <a href={`/${data.interview[2].cat_slug}/${data.interview[2].post_name}`}> <h4 className='fw-bold hoverHead h5'>{data.interview[2].post_title}</h4> </a>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.interview[2].post_author}</span> | {new Date(data.interview[2].post_date).toLocaleDateString(undefined, options)}
                        </p>
      </div>
    </div>

    <div className='borderB'></div>

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src={data.interview[3].banner_img} alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <a href={`/${data.interview[3].cat_slug}/${data.interview[3].post_name}`}> <h4 className='fw-bold hoverHead h5'>{data.interview[3].post_title}</h4> </a>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.interview[3].post_author}</span> | {new Date(data.interview[3].post_date).toLocaleDateString(undefined, options)}
                        </p>
      </div>
    </div> */}
   
    </div>



  </div>
   ) : null // Render nothing when there is no data or remove complete Div
   )}
</div>
</LazyLoad>





<LazyLoad className={className5}>
<div className='container container-max d-flex gap-2  mt-5 spaceincontent' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.futureready and it has at least one item
    data.futureready && data.futureready.length > 0 ? (
  <div className='row  border-bottom ' >
  <h5  className='fw-bold borderB py-1 h4'>Future Ready</h5>
<div className='col-md-6 borderR paddings mt-3 mb-4' style={{padding:"10px"}}>
 <a href={`/${data.futureready[0].cat_slug}/${data.futureready[0].post_name}`}><h5 className='fw-bold h2 hoverHead'>{data.futureready[0].post_title}</h5></a>
  <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.futureready[0].post_author}</span> | {new Date(data.futureready[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <div ></div>
</div>
{data.futureready.length > 1 && (
<div className='col-md-6  paddings mt-3 mb-4' style={{padding:"10px"}} >
<a href={`/${data.futureready[1].cat_slug}/${data.futureready[1].post_name}`}><h5  className='fw-bold h2 hoverHead'>{data.futureready[1].post_title}</h5></a>
  <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.futureready[1].post_author}</span> | {new Date(data.futureready[1].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <div  id="guest" ></div>
              <div  className="text-white">.</div>
              <div  className="text-white">.</div>
</div>
 )}
  </div>
  ) : null // Render nothing when there is no data or remove complete Div
  )}
</div>
</LazyLoad>



<LazyLoad className={className6}>
<div className='container container-max mt-5 spaceincontent' >
{loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.guestauthor && data.guestauthor.length > 0 ? (
  <div className="row">
  <h5  className='fw-bold borderB py-1 h4'>Guest Author</h5>
    <div className="col-md-6 guestImg">
      <img className='ImgBoxGuets'  src={`${webPath}${data.guestauthor[0].banner_img}?width=500`} alt={data.guestauthor[0].post_title}/>
    </div>

    <div className="col-md-6  guestText" >
    <div className='align-center'>
    <a href={`/${data.guestauthor[0].cat_slug}/${data.guestauthor[0].post_name}`}>  <h5 className='fw-bold h2 hoverHead guestFont'> <p className='fw-bold hoverHead guestFont'>{data.guestauthor[0].post_title}</p>
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{data.guestauthor[0].post_author}</span> | {new Date(data.guestauthor[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>
                        <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   
                    <div id="learning"></div>
                        
      </h5> </a>
      
                        </div>
    </div>


  </div>
  ) : null /* Render nothing when there is no data */}

</div>
</LazyLoad>



<LazyLoad className={className7}>
{data && data.learningcenter && data.learningcenter.length > 0 && (
  <div className='container container-max mt-5 spaceincontent '>
    <div className="row justify-content-between ">
    <h5  className='fw-bold borderB py-1 h4'>Learning Center</h5>
      {data.learningcenter.slice(0, 3).map((learningcenter, index) => (
        <div className="col-md-4 d-flex mt-4 mb-4 " style={{ alignItems: "center" }} key={index}>
          <a href={`/${learningcenter.cat_slug}/${learningcenter.post_name}`} className="d-flex w-100" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: "50%" }}>
              <img style={{ width: "92%", height:"130px" ,objectFit: "cover", borderRadius: "14px" }} src={`${webPath}${learningcenter.banner_img}?width=500`} alt={learningcenter.post_title} />
            </div>
            <div style={{ width: "50%" }} className='m-auto'>
              <h5 className='line-clamp h5 fw-bold hoverHead' title={learningcenter.post_title}>{learningcenter.post_title}</h5>
              <p style={{ fontSize: "12px" }}>
                By <span className="fw-bold">{learningcenter.post_author}</span> | {new Date(learningcenter.post_date).toLocaleDateString(undefined, options)}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
)}
</LazyLoad>





<LazyLoad className={className8}>
<div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div >
            {advertisementData && advertisementData.length > 0 && (
             <a href={`${advertisementData[2].dest_url}`}> <img
                style={{ width: "100%" }}
                src={`${webPath}${advertisementData[2].banner_img}`}
                alt={advertisementData[2].banner_name}
              /> </a>
            )}
            </div>
          </div>
        </div>
      </div>
      </LazyLoad>

    </div>
  )
}

export default Tag;

