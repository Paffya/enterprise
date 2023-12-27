import React , {useState, useEffect} from 'react'
import "../Styles/Latest.css"
import { Card } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav';





const Latest = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const options = {
    
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
 
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [quickbytes, setQuickbytes] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [interview, setInterview] = useState([]);
  const [futureready, setFutureready] = useState([]);
  const [guestauthor, setGuestauthor] = useState([]);
  const [learningcenter, setLearningcenter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.17.8:3000/api/post/page/latest');
        const data = await response.json();
        
        setPosts(data.postData);
        setNews(data.postData.news);
        setFeatured(data.postData.featured);
        setQuickbytes(data.postData.quickbytes);
        setPodcasts(data.postData.podcasts);
        setInterview(data.postData.interview);
        setFutureready(data.postData.futureready);
        setGuestauthor(data.postData.guestauthor);
        setLearningcenter(data.postData.learningcenter);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (

    <div className=''>


    
    <div className='container container-max' id="news">


        <div className='row'>
            <div className='col-md-12'>
                <h1 className='fw-bold py-1 mt-3'>Latest</h1>
            </div>

            <div className='d-flex mt-3'>
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
                  <option value="#learning"><a href="#learning" className=' btn-sm1' >Learning Center</a></option>
                </select>
              </div>
              
            </div>


            <div>
            <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            News</div> 
            <div>
            <Sidenav />
            </div>
            </h5>
    
            <div className='flexAddver mt-3' style={{ gap: '11px' }}>


    {/* {console.log(posts.news)} */}

            {news.slice(0,3).map((post, index) => (
        <React.Fragment key={index} >
        <div className='addvert hover01'>
          <div>
          <a href={`/${post.cat_slug}/${post.post_name}`}>
  <figure className="">
    <img
      style={{ width: '100%', borderRadius: '20px', height: '250px', objectFit: 'cover' }}
      src={post.banner_img}
      alt=""
      className="zoom-in"
    />
  </figure>
</a>
          </div>
          <div className='padLR '>
            <a href={`/${post.cat_slug}/${post.post_name}`}><h4 className='fw-bold h5 mt-3 hoverHead'>{post.post_title}</h4></a>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
            </p>
            <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
              {post.post_content}
            </p>
          </div>
        </div>

        {index < 2 && <div className='borderR'></div>}
      </React.Fragment>
      ))}


           
    </div>
            </div>

        </div>

    </div>





  <div className='container container-max d-flex gap-2  mt-5'>
  <div><div className='row border-top border-bottom'  >
      {featured.slice(3, 5).map((post, index) => (
        
          <div className='col-md-6  mt-3 mb-4' key={index}>
            <a href={`/${post.cat_slug}/${post.post_name}`}><h3 className='fw-bold hoverHead'>{post.post_title}</h3></a>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
            </p>
         
        </div>
      ))}
       </div>
    </div>
</div>


<div className='container container-max'>
  <div className='row mt-5'>
    <div className="col-md-12 mb-5 borderB" >
   <div style={{height:"150px"}}>
   <div id="article"></div>
   
   <img style={{width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2023/11/BlackNP-1.png" alt="" />
   </div>
    </div>
  </div>

</div>



<div className='container container-max ' >
  <div className="row ">

  <h5  className='fw-bold borderB py-1 h4'>
    <div>Articles</div>
    <div><Sidenav /></div>
  </h5>
  <div className='col-md-4 mt-3'>
    
      {featured.slice(0,5).map((post, index) => (
        
        <React.Fragment key={index}>
          
          <div className=''>
            <a href={`/${post.cat_slug}/${post.post_name}`}><h3 className='fw-bold h5 hoverHead'>{post.post_title}</h3></a>
            <p style={{ fontSize: '13px' }} className='mt-1'>
              By <span className='fw-bold '>{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
            </p>
          </div>
          <p className='mt-4' />
          
        </React.Fragment>
        
      ))}
      <div id='quick'></div>
      
    </div>


    <div className="col-md-8">
    <div>
      {featured.slice(5,6).map((post, index) => (
       <a href={`/${post.cat_slug}/${post.post_name}`}> <div key={index}>
         
          <div>
            <img className='homeImg' src={post.banner_img} alt="" />
          </div>

          <div className='paddings'>
            <h1 className='fw-bold mt-1 h2 hoverHead'>{post.post_title}</h1>
            <p style={{ fontSize: '14px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
            </p>

            <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
              {post.post_content}
            </p>
          </div>
        </div>
        </a>
        
      ))}
    </div>
    </div>
  </div>

</div>



<div className='container container-max' >
  <div className="row mt-5">

  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Quick Bytes</div> 
            <div>
            <Sidenav />
            </div>
            </h5>


  <div className="col-md-8">
      {quickbytes.map((post, index) => (
        <div key={index}>
        
          <a href={`/${post.cat_slug}/${post.post_name}`}> <div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div className='quickImgBox'>
              <img style={{ width: '90%', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='' style={{ width: '74%' }}>
              <h5 className='fw-bold hoverHead quickText'>{post.post_title}</h5>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
              </p>
            </div>
          </div>
          </a>

          <div className='borderB'></div>
        </div>
      ))}

      <div id="podcast"></div>

      {/* <div className='borderB'></div> */}
    </div>



    <div className="col-md-4">
    <div style={{height:"650px"}}>
    
    <img style={{height:"650px", width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2022/12/Advertorial-banner-2.jpg" alt="" />
</div>
    </div>
  </div>
  
</div>




<div className='container container-max ' >

  <div className='row mt-5 justify-content-between'>
  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Podcasts</div> 
            <div>
            <Sidenav />
            </div>
            </h5>

  {podcasts.slice(0, 1).map((post, index) => (
    <div className="col-md-7">
      <div className='podText'>
      <a href={`/${post.cat_slug}/${post.post_name}`}><h1 className='fw-bold hoverHead guestFont2'>{post.post_title}
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        <div id="hotseat"></div>
      </h1> </a>
      
                        </div>
    </div>
  ))}

{podcasts.slice(0, 1).map((post, index) => (
    <div className="col-md-5 ">
      <img className='ImgBoxGuets'  src={post.banner_img} alt="" />
      
    </div>
    ))}


  </div>

</div>





<div className='container container-max' >
  <div className="row mt-5">

  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Hot Seats</div> 
            <div>
            <Sidenav />
            </div>
            </h5>
  <div id="future"></div>
  <div className="col-md-6">
      {interview.slice(0,2).map((post, index) => (
        <div key={index}>
          <a href={`/${post.cat_slug}/${post.post_name}`}><div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div style={{ width: '40%', height: '150px' }}>
              <img style={{ width: '90%', height: '150px', objectFit: 'cover', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='mt-2' style={{ width: '60%' }}>
              <h4 className='fw-bold hoverHead h5'>{post.post_title}</h4>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
              </p>
             
              <div id={`post-post_${index}`}></div>
            </div>
          </div>
          </a>

          <div className='borderB'></div>
  {/* <div id='featured'></div> */}
  {/* <div id="future"></div> */}

        </div>
      ))}
    </div>

    <div className="col-md-6">
      {interview.slice(2, 4).map((post, index) => (
        <div key={index}>
          <a href={`/${post.cat_slug}/${post.post_name}`}> <div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div style={{ width: '40%', height: '150px' }}>
              <img style={{ width: '90%', height: '150px', objectFit: 'cover', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='mt-2' style={{ width: '60%' }}>
              <h4 className='fw-bold hoverHead h5'>{post.post_title}</h4>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
              </p>
            </div>
          </div>
          </a>

          <div className='borderB'></div>
        </div>
      ))}
    </div>




  </div>
</div>




{/* 
<div className='container container-max' >
<h5  className='fw-bold borderB py-1 h4 mt-5'>Featured Interview</h5>
  <div className="row">
    <div className="col-md-12 justify-content-center intervieBox" >

    {interview.map((post, index) => (
      <a href={`/${post.cat_slug}/${post.post_name}`}>
    <Card style={{ width: '21rem', marginRight:"10px" }} className='box-Card'>
      <Card.Img variant="top" src={post.banner_img} />
      <Card className='p-md-3 cardHover' style={{fontSize:"14px"}}>
      <div id="future"></div>
        <Card.Title className='fw-bold'>{post.post_author} <br /> <span><p>{new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}</p></span> </Card.Title>
        
        <Card.Text  className='fw-bold line-clamp'>
          {post.post_title}
        </Card.Text>
        <Card.Text className='mt-2  line-clamp cardText'>
        {post.post_content}
        </Card.Text>
        
      </Card>
    </Card>
    </a>
    ))}


    
    
    </div>
  </div>

</div> */}



<div className='container container-max d-flex gap-2  mt-5' >

  <div className='row  border-bottom ' >
  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Future Ready</div> 
            <div>
            <Sidenav />
            </div>
            </h5>
  {futureready.map((post, index) => (
<div className='col-md-6  paddings mt-3 mb-4' style={{padding:"10px"}}>
<a href={`/${post.cat_slug}/${post.post_name}`}>  <h3 className='fw-bold hoverHead'>{post.post_title}</h3></a>
  <p style={{ fontSize: "13px" }}>
                          By {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
                        </p>
                        <div id="guest"></div>
</div>
    ))}


  </div>
</div>





<div className='container container-max mt-5' >
  
  <div className="row">
  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Guest Author</div> 
            <div>
            <Sidenav />
            </div>
            </h5>
 
  {guestauthor.slice(0,1).map((post, index) => (
    <div className="col-md-6 guestImg">
     <a href={`/${post.cat_slug}/${post.post_name}`}> <img className='ImgBoxGuets'  src={post.banner_img} alt="" /></a>
    </div>
 ))}
    <div className="col-md-6  guestText" >

    {guestauthor.slice(0,1).map((post, index) => (
    <div className='align-center'>
     <a href={`/${post.cat_slug}/${post.post_name}`}> <h2 className='fw-bold hoverHead guestFont'>{post.post_title}
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{post.post_author}</span> {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>
                        <div id="learning"></div>
      </h2> </a>
      
                        </div>
                         ))}
    </div>
    


  </div>
</div>





<div className='container container-max mt-5  borderB' >
  <div className="row mb-2">
  <h5 className='fw-bold borderB py-1 h4 mt-4'> <div>
            Learning Center</div> 
            <div>
            <Sidenav />
            </div>
            </h5>
    <div className="col-md-12  learningBox" style={{gap:"13px"}}>
    {learningcenter.map((post, index) => (
   <a href={`/${post.cat_slug}/${post.post_name}`}> <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"38%", height:"140px"}}>
        <img style={{ width:"93%", height:"140px", objectFit:"cover"  , borderRadius:"14px"}} src={post.banner_img} alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5 line-clamp3'>{post.post_title}</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{post.post_author}</span> {new Date(post.post_date_gmt).toLocaleDateString(undefined, options)}
                        </p>
      </div>
    </div> </a>
    ))}

   
   

    </div>
  </div>

</div>






<div className='container container-max '>
  <div className='row mt-5 '>
    <div className="col-md-12 mb-5 borderB" >
   <div style={{height:"150px"}}>
  
   <img style={{width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2023/11/BlackNP-1.png" alt="" />
   </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default Latest;

