import React, { useState, useEffect } from "react";
import "../Styles/Latest.css";
// import { Card } from "react-bootstrap";
import Sidenav from "../Components/Sidenav";
import axios from "axios";

const Latest = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // const [posts, setPosts] = useState([]);
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
        const response = await fetch(
          "http://192.168.17.8:3000/api/post/page/latest"
        );
        const data = await response.json();

        const removeHtmlTags = (html) => html.replace(/<[^>]*>/g, '');


        setNews(data.postData.news.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setFeatured(data.postData.featured.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setQuickbytes(data.postData.quickbytes.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setPodcasts(data.postData.podcasts.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setInterview(data.postData.interview.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setFutureready(data.postData.futureready.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setGuestauthor(data.postData.guestauthor.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));
        setLearningcenter(data.postData.learningcenter.map(post => ({ ...post, post_content: removeHtmlTags(post.post_content) })));

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



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
    <div className="">
      <Sidenav className="sidenavBtn" />

      <div className="container container-max" >
        
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3 mb-3">Latest</h1>
          </div>

          <div className="d-flex mt-3 d-none">
            <div>
              <p className="fw-bold DesktopResponsive">Go To : </p>
            </div>

            <div className="mx-3 DesktopResponsive">
              <a
                href="#news"
                className={`btn-sm1 ${activeLink === "news" ? "active" : ""}`}
                onClick={() => handleLinkClick("news")}
              >
                News
              </a>

              <a
                href="#article"
                className={`btn-sm1 ${
                  activeLink === "article" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("article")}
              >
                Article
              </a>

              <a
                href="#quick"
                className={`btn-sm1 ${
                  activeLink === "QuickBytes" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("QuickBytes")}
              >
                Quick Bytes
              </a>

              <a
                href="#podcast"
                className={`btn-sm1 ${
                  activeLink === "podcasts" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("podcasts")}
              >
                Podcasts
              </a>

              <a
                href="#hotseat"
                className={`btn-sm1 ${activeLink === "hot" ? "active" : ""}`}
                onClick={() => handleLinkClick("hot")}
              >
                Hot Seats
              </a>

              {/* <a href="#featured" className={`btn-sm1 ${activeLink === 'featured' ? 'active' : ''}`}
        onClick={() => handleLinkClick('featured')}>Featured Interview</a> */}

              <a
                href="#future"
                className={`btn-sm1 ${activeLink === "future" ? "active" : ""}`}
                onClick={() => handleLinkClick("future")}
              >
                Future Ready
              </a>

              <a
                href="#guest"
                className={`btn-sm1 ${activeLink === "guest" ? "active" : ""}`}
                onClick={() => handleLinkClick("guest")}
              >
                Guest Author
              </a>

              <a
                href="#learning"
                className={`btn-sm1 ${
                  activeLink === "learning" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("learning")}
              >
                Learning Center
              </a>
            </div>

            <div
              className="MobileResponsive"
              style={{ margin: "auto", display: "none" }}
            >
              <div>
                <p className="fw-bold">Go To : </p>
              </div>
              <select name="" id="" className="tabMobile">
                <option value="#news" href="#news">
                  {" "}
                  <a href="#news" className=" btn-sm1">
                    News
                  </a>
                </option>
                <option value="#article">
                  {" "}
                  <a href="#article" className=" btn-sm1">
                    Article
                  </a>
                </option>
                <option value="#quick">
                  <a href="#quick" className=" btn-sm1">
                    Quick Bytes
                  </a>
                </option>
                <option value="#podcast">
                  <a href="#podcast" className=" btn-sm1">
                    Podcasts
                  </a>
                </option>
                <option value="#hotseat">
                  <a href="#hotseat" className=" btn-sm1">
                    Hot Seats
                  </a>
                </option>
                <option value="#featured">
                  <a href="#featured" className=" btn-sm1">
                    Featured Interview
                  </a>
                </option>
                <option value="#future">
                  {" "}
                  <a href="#future" className=" btn-sm1">
                    Future Ready
                  </a>
                </option>
                <option value="#guest">
                  <a href="#guest" className=" btn-sm1">
                    Guest Author
                  </a>
                </option>
                <option value="#learning">
                  <a href="#learning" className=" btn-sm1">
                    Learning Center
                  </a>
                </option>
              </select>
            </div>
          </div>

          <div>
            <h5 className="fw-bold borderB py-1 h4 ">News</h5>

            <div className="flexAddver mt-3" style={{ gap: "11px" }}>
              {/* {console.log(posts.news)} */}

              {news.slice(0, 3).map((post, index) => (
                <React.Fragment key={index}>
                  <div className="addvert hover01">
                    <div>
                      <a href={`/${post.cat_slug}/${post.post_name}`}>
                        <figure className="">
                          <img
                            style={{
                              width: "100%",
                              borderRadius: "20px",
                              height: "auto",
                              objectFit: "cover",
                            }}
                            src={post.banner_img}
                            alt={post.banner_alt}
                            className="zoom-in"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="padLR ">
                      <a href={`/${post.cat_slug}/${post.post_name}`}>
                        <h4 className="fw-bold h5 mt-3 hoverHead line-clamp">
                          {post.post_title}
                        </h4>
                      </a>
                      <p style={{ fontSize: "13px" }}>
                        By <span className="fw-bold">{post.post_author}</span> |{" "}
                        {new Date(post.post_date).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </p>
                      <p
                        className="just-text line-clamp mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        {/* <div dangerouslySetInnerHTML={{ __html: post.post_content }} /> */}
                      {post.post_content}
                      </p>
                    </div>
                  </div>

                  {index < 2 && <div className="borderR"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container container-max d-flex gap-2  mt-5 spaceincontent">
        <div>
          <div className="row border-top border-bottom">
            {featured.slice(3, 5).map((post, index) => (
              <div className="col-md-6  mt-3 mb-4" key={index}>
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  <h3 className="fw-bold hoverHead">{post.post_title}</h3>
                </a>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">{post.post_author}</span> |{" "}
                  {new Date(post.post_date).toLocaleDateString(
                    undefined,
                    options
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
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

      <div className="container container-max ">
        <div className="row ">
          <h5 className="fw-bold borderB py-1 h4">Articles</h5>
          <div className="col-md-4 mt-3">
            {featured.slice(0, 6).map((post, index) => (
              <React.Fragment key={index}>
                <div className="">
                  <a href={`/${post.cat_slug}/${post.post_name}`}>
                    <h3 className="fw-bold h5 hoverHead">{post.post_title}</h3>
                  </a>
                  <p style={{ fontSize: "13px" }} className="borderB mt-1">
                    By <span className="fw-bold ">{post.post_author}</span> |{" "}
                    {new Date(post.post_date).toLocaleDateString(
                      undefined,
                      options
                    )}
                  </p>
                </div>
                <p className="mt-3" />
              </React.Fragment>
            ))}
            {/* <div id="quick"></div> */}
          </div>

          <div className="col-md-8">
            <div>
              {featured.slice(7, 8).map((post, index) => (
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  {" "}
                  <div key={index}>
                    <div>
                      <img className="homeImg" src={post.banner_img} alt={post.banner_alt} />
                    </div>

                    <div className="paddings">
                      <h3 className="fw-bold mt-1 h3 hoverHead" id="quick">
                        {post.post_title}
                      </h3>
                      <p style={{ fontSize: "14px" }}>
                        By <span className="fw-bold">{post.post_author}</span> |{" "}
                        {new Date(post.post_date).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </p>

                      <p className="just-text line-clamp mt-1" style={{ fontSize: "15px" }} >
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

      <div className="container container-max">
        <div className="row mt-5 spaceincontent">
          <h5 className="fw-bold borderB py-1 h4">Quick Bytes</h5>

          <div className="col-md-8">
            {quickbytes.map((post, index) => (
              <div key={index}>
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  {" "}
                  <div
                    className="d-flex mt-3 mb-3"
                    style={{ alignItems: "center" }}
                  >
                    <div className="quickImgBox">
                      <img
                        style={{ width: "90%", borderRadius: "14px" }}
                        src={post.banner_img}
                        alt={post.banner_alt}
                      />
                    </div>

                    <div className="" style={{ width: "74%" }}>
                      <h5 className="fw-bold hoverHead quickText h5 line-clamp">
                        {post.post_title}
                      </h5>
                      <p style={{ fontSize: "13px" }}>
                        By <span className="fw-bold">{post.post_author}</span> |{" "}
                        {new Date(post.post_date).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </p>
                    </div>
                  </div>
                </a>

                <div className="borderB"></div>
              </div>
            ))}

            

            {/* <div className='borderB'></div> */}
          </div>

          <div className="col-md-4">
            <div
              style={{
                height: "648px",
                textAlign: "center",
                margin: "auto",
                alignItems: "center",
              }}
            >
              {/* <p className='bllack'>340*900</p> */}
              {advertisementData && advertisementData.length > 0 && (
            <a href={`/${advertisementData[0].dest_url}`}>  <img
                style={{ height: "648px", width: "auto" }}
                src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[0].banner_img}`}
                alt={advertisementData[0].banner_name}
              /> </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div id="podcast"></div> */}
      <div className="container container-max " >
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12  ">
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

      <div className="container container-max ">
        <div className="row mt-5 spaceincontent justify-content-between ">
          <h5 className="fw-bold borderB py-1 h4">Podcasts</h5>

          {podcasts.slice(0, 1).map((post, index) => (
            <div className="col-md-7">
              <div className="podText">
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  <h1 className='fw-bold hoverHead guestFont2' >
                    <p className='fw-bold hoverHead guestFont2 line-clamp' style={{fontSize:"50px"}}>{post.post_title}</p>
                    <p style={{ fontSize: "18px" }} className="fw-bold mt-2">
                      In conversation with
                    </p>
                    <p className="guestPtag">
                      By <span className="fw-bold">{post.post_author}</span> |{" "}
                      {new Date(post.post_date).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </p>
                    <button className="btn-pod">Hear The Podcasts</button>

                   
                    {/* <div id="hotseat" style={{}}></div> */}
                  </h1>{" "}
                </a>
              </div>
            </div>
          ))}

          {podcasts.slice(0, 1).map((post, index) => (
            <div className="col-md-5 mt-2" >
              <img className="ImgBoxGuets mt-5" src={post.banner_img} alt={post.banner_alt} />
            </div>
          ))}
        </div>
        <div id="hotseat" style={{height:"80px"}} className=" DesktopResponsive"></div>
        
      </div>

      <div className="container container-max">
        <div className="row mt-5 spaceincontent">
          <h5 className="fw-bold borderB py-1 h4">Hot Seats</h5>
          
          <div className="col-md-6">
            {interview.slice(0, 2).map((post, index) => (
              <div key={index}>
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  <div
                    className="d-flex mt-3 mb-3"
                    style={{ alignItems: "center" }}
                  >
                    <div style={{ width: "40%", height: "150px" }}>
                      <img
                        style={{
                          width: "90%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "14px",
                        }}
                        src={post.banner_img}
                        alt={post.banner_alt}
                      />
                    </div>

                    <div className="mt-2" style={{ width: "60%" }}>
                      <h4 className="fw-bold hoverHead h5">
                        {post.post_title}
                      </h4>
                      <p style={{ fontSize: "13px" }}>
                        By <span className="fw-bold">{post.post_author}</span> |{" "}
                        {new Date(post.post_date).toLocaleDateString(
                          undefined,
                          options
                        )}
                      </p>
{/* <div id="future"></div> */}
                      <div id={`post-post_${index}`}></div>
                    </div>
                  </div>
                </a>

                <div className="borderB"></div>
                {/* <div id='featured'></div> */}
                <div id="future"></div>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            {interview.slice(2, 4).map((post, index) => (
              <div key={index}>
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  {" "}
                  <div
                    className="d-flex mt-3 mb-3"
                    style={{ alignItems: "center" }}
                  >
                    <div style={{ width: "40%", height: "150px" }}>
                      <img
                        style={{
                          width: "90%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "14px",
                        }}
                        src={post.banner_img}
                        alt={post.banner_alt}
                      />
                    </div>

                    <div className="mt-2" style={{ width: "60%" }}>
                      <h4 className="fw-bold hoverHead h5">
                        {post.post_title}
                      </h4>
                      <p style={{ fontSize: "13px" }}>
                        By <span className="fw-bold">{post.post_author}</span> |{" "}
                        {new Date(post.post_date).toLocaleDateString(
                          undefined,
                          options
                        )}
                         
                      </p>
                      
                      
                    </div>
                  </div>
                </a>

                <div className="borderB"></div>
                
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
        <Card.Title className='fw-bold'>{post.post_author} <br /> <span><p>{new Date(post.post_date).toLocaleDateString(undefined, options)}</p></span> </Card.Title>
        
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

      <div className="container container-max d-flex gap-2 spaceincontent mt-2">
        <div className="row  ">
          <h5 className="fw-bold borderB py-1 h4 mt-5">Future Ready</h5>
          {futureready.map((post, index) => (
            <div
              className="col-md-6  paddings mt-3 mb-4 borderB"
              style={{ padding: "10px" }}
            >
              
              <a href={`/${post.cat_slug}/${post.post_name}`}>
                {" "}
                <h3  className="fw-bold hoverHead mt-3" >{post.post_title}</h3>
              </a>
              
              <p  style={{ fontSize: "13px" }} >
                By{" "}
                {new Date(post.post_date).toLocaleDateString(
                  undefined,
                  options
                )}
                
              </p>
              <div  id="guest" ></div>
              <div  className="text-white">.</div>
              <div  className="text-white">.</div>
           
            </div>
          ))}
        </div>
      </div>
      

      <div className="container container-max mt-5 spaceincontent">
        <div className="row">
          <h5 className="fw-bold borderB py-1 h4">Guest Author</h5>

          {guestauthor.slice(0, 1).map((post, index) => (
            <div className="col-md-6 guestImg" style={{marginTop:"0px", marginBottom:"0px"}}>
              <a href={`/${post.cat_slug}/${post.post_name}`}>
                {" "}
                <img className="ImgBoxGuets"  src={post.banner_img} alt={post.banner_alt} />
              </a>
            </div>
          ))}
          <div className="col-md-6  guestText">
            {guestauthor.slice(0, 1).map((post, index) => (
              <div className="align-center">
                <a href={`/${post.cat_slug}/${post.post_name}`}>
                  {" "}
                  <h2 className="fw-bold hoverHead guestFont">
                    <p className="fw-bold hoverHead guestFont">{post.post_title}</p>
                    <p style={{ fontSize: "18px" }} className="fw-bold mt-2">
                      In conversation with
                    </p>
                    <p className="guestPtag">
                      By <span className="fw-bold">{post.post_author}</span>{" "}
                      {new Date(post.post_date).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </p>
                    <button className="btn-pod">Hear The Podcasts</button>
                   <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   <p className="p text-white">.</p>
                   
                    <div id="learning"></div>
                  </h2>{" "}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container container-max mt-5 spaceincontent borderB">
        <div className="row mb-2">
          <h5 className="fw-bold borderB py-1 h4">Learning Center</h5>
          <div className="col-md-12  learningBox" style={{ gap: "13px" }}>
            {learningcenter.map((post, index) => (
              <a href={`/${post.cat_slug}/${post.post_name}`}>
                {" "}
                <div
                  className="d-flex mt-3 mb-3"
                  style={{ alignItems: "center" }}
                >
                  <div style={{ width: "38%", height: "140px" }}>
                    <img
                      style={{
                        width: "93%",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "14px",
                      }}
                      src={post.banner_img}
                      alt={post.banner_alt}
                    />
                  </div>

                  <div className="mt-2" style={{ width: "60%" }}>
                    <h4 className="fw-bold hoverHead h5 line-clamp3">
                      {post.post_title}
                    </h4>
                    <p style={{ fontSize: "13px" }}>
                      By <span className="fw-bold">{post.post_author}</span>{" "}
                      {new Date(post.post_date).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </p>
                  </div>
                </div>{" "}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div >
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
    </div>
  );
};

export default Latest;
