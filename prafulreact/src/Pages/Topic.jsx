import React, { useState, useEffect } from "react";
import "../Styles/Article.css";
import axios from "axios";
import { useParams } from "react-router-dom";


const Searchart = () => {
  
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const { cat_slug , post_name} = useParams();
  const [postloading, setPostLoading] = useState(true);
  const [htmlContent, setHtmlContent] = useState("");
  const [postData, setPostData] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`http://192.168.17.8:3000/api/post/viewpost/${searchval}`);
        const response = await fetch(`http://192.168.17.8:3000/api/post/postdetails/${cat_slug}/${post_name}`);
        const data = await response.json();

        setHtmlContent(data.result[0].post_content);
        setPostData(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setPostLoading(false);
      }
    };

    fetchData();
  }, [cat_slug , post_name]);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("http://192.168.17.8:3000/api/post/latest")
      .then((response) => {
        setLatestPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);// Empty dependency array to run the effect once on mount

 



  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.17.8:3000/api/post/asidetopic/${cat_slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result.result);
        console.log(result)
        
      } catch (error) {
       
        
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <div className="container container-max ">
        <div className="row ">
          <div className="hr"></div>
         
          <div className="col-md-8 borderR mt-2">
            {postloading ? (
              <p></p>
            ) : (
              <div>
               
                {/* Content for the 70% column */}
                <div className="paddings">
                  {/* <p> {console.log('postdata '+ postData[0].post_title)}</p> */}
                  <h1 className="fw-bold mt-1 h2 ">{postData[0].post_title}</h1>
                  <p style={{ fontSize: "14px" }}>
                    By{" "}
                    <span className="fw-bold">
                      {postData[0].post_author}
                    </span>{" "}
                    |{" "}
                    {new Date(postData[0].post_date).toLocaleDateString(
                      undefined,
                      options
                    )}
                  </p>
                </div>
                <div className="mt-3">
                  <img
                    className="topicImg"
                    src={postData[0].banner_img}
                    alt=""
                  />
                </div>

                <div style={{ fontSize: "14px" }}>
                  

                  <p className="paddings">
                  
                    <div
                      className="content mt-2"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  </p>
                </div>

                <div
                  className=" ArticleBox mt-5 mb-5"
                  style={{ alignItems: "center" }}
                >
                  <div>
                    <img
                      className="ArticleImg"
                      src="https://people.com/thmb/RpnNLplOGndVrTF-rdBlp0biuxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x39:721x41)/Emma-Watson-c59dff78899047bb839b894665b85a13.jpg"
                      alt=""
                    />
                  </div>
                  <div style={{ fontSize: "14px", padding: "10px" }}>
                    <h6 className="fw-bold">Jane Smith</h6>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sit, vero praesentium quibusdam officiis itaque distinctio
                      magnam sequi quia, tempora vitae, labore reiciendis natus
                      facere temporibus cupiditate dignissimos nisi! Dolorum,
                      illum!
                    </p>
                  </div>
                </div>
              </div>
            )}


<h5 className="fw-bold borderB py-1 h5">More from Enterprise Talk</h5>
 {latestPosts.slice(0,4).map((post, index) => (
           <a href={`/${post.cat_slug}/${post.post_name}`}> <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src={post.banner_img}
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                 {post.post_title}
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
                </p>
              </div>
              
            </div> </a>
            
            
             ))}


          </div>

          <div className="col-md-4">
            <div className=" borderB paddings">
              <h5 className="fw-bold">Related Articles</h5>
            </div>
            <div>
              {data.slice(0,4).map((post, index) => (
                
                <div key={index} className="paddings">
                
                  <a href={`/${post.cat_slug}/${post.post_name}`}><h4 className="fw-bold h5 hoverHead line-clamp">{post.post_title}</h4></a>
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
                    {post.post_content}
                  </p>
                  <p className="hr" />
                </div>
              ))}
            </div>

            <div
              className="marTop sticky-top"
              style={{  height: "" }}
            >
              {/* Content for the 30% column */}
              {/* <p className="bllack">340*1500</p> */}
              <img style={{height:"", width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2022/12/Advertorial-banner-2.jpg" alt="" />
           
            </div>
          </div>

          
          
        </div>
      </div>

      <div className="container container-max ">
        <div className="row">
          {/* <h5 className="fw-bold borderB py-1 h5">More from Enterprise Talk</h5> */}

          {/* <div className="col-md-8 borderR">

         

           

           

            <div className="borderB"></div>
          </div> */}

          {/* <div className="col-md-4">
            <div style={{ height: "550px" }}>
              
              <img style={{height:"550px", width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2022/12/Advertorial-banner-1.jpg" alt="" />
            </div>
          </div> */}


        </div>
      </div>

      <div className="container container-max ">
        <div className="row mt-5  ">
          <div className="col-md-12 mb-5">
            <div style={{ height: "150px" }}>
              {/* <p className="bllack">1090*200</p> */}
              <img style={{width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2023/11/BlackNP-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Searchart;
