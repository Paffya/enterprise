import React, { useState, useEffect } from "react";
import "../Styles/Article.css";
// import AudioPlayer from '../Components/AudioPlayer'
import axios from "axios";
import { useParams } from "react-router-dom";

// const AUDIO_FILE = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-FLAC-File.flac";

const Searchart = () => {
  const options = {
    
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const { searchval } = useParams();
  // const [postId, setPostId] = useState(null);
  // const [data, setData] = useState(null);
  const [postloading, setPostLoading] = useState(true);
  const [ setLatestLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [postData, setPostData] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
  // const limit = 4;

  // const fetchData = async () => {
  //   try {
  //     // Fetch data using the retrieved ID
  //     const response = await axios.get(`http://192.168.17.8:3000/api/post/viewpost/${searchval}`);
  //   console.log(response)
  //     if (response.status !== 200) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     setPostData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setError('An error occurred while fetching data.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://192.168.17.8:3000/api/post/viewpost/${searchval}`);
      const data = await response.json();

      // Assuming data.postData[0].post_content is a string
      setHtmlContent(data.postData[0].post_content);
      // Assuming data.postData is an array
      // console.log(data.postData);
      setPostData(data.postData);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setPostLoading(false);
    }
  };

  fetchData();
}, [searchval]);

useEffect(() => {
  // Fetch data from the API using Axios
  axios
    .get("http://192.168.17.8:3000/api/post/latest")
    .then((response) => {
      setLatestPosts(response.data);
      // console.log(response.data);
      setLatestLoading(false);
      // setHtmlContent(data.postData[0].post_content); // You can add this line if needed
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // setLatestLoading(false);
    });
}, []); // Empty dependency array to run the effect once on mount

  // useEffect(() => {
  //   // Fetch HTML content from your API
  //   fetch(`http://192.168.17.8:3000/api/post/viewpost/${searchval}`)
  //     .then(response => response.json())

  //     .then(data => setHtmlContent(data.postData[0].post_content))
  //     .catch(error => console.error('Error fetching HTML content:', error));

  // }, []); // Empty dependency array to run the effect once on mount


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
                  <h1 className="fw-bold mt-1 h2 hoverHead">{postData[0].post_title}</h1>
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
                    className="homeImg"
                    src={postData[0].banner_img}
                    alt=""
                  />
                </div>

                <div style={{ fontSize: "14px" }}>
                  

                  <p className="paddings">
                  
                    <div
                      className="content"
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
          </div>

          <div className="col-md-4">
            <div className=" borderB paddings">
              <h5 className="fw-bold">Related Articles</h5>
            </div>
            <div>
              {latestPosts.map((post, index) => (
                
                <div key={index} className="paddings">
                  {/* <p>{console.log(post)}</p> */}
                  <a href={`/Topic/${post.id}`}><h4 className="fw-bold h5 hoverHead">{post.post_title}</h4></a>
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
              className="marTop "
              style={{ backgroundColor: "#e0e0e0", height: "1500px" }}
            >
              {/* Content for the 30% column */}
              <p className="bllack">340*1500</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container container-max mt-3">
        <div className="row">
          <h5 className="fw-bold borderB py-1 h5">More from Enterprise Talk</h5>

          <div className="col-md-8 borderR">
            <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src="https://img.freepik.com/premium-photo/business-people-talking-meeting-office-near-window_396254-124.jpg"
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                  Quasar Partner with PTC to Empower IoT Customer with
                  High-Performance Data Solution
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">John Smith</span> | 12 sept 2023
                </p>
              </div>
            </div>

            <div className="borderB"></div>

            <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src="https://img1.wsimg.com/isteam/stock/8538/:/cr=t:0%25,l:7.59%25,w:84.82%25,h:100%25/rs=w:600,h:451.12781954887214,cg:true"
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                  Quasar Partner with PTC to Empower IoT Customer with
                  High-Performance Data Solution
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">John Smith</span> | 12 sept 2023
                </p>
              </div>
            </div>

            <div className="borderB"></div>

            <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src="https://www.purdueglobal.edu/blog/careers/workplace-diversity.jpg"
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                  Quasar Partner with PTC to Empower IoT Customer with
                  High-Performance Data Solution
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">John Smith</span> | 12 sept 2023
                </p>
              </div>
            </div>

            <div className="borderB"></div>

            <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src="https://njbmagazine.com/wp-content/uploads/2020/04/Diverse-business-775x500.jpg"
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                  Quasar Partner with PTC to Empower IoT Customer with
                  High-Performance Data Solution
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">John Smith</span> | 12 sept 2023
                </p>
              </div>
            </div>

            <div className="borderB"></div>

            <div className="d-flex mt-3 mb-3" style={{ alignItems: "center" }}>
              <div className="quickImgBox">
                <img
                  style={{ width: "90%", borderRadius: "14px" }}
                  src="https://www.vmcdn.ca/f/files/localprofile/import/2019_03_2017-10-02-diversity-ThinkstockPhotos-639467826.jpg"
                  alt=""
                />
              </div>

              <div className="" style={{ width: "74%" }}>
                <h5 className="fw-bold hoverHead quickText">
                  Quasar Partner with PTC to Empower IoT Customer with
                  High-Performance Data Solution
                </h5>
                <p style={{ fontSize: "13px" }}>
                  By <span className="fw-bold">John Smith</span> | 12 sept 2023
                </p>
              </div>
            </div>

            <div id="podcast"></div>

            <div className="borderB"></div>
          </div>

          <div className="col-md-4">
            <div style={{ height: "700px", backgroundColor: "#ebebeb" }}>
              <p className="bllack">340*700</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-max ">
        <div className="row mt-5  ">
          <div className="col-md-12 mb-5">
            <div style={{ height: "150px", backgroundColor: "#ebebeb" }}>
              <p className="bllack">1090*200</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container container-max'>
  <div className="row">
    <div className="colmd-12">
    <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  </div>
</div> */}
    </div>
  );
};

export default Searchart;
