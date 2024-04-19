import React, {useState, useRef, useEffect } from 'react'
import axios from "axios"
import {API_ROOT,webPath} from "../apiConfig";
import { Tab, Tabs, TabContent, Card } from 'react-bootstrap';

const HomepageMainSection = () => {


    const options = {
   
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
    
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      // const limit = 4;
      
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${API_ROOT}/api/post/homepost`);
            const removeHtmlTags = (html) => html.replace(/<[^>]*>/g, '');
    
            // Remove HTML tags from specific fields in the response data
            const cleanedData = {
              ...response.data,
              latestNews: response.data.latestNews.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })),
              latest: response.data.latest.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })),
              
            };
    
            setData(cleanedData);
            
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
    




  return (
    <div>

<div className='mt-3 spaceincontent'>
  <div className="container container-max" >
    <div className="row ">
    <h1 className='fw-bold borderB py-1 h5'>Latest</h1>
      <div className="col-md-9 borderR">
      <div>
      <div>
     
      {data && data.latestNews && data.latestNews.length > 0 && (
<a href={`/${data.latestNews[0].cat_slug}/${data.latestNews[0].post_name}`} aria-label={`Read more about ${data.latestNews[0].post_title}`}>
  <div>
  
    <img className='homeImg' src={`${webPath}${data.latestNews[0].banner_img}?width=700`} alt={data.latestNews[0].post_title} aria-label={data.latestNews[0].post_title}  width="100" height="100" />
   
    <div className='paddings'>
      <h2 className='fw-bold h2 hoverHead mt-2'>{data.latestNews[0].post_title}</h2>
      <p style={{ fontSize: '14px' }}>
        By <span className='fw-bold'>{data.latestNews[0].post_author}</span> | {new Date(data.latestNews[0].post_date).toLocaleDateString(undefined, options)}
      </p>
      <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
        {data.latestNews[0].post_content}
      </p>
    </div>
    <p className='hr' />
  </div>
</a>
)}
  </div>


        <div className='flexAddver mt-3 ' style={{gap:"11px"}}>

        {loading ? (
      <p></p>
      
    ) : (
          <div  className='addvert hover01' >
          <div>
          <a href={`/${data.latestNews[1].cat_slug}/${data.latestNews[1].post_name}`} aria-label={`Read more about ${data.latestNews[1].post_title}`}> 
          <figure className="">
          <img className='zoom-in' style={{width:"100%", borderRadius:"20px", height:"auto", objectFit:"cover"}} src={`${webPath}${data.latestNews[1].banner_img}?width=500`} alt={data.latestNews[1].post_title} aria-label={data.latestNews[1].post_title}  loading="lazy" width="100" height="100" />
          </figure>
          </a>
          </div>
          <div className='padLR'>
          <a href={`/${data.latestNews[1].cat_slug}/${data.latestNews[1].post_name}`} aria-label={`Read more about ${data.latestNews[1].post_title}`}> <h2 className='fw-bold h5 mt-3 hoverHead line-clamp' title={data.latestNews[1].post_title}>{data.latestNews[1].post_title}</h2></a>
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
          <div  className='addvert hover01'>
          <div>
          <a href={`/${data.latestNews[2].cat_slug}/${data.latestNews[2].post_name}`} aria-label={`Read more about ${data.latestNews[2].post_title}`}> <figure className=""> 
          <img className='zoom-in'  style={{width:"100%" , borderRadius:"20px", height:"auto", objectFit:"cover"}} src={`${webPath}${data.latestNews[2].banner_img}?width=500`} alt={data.latestNews[2].post_title} aria-label={data.latestNews[2].post_title}   loading="lazy" width="100" height="100" />
          </figure>
          </a>
          </div>
          <div className='padLR'>
          <a href={`/${data.latestNews[2].cat_slug}/${data.latestNews[2].post_name}`} aria-label={`Read more about ${data.latestNews[2].post_title}`}><h2 className='fw-bold h5 mt-3 hoverHead line-clamp' title={data.latestNews[2].post_title}>{data.latestNews[2].post_title}</h2></a>
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
      <div className="col-md-3"> 
        <div >
         

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
              <a href={`/${post.cat_slug}/${post.post_name}`} aria-label={`Read more about ${post.post_title}`}><h3 className='fw-bold h5 hoverHead' title={post.post_title}>{post.post_title}</h3></a>
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
              <a href={`/${post.cat_slug}/${post.post_name}`} aria-label={`Read more about ${post.post_title}`}><h3 className='fw-bold h5 hoverHead' title={post.post_title}>{post.post_title}</h3></a>
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
  

  
  <div className='marTop heightAuto' style={{  textAlign:"center", height:"400px"}}>
        
          {advertisementData && advertisementData.length > 0 && (
<a href={`${advertisementData[1].dest_url}`} aria-label="Visit advertisement page">
  <img className='mt-5' style={{ height: "300px", width: "auto" }} src={`${webPath}${advertisementData[1].banner_img}?width=600`}  alt={advertisementData[1].banner_name} aria-label={advertisementData[1].banner_name} loading="lazy" width="100" height="100"/>
</a>
)}


        </div>
        
          
        </div>
      </div>
    </div>
  </div>





  </div>

    </div>
  )
}

export default HomepageMainSection