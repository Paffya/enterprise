import React, { useState, useEffect } from "react";
import "../Styles/Article.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShareButton from "../Components/ShareButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Searchart = () => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };


  

  const { cat_slug, post_name } = useParams();
  const [postloading, setPostLoading] = useState(true);
  const [htmlContent, setHtmlContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [postData, setPostData] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  // const [postId, setPostId] = useState("");
  const [userIp, setUserIp] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        // user's IP address from the ipify service
        const ipResponse = await fetch('https://api64.ipify.org?format=json');

        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          const userIp = ipData.ip;
          setUserIp(userIp);

          // Now, you can use userIp as needed in your application
          console.log('User IP Address:', userIp);

          
          const response = await fetch(
            `http://192.168.17.8:3000/api/post/postdetails/${cat_slug}/${post_name}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json(); 
        

          setHtmlContent(data.result[0].post_content);
          setAuthorId(data.result[0].post_author_id);
          setPostData(data.result);

          // Now, send data to another API endpoint including the user's IP
          const postDataForCount = {
            postId: data.result[0].id,
            ip_addr: userIp,
          };

          const countResponse = await fetch('http://192.168.17.8:3000/api/post/post_count/'+data.result[0].id, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postDataForCount),
          });

          if (!countResponse.ok) {
            throw new Error(`HTTP error! Status: ${countResponse.status}`);
          }

          const countData = await countResponse.json();
          console.log('Count data:', countData);
        } else {
          console.error('Error fetching IP address:', ipResponse.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setPostLoading(false);
      }
    };

    fetchData();
  }, [cat_slug, post_name]);


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
  }, []); // Empty dependency array to run the effect once on mount

  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.17.8:3000/api/post/asidetopic/${cat_slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const removeHtmlTags = (html) => html.replace(/<[^>]*>/g, "");
        const result = await response.json();
        setData(
          result.result.map((post) => ({
            ...post,
            post_content: removeHtmlTags(post.post_content),
          }))
        );
        // console.log(result)
      } catch (error) {}
    };

    fetchData();
  }, []);

  const [advertisementData, setAdvertisementData] = useState([]);

  useEffect(() => {
    const fetchAdvertisementData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.17.8:3000/api/advertisement/get_active"
        );
        setAdvertisementData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching advertisement data:", error);
      }
    };

    fetchAdvertisementData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts




  



  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/author/2');
        setAuthorData(response.data.result[0]);
      
      } catch (error) {
        console.error('Error fetching author data:', error.message);
      }
    };

    fetchAuthorData();
  }, []);

  const [headings, setHeadings] = useState([]);

  useEffect(() => {
  const container = document.createElement('div');
  container.innerHTML = htmlContent;
  
  

  let index = 1;
  let subIndex = 0;
  const headingsList = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading, i) => {
    let text = heading.innerText;
    let id = heading.id || `heading-${i}`;
    

    if (heading.tagName === 'H2') {
      text = (
        <span style={{fontWeight:"600"}}>
        {index}. {text}
        </span>
        );
      index++;
      subIndex = 0; // Reset subindex for each new H2
    } else if (heading.tagName === 'H3') {
      subIndex++;
      // text = `${index - 1}.${subIndex} ${text}`;
      text = (
        <span style={{ marginLeft:"20px" }}>
          {index - 1}.{subIndex} {text}
        </span>
      );
    }
    return {
      text: text,
      id: id,
    };
  });
  
  setHeadings(headingsList);
}, [htmlContent]);


  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    console.log('scrollToHeading called with id:', id);
    
    if (element) {
      console.log('Element found:', element);
      element.scrollIntoView({ behavior: 'smooth' });
      // window.scrollBy(0, -130);
      setTimeout(() => {
        window.scrollBy(0, -90); // Adjust the value (-100) to set the desired distance from the top
    }, 700); // Adjust the delay if needed to ensure it's after the smooth scrolling
    } else {
      console.log('Element not found with id:', id);
    }
  };


  const tempDiv = document.createElement('div');
tempDiv.innerHTML = htmlContent;

// Get all h1, h2, h3 elements
const heading = tempDiv.querySelectorAll('h2, h3, h4');


// Loop through the headings and assign dynamic IDs
heading.forEach((heading, index) => {
    heading.id = `heading-${index + 0}`; // You can change the ID format as per your requirement
});


// Set the modified HTML content back
const updatedHtmlContent = tempDiv.innerHTML;


const [accordionOpen, setAccordionOpen] = useState(false);

  // const openAccordion = () => {
  //   setAccordionOpen(true);
  // };

  // const closeAccordion = () => {
  //   setAccordionOpen(false);
  // };

  const handleHeaderClick = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent the accordion from closing when clicking on a link
  };
  
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  console.log("actived",activeHeadingId)



  
  return (
    
    <div>
      <div className="container container-max ">
        <div className="row ">
          <div className="hr"></div>

          <div className="col-md-9 borderR mt-2">
            {postloading ? (
              <p></p>
            ) : (
              <div>
                {/* Content for the 70% column */}
                <div className="paddings">
                  {/* <p> {console.log('postdata '+ postData[0].post_title)}</p> */}
                  <h1 className="fw-bold mt-1 h2 ">{postData[0].post_title}</h1>

                  <div className="d-flex justify-content-between">
                    <div style={{ lineHeight: "2", width: "40%" }}>
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

                    <div className="">
                      <ShareButton />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <img
                    className="topicImg"
                    // src={postData[0].banner_img}
                    src={`http://192.168.17.8:3000/uploads/${postData[0].banner_img}`}
                    alt={postData[0].banner_alt}
                  />
                </div>

                <div style={{ fontSize: "14px" }}>
                  <p className="paddings">
                    

                    
                  

                  {headings.length > 0 && (
        <div className="contentTableBox" onClick={handleHeaderClick}>
          <h2 className="fw-bold px-1 h4 clippath" >
           <div className="d-flex justify-content-between ">
           <div className="mb-1" style={{cursor:"pointer"}}>Table of Contents</div>   <div style={{cursor:"pointer"}} className="px-2"><FontAwesomeIcon icon={faBars}  /></div>
           </div>
          </h2>
         <React.Fragment>
         {accordionOpen && (
  <ol className="px-3">
    {headings.map((heading, index) => (
      
      <li key={heading.id} className="tocBack ">
        <a
          href={`#${heading.id}`}
          onClick={(e) => { 
            scrollToHeading(heading.id); 
            handleLinkClick(e); 
            setActiveHeadingId(heading.id); // Set active heading id when clicked
          }}
          className={`text-black mb-1 backLine hover-underline-animations ${activeHeadingId === heading.id ? 'actived' : ''}`}
        >
        
            {heading.text}   
            
        </a>
      </li>
    ))}
  </ol>
)}
     
    </React.Fragment>
  
        </div>
      )}

{/* <div className="content mt-2"  dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
<div className="content mt-2" dangerouslySetInnerHTML={{ __html: updatedHtmlContent }} />
                    {/* <div
                      className="content mt-2"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    /> */}
                  </p>
                </div>

                <div className="ArticleBox mt-5 mb-5" style={{ alignItems: "center" }}>
      {authorData && (
        <>
          <div>
            <img
              className="ArticleImg"
              src={`http://192.168.17.8:3000/uploads/author-profiles/${authorData.author_photo}` || 'http://192.168.17.8:3000/uploads/author-profiles/default-author.jpg'}
              alt={authorData.author_name}
            />
          </div>
          <div style={{ fontSize: "14px", padding: "10px" }}>
            <h2 className="fw-bold h6">{authorData.author_display_name}</h2>
            <p>{authorData.author_description}</p>
          </div>
        </>
      )}
    </div>
{/* 
                <div
                  className=" ArticleBox mt-5 mb-5"
                  style={{ alignItems: "center" }}
                >
                  <div>
                    <img
                      className="ArticleImg"
                      src="https://people.com/thmb/RpnNLplOGndVrTF-rdBlp0biuxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x39:721x41)/Emma-Watson-c59dff78899047bb839b894665b85a13.jpg"
                      alt="Emma Watson"
                    />
                  </div>
                  <div style={{ fontSize: "14px", padding: "10px" }}>
                    <h2 className="fw-bold h6">Jane Smith</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sit, vero praesentium quibusdam officiis itaque distinctio
                      magnam sequi quia, tempora vitae, labore reiciendis natus
                      facere temporibus cupiditate dignissimos nisi! Dolorum,
                      illum!
                    </p>
                  </div>
                </div> */}
              </div>
            )}

            <h3 className="fw-bold borderB py-1 h5">
              More from Enterprise Talk
            </h3>
            {latestPosts.slice(0, 4).map((post, index) => (
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
                    <h4 className="fw-bold hoverHead quickText h5">
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
                </div>{" "}
              </a>
            ))}
          </div>

          <div className="col-md-3">
            <div className=" borderB paddings">
              <h5 className="fw-bold">Related Articles</h5>
            </div>
            <div>
              {data.slice(0, 4).map((post, index) => (
                <div key={index} className="paddings">
                  <a href={`/${post.cat_slug}/${post.post_name}`}>
                    <h5 className="fw-bold h5 hoverHead line-clamp">
                      {post.post_title}
                    </h5>
                  </a>
                  <p style={{ fontSize: "13px" }}>
                    By <span className="fw-bold">{post.post_author}</span> |{" "}
                    {new Date(post.post_date).toLocaleDateString(
                      undefined,
                      options
                    )}
                  </p>

                  <div className="d-flex gap-3">
                    <div style={{ width: "90%" }}>
                      <p
                        className="just-text line-clamp mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        {post.post_content}
                      </p>
                    </div>

                    <div>
                      <span className="numb">{index + 1}</span>
                    </div>
                  </div>

                  <p className="hr" />
                </div>
              ))}
            </div>

            <div className="marTop sticky-top" style={{ height: "" }}>
              {/* Content for the 30% column */}
              {/* <p className="bllack">340*1500</p> */}
              {advertisementData && advertisementData.length > 0 && (
                <a href={`/${advertisementData[0].dest_url}`}>
                  {" "}
                  <img
                    style={{ height: "", width: "100%" }}
                    src={`http://192.168.17.8:3000/uploads/promo_img/${advertisementData[0].banner_img}`}
                    alt={advertisementData[0].banner_name}
                  />{" "}
                </a>
              )}
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
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div>
              {advertisementData && advertisementData.length > 0 && (
                <a href={`/${advertisementData[2].dest_url}`}>
                  {" "}
                  <img
                    style={{ width: "100%" }}
                    src={`http://192.168.17.8:3000/uploads/promo_img/${advertisementData[2].banner_img}`}
                    alt={advertisementData[2].banner_name}
                  />{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchart;
