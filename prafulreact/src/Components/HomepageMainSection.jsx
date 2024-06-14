// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { API_ROOT, webPath } from "../apiConfig";
// import { Tab, Tabs, TabContent } from 'react-bootstrap';
// import LazyLoad from 'react-lazyload';

// const HomepageMainSection = () => {
//     const options = {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric',
//     };

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [advertisementData, setAdvertisementData] = useState([]);

//     const [activeKey, setActiveKey] = useState('tab1');

//     const handleTabSelect = (key) => {
//       setActiveKey(key);
//     };
  

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [postData, adData] = await Promise.all([
//                     axios.get(`${API_ROOT}/api/post/homepost`),
//                     axios.get(`${API_ROOT}/api/advertisement/get_active`)
//                 ]);

//                 const removeHtmlTags = (html) => html.replace(/<[^>]*>/g, '');
//                 const cleanedPostData = {
//                     ...postData.data,
//                     latestNews: postData.data.latestNews.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })),
//                     latest: postData.data.latest.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })),
//                 };

//                 setData(cleanedPostData);
//                 setAdvertisementData(adData.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const [className, setClassName] = useState('');


// useEffect(() => {
//   const sections = 5; 
//   let currentSection = 1;

//   const setSectionClassName = () => {
    
//     const removeTimer = setTimeout(() => {
//       setClassName('');
//     }, 0);

   
//     const setTimer = setTimeout(() => {
//       setClassName('loaded');
//       currentSection++;

      
//       if (currentSection <= sections) {
//         setSectionClassName();
//       }
//     }, currentSection * 40); 

  
//     return () => {
//       clearTimeout(removeTimer);
//       clearTimeout(setTimer);
//     };
//   };

//   setSectionClassName();
// }, []); 

//     const renderPost = (post, index) => (
//         <div key={index}>
//             <div className='paddings'>
//                 <a href={`/${post.cat_slug}/${post.post_name}`} aria-label={`Read more about ${post.post_title}`}><h3 className='fw-bold h5 hoverHead' title={post.post_title}>{post.post_title}</h3></a>
//                 <p style={{ fontSize: '13px' }}>
//                     By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
//                 </p>
//                 <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
//                     {post.post_content}
//                 </p>
//             </div>
//             <p className='hr' />
//         </div>
//     );

//     return (
//         <div className='mt-3 spaceincontent'>
//             <div className="container container-max">
//                 <div className="row">
//                     <h1 className='fw-bold borderB py-1 h5'>Latest</h1>
//                     <div className="col-md-9 borderR">
//                         {data && data.latestNews && data.latestNews.length > 0 && (
//                             <a href={`/${data.latestNews[0].cat_slug}/${data.latestNews[0].post_name}`} aria-label={`Read more about ${data.latestNews[0].post_title}`}>
//                                 <div>
//                                     <img className='homeImg' src={`${webPath}${data.latestNews[0].banner_img}?width=700`} alt={data.latestNews[0].post_title} aria-label={data.latestNews[0].post_title} width="100" height="100" />
//                                     <div className='paddings'>
//                                         <h2 className='fw-bold h2 hoverHead mt-2'>{data.latestNews[0].post_title}</h2>
//                                         <p style={{ fontSize: '14px' }}>
//                                             By <span className='fw-bold'>{data.latestNews[0].post_author}</span> | {new Date(data.latestNews[0].post_date).toLocaleDateString(undefined, options)}
//                                         </p>
//                                         <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
//                                             {data.latestNews[0].post_content}
//                                         </p>
//                                     </div>
//                                     <p className='hr' />
//                                 </div>
//                             </a>
//                         )}

//                         <div className='flexAddver mt-3' style={{ gap: "11px" }}>
//                             {!loading && data.latestNews.slice(1, 3).map((post, index) => (
//                                 <div key={index} className='addvert hover01'>
//                                     <div>
//                                         <a href={`/${post.cat_slug}/${post.post_name}`} aria-label={`Read more about ${post.post_title}`}>
//                                             <figure className="">
//                                                 <img className='zoom-in' style={{ width: "100%", borderRadius: "20px", height: "auto", objectFit: "cover" }} src={`${webPath}${post.banner_img}?width=500`} alt={post.post_title} aria-label={post.post_title} loading="lazy" width="100" height="100" />
//                                             </figure>
//                                         </a>
//                                     </div>
//                                     <div className='padLR'>
//                                         <a href={`/${post.cat_slug}/${post.post_name}`} aria-label={`Read more about ${post.post_title}`}><h2 className='fw-bold h5 mt-3 hoverHead line-clamp' title={post.post_title}>{post.post_title}</h2></a>
//                                         <p style={{ fontSize: "13px" }}>
//                                             By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
//                                         </p>
//                                         <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{post.post_content}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div>
//                           <LazyLoad className={className}>
//                             <Tabs activeKey={activeKey} onSelect={handleTabSelect} id="tabs-example" className='tabBtn nav-link1' style={{ color: "black !important" }}>
//                                 <Tab eventKey="tab1" title="Latest" className='text-black'>
//                                     <TabContent className='marTop'>
//                                         <div>
//                                             {!loading && data.latest.map((post, index) => renderPost(post, index))}
//                                         </div>
//                                     </TabContent>
//                                 </Tab>


//                                 <Tab eventKey="tab2" title="Popular" className='text-black'>
//                                     <TabContent className='marTop'>
//                                         <div>
//                                             {!loading && data.popular.map((post, index) => renderPost(post, index))}
//                                         </div>
//                                     </TabContent>
//                                 </Tab>
//                             </Tabs>
//                             </LazyLoad>
//                         </div>

//                         <div className='marTop heightAuto' style={{ textAlign: "center", height: "400px" }}>
//                             {advertisementData && advertisementData.length > 0 && (
//                                 <a href={`${advertisementData[1].dest_url}`} aria-label="Visit advertisement page">
//                                     <img className='mt-5' style={{ height: "300px", width: "auto" }} src={`${webPath}${advertisementData[1].banner_img}?width=600`} alt={advertisementData[1].banner_name} aria-label={advertisementData[1].banner_name} loading="lazy" width="100" height="100" />
//                                 </a>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomepageMainSection;
