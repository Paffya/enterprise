import React, {useState, useEffect} from 'react'
import "../Styles/Latest.css"
// import { Card } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Sidenav from '../Components/Sidenav';




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
        const response = await axios.get(`http://192.168.17.8:3000/api/post/tag/${subcat}`);
        
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
      const response = await axios.get('http://192.168.17.8:3000/api/advertisement/get_active');
      setAdvertisementData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching advertisement data:', error);
    }
  };

  fetchAdvertisementData();
}, []); // The empty dependency array ensures that this effect runs once when the component mounts


  



  return (

    

    <div className=''>
  
  <Sidenav />
  
  
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


            <div>
              
            <h5 className='fw-bold borderB py-1 h4'>News</h5>

            <div>
      {loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.news && data.news.length > 0 ? (
        <div className='flexAddver mt-3' style={{ gap: '11px' }}>
          {data.news.slice(0, limit).map((post, index) => (
            <div key={index} className='addvert hover01'>
              <a href={`/${post.cat_slug}/${post.post_name}`}> <div>
                <figure>
                <img style={{ width: '100%', borderRadius: '20px', height: 'auto', objectFit: 'cover' }} src={post.banner_img} alt={post.banner_alt} />
                </figure>
              </div> </a>
              <div className='padLR'>
                <a href={`/${post.cat_slug}/${post.post_name}`}><h4 className='fw-bold h5 mt-3 hoverHead line-clamp'>{post.post_title}</h4></a>
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
      ) : null /* Render nothing when there is no data */}
    </div>
            </div>
           

        </div>

    </div>





    {/* <div className='container container-max d-flex gap-2 mt-5'>
  {loading ? (
    <p></p>
  ) : (
    
    data.events && data.events.length > 0 ? (
      <div className='row border-top border-bottom' style={{ padding: '10px' }}>
        <div className='col-md-6 borderR paddings mt-3 mb-4'>
          <a href={`/${data.events[0].cat_slug}/${data.events[0].post_name}`}>
            <h3 className='fw-bold hoverHead'>{data.events[0].post_title}</h3>
          </a>
          <p style={{ fontSize: '13px' }}>
            By <span className='fw-bold'>{data.events[0].post_author}</span> |{' '}
            {new Date(data.events[0].post_date).toLocaleDateString(undefined, options)}
          </p>
        </div>

        {data.events.length > 1 && (
          <div className='col-md-6 paddings mt-3 mb-4'>
            <a href={`/${data.events[1].cat_slug}/${data.events[1].post_name}`}>
              <h3 className='fw-bold hoverHead'>{data.events[1].post_title}</h3>
            </a>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{data.events[1].post_author}</span> |{' '}
              {new Date(data.events[1].post_date).toLocaleDateString(undefined, options)}
            </p>
          </div>
        )}
      </div>
    ) : null 
  )}
</div> */}


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



    <div className="container container-max">
        <div className="row mt-5 spaceincontent">
          <div className="col-md-12 mb-5 spaceincontentbottm borderB">
            <div >
              <div id="article"></div>

              {advertisementData && advertisementData.length > 0 && (
            <a href={`/${advertisementData[1].dest_url}`}>  <img
                style={{ width: "100%" }}
                src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[1].banner_img}`}
                alt={advertisementData[1].banner_name}
              /> </a>
              )}
            </div>
          </div>
        </div>
      </div>



<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.events and it has at least one item
    data.featured && data.featured.length > 0 ? (
  <div className="row ">

  <h5  className='fw-bold borderB py-1 h4'>Articles</h5>
  
   
  <div className='col-md-4 mt-2'>
      
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
    <div className="col-md-8">
    <a href={`/${featured.cat_slug}/${featured.post_name}`}> <div >
            
           <div >
           <img  className='homeImg' src={featured.banner_img} alt={featured.banner_alt} />
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




<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.events and it has at least one item
    data.quickbytes && data.quickbytes.length > 0 ? (
  <div className="row mt-5 spaceincontent">

  <h5  className='fw-bold borderB py-1 h4'>Quick Bytes</h5>


    <div className="col-md-8">
    {data.quickbytes.map((post, index) => (
    <div key={index} className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div  className='quickImgBox'>
        <img style={{ width:"90%"  , borderRadius:"14px"}} src={post.banner_img} alt={post.banner_alt} />
      </div>

      <div className='' style={{width:"74%"}}>
     <a href={`/${post.cat_slug}/${post.post_name}`}> <h5 className='fw-bold hoverHead quickText h5 line-clamp'>{post.post_title}</h5></a>
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
   <a href={`/${advertisementData[0].dest_url}`}> <img style={{height:"648px", width:"auto"}}  src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[0].banner_img}`} alt={advertisementData[0].banner_name} /> </a>
    )}
</div>
    </div>
  </div>
  ) : null // Render nothing when there is no data or remove complete Div
  )}
</div>



<div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 ">
          <div id="podcast"></div>
            <div   style={{ textAlign:"center", alignItems:"center", margin:"auto"}}>
            {advertisementData && advertisementData.length > 0 && (
             <a href={`/${advertisementData[1].dest_url}`}> <img
                style={{width:"100%"}}
                src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[1].banner_img}`}
                alt={advertisementData[1].banner_name}
              /> </a>
            )}
            </div>
          </div>
        </div>
      </div>




<div className='container container-max ' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.podcasts and it has at least one item
    data.podcasts && data.podcasts.length > 0 ? (
  <a href={`/${data.podcasts[0].cat_slug}/${data.podcasts[0].post_name}`}><div className='row mt-5 spaceincontent justify-content-between'>
  <h5  className='fw-bold borderB py-1 h4'>Podcasts</h5>
    <div className="col-md-7">
      <div className='podText'>
      <h1 className='fw-bold hoverHead guestFont2' > <p style={{fontSize:"50px"}} className='fw-bold hoverHead guestFont2 line-clamp'>{data.podcasts[0].post_title}</p>
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{data.podcasts[0].post_author}</span> | {new Date(data.podcasts[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        {/* <div id="hotseat"></div> */}
      </h1>
      
                        </div>
    </div>

    <div className="col-md-5 " style={{margin:"auto"}}>
      <img className='ImgBoxGuets'  src={data.podcasts[0].banner_img} alt={data.podcasts[0].banner_alt} />
      
    </div>


  </div> 
  <div id="hotseat" style={{height:"80px"}} className=" DesktopResponsive"></div>
  </a>
 ) : null // Render nothing when there is no data or remove complete Div
 )}
</div>





<div className='container container-max' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.interview and it has at least one item
    data.interview && data.interview.length > 0 ? (
  <div className="row mt-5 spaceincontent">
{/* <div id="future"></div> */}
  <h5  className='fw-bold borderB py-1 h4'>Hot Seats</h5>

  {data.interview.slice(0,4).map((post, index) => (
    <div className="col-md-6">
   
    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src={post.banner_img} alt={post.banner_alt} />
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


{/* 

{loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.interview && data.interview.length > 0 ? (
<div className='container container-max' >
<h5  className='fw-bold borderB py-1 h4 mt-5'>Featured Interview <Scrolltop /></h5>
  <div className="row">
  <div>
      
        <div className="col-md-12 justify-content-center intervieBox">
          {data.interview.slice(0, cardLimit).map((interview, index) => (
           <a href={`/${interview.cat_slug}/${interview.post_name}`}> <Card key={index} style={{ width: '21rem', marginRight: '10px' }} className='box-Card'>
              <Card.Img variant="top" src={interview.banner_img} />
              <Card className='p-md-3 cardHover' style={{ fontSize: '14px' }}>
                <div id="future"></div>
                <Card.Title className='fw-bold'>
                  
                  <span>
                   
                  </span>
                </Card.Title>
                <Card.Text className='fw-bold line-clamp hoverHead'>{interview.post_title}</Card.Text>
                <Card.Text className='mt-1 line-clamp cardText'>{interview.p_content}</Card.Text>
              </Card>
            </Card></a>
          ))}
        </div>
      
    </div>
  </div>

</div>
) : null } */}




<div className='container container-max d-flex gap-2  mt-5 spaceincontent' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.futureready and it has at least one item
    data.futureready && data.futureready.length > 0 ? (
  <div className='row  border-bottom ' >
  <h5  className='fw-bold borderB py-1 h4'>Future Ready</h5>
<div className='col-md-6 borderR paddings mt-3 mb-4' style={{padding:"10px"}}>
 <a href={`/${data.futureready[0].cat_slug}/${data.futureready[0].post_name}`}><h3 className='fw-bold hoverHead'>{data.futureready[0].post_title}</h3></a>
  <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{data.futureready[0].post_author}</span> | {new Date(data.futureready[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <div ></div>
</div>
{data.futureready.length > 1 && (
<div className='col-md-6  paddings mt-3 mb-4' style={{padding:"10px"}} >
<a href={`/${data.futureready[1].cat_slug}/${data.futureready[1].post_name}`}><h3  className='fw-bold  hoverHead'>{data.futureready[1].post_title}</h3></a>
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
 




<div className='container container-max mt-5 spaceincontent' >
{loading ? (
        <p></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.guestauthor && data.guestauthor.length > 0 ? (
  <div className="row">
  <h5  className='fw-bold borderB py-1 h4'>Guest Author</h5>
    <div className="col-md-6 guestImg">
      <img className='ImgBoxGuets'  src={data.guestauthor[0].banner_img} alt={data.guestauthor[0].banner_alt}/>
    </div>

    <div className="col-md-6  guestText" >
    <div className='align-center'>
    <a href={`/${data.guestauthor[0].cat_slug}/${data.guestauthor[0].post_name}`}>  <h2 className='fw-bold hoverHead guestFont'> <p className='fw-bold hoverHead guestFont'>{data.guestauthor[0].post_title}</p>
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{data.guestauthor[0].post_author}</span> | {new Date(data.guestauthor[0].post_date).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>
                        <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   
                    <div id="learning"></div>
                        
      </h2> </a>
      
                        </div>
    </div>


  </div>
  ) : null /* Render nothing when there is no data */}

</div>





<div className='container container-max mt-5 spaceincontent borderB' >
{loading ? (
    <p></p>
  ) : (
    // Check if there is data.learningcenter and it has at least one item
    data.learningcenter && data.learningcenter.length > 0 ? (
  <div className="row mb-2">
  <h5  className='fw-bold borderB py-1 h4'>Learning Center</h5>
    <div className="col-md-12  learningBox" style={{gap:"13px"}}>

    {data.learningcenter.slice(0,3).map((learningcenter, index) => (
    <a href={`/${learningcenter.cat_slug}/${learningcenter.post_name}`}>  
    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"38%", height:"140px"}}>
        <img style={{ width:"93%", height:"140px", objectFit:"cover"  , borderRadius:"14px"}} src={learningcenter.banner_img} alt={learningcenter.banner_alt} />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>{learningcenter.post_title}</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{learningcenter.post_author}</span> | {new Date(learningcenter.post_date).toLocaleDateString(undefined, options)}
                        </p>
      </div>
    </div> 
    </a>
    ))}

    </div>
  </div>
 ) : null // Render nothing when there is no data or remove complete Div
 )}
</div>






<div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div >
            {advertisementData && advertisementData.length > 0 && (
             <a href={`/${advertisementData[1].dest_url}`}> <img
                style={{ width: "100%" }}
                src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[1].banner_img}`}
                alt={advertisementData[1].banner_name}
              /> </a>
            )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tag;

