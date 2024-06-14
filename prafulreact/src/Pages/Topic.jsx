import React, { useState, useEffect } from "react";
import "../Styles/Article.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { API_ROOT, webPath } from "../apiConfig";
import getYouTubeID from "get-youtube-id";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LazyLoad from "react-lazyload";

import shareIcon from "../Images/shareIcon.png";
import SocialShare from "../Components/SocialShare";


const Searchart = () => {
  const [className, setClassName] = useState("");
  const [className1, setClassName1] = useState("");
  const [className2, setClassName2] = useState("");

  useEffect(() => {
    const sections = 5;
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName("");
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName("loaded");
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
        setClassName1("");
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName1("loaded1");
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          window.removeEventListener("scroll", handleScroll);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = 5;
    let currentSection = 1;

    const setSectionClassName = () => {
      const removeTimer = setTimeout(() => {
        setClassName2("");
      }, 0);

      const setTimer = setTimeout(() => {
        setClassName2("loaded2");
        currentSection++;

        if (currentSection <= sections) {
          setSectionClassName();
        } else {
          // Remove scroll event listener if currentSection * 190 is reached
          window.removeEventListener("scroll", handleScroll);
        }
      }, currentSection * 190);

      return () => {
        clearTimeout(removeTimer);
        clearTimeout(setTimer);
      };
    };

    const handleScroll = () => {
      // Add your logic here to determine when to trigger the code based on scroll
      if (window.scrollY > 190) {
        // Example condition: execute code when scrolled more than 100 pixels
        setSectionClassName();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  const [userIp, setUserIp] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // user's IP address from the ipify service
        const ipResponse = await fetch("https://api64.ipify.org?format=json");

        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          const userIp = ipData.ip;
          setUserIp(userIp);

          // Now, you can use userIp as needed in your application
          // console.log('User IP Address:', userIp);

          const response = await fetch(
            `${API_ROOT}/api/post/postdetails/${cat_slug}/${post_name}`
          );

          

          if (!response.ok) {
            // throw new Error(`HTTP error! Status: ${response.status}`);

            // Redirect to 404 Not Found page
            window.location.href = "/NotFound"; // Replace '/404' with the actual path to your 404 page
            return; // Stop further execution
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

          const countResponse = await fetch(
            `${API_ROOT}/api/post/post_count/` + data.result[0].id,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(postDataForCount),
            }
          );

          if (!countResponse.ok) {
            throw new Error(`HTTP error! Status: ${countResponse.status}`);
          }

          const countData = await countResponse.json();
         
        } else {
          console.error("Error fetching IP address:", ipResponse.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setPostLoading(false);
      }
    };

    fetchData();
  }, [cat_slug, post_name]);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get(`${API_ROOT}/api/post/latest`)
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
          `${API_ROOT}/api/post/asidetopic/${cat_slug}`
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
          `${API_ROOT}/api/advertisement/get_active`
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
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching data

        const response = await axios.get(`${API_ROOT}/api/author/${authorId}`);
        setAuthorData(response.data.result[0]);
      } catch (error) {
        console.error("Error fetching author data:", error.message);
        // Handle error state if needed
      } finally {
        setLoading(false); // Update loading state after fetching data
      }
    };

    if (authorId) {
      // Check if authorId is truthy
      fetchAuthorData();
    }
  }, [authorId]);

  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = htmlContent;

    let index = 1;
    let subIndex = 0;

    const headingsList = Array.from(
      container.querySelectorAll("h1, h2, h3")
    ).map((heading, i) => {
      let text = heading.innerText;
      let id = heading.id || `heading-${i}`;

      if (heading.tagName === "H2") {
        text = (
          <span style={{ fontWeight: "600" }}>
            {index}. {text}
          </span>
        );
        index++;
        subIndex = 0; // Reset subindex for each new H2
      } else if (heading.tagName === "H3") {
        subIndex++;
        // text = `${index - 1}.${subIndex} ${text}`;
        text = (
          <span style={{ marginLeft: "20px" }}>
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
    // console.log('scrollToHeading called with id:', id);

    if (element) {
      // console.log('Element found:', element);
      element.scrollIntoView({ behavior: "smooth" });
      // window.scrollBy(0, -130);
      setTimeout(() => {
        window.scrollBy(0, -90); // Adjust the value (-100) to set the desired distance from the top
      }, 700); // Adjust the delay if needed to ensure it's after the smooth scrolling
    } else {
      console.log("Element not found with id:", id);
    }
  };

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;

  // Get all h1, h2, h3 elements
  const heading = tempDiv.querySelectorAll("h2, h3");

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
  // console.log("actived",activeHeadingId)

  if (!postData || postData.length === 0) {
    return null; // Or you can render a placeholder or loading indicator
  }

  // Extract the YouTube video ID if the podcast link is available
  const videoId = postData[0].podcast_link
    ? getYouTubeID(postData[0].podcast_link)
    : "";

  const canonicalUrl = `https://enterprisetalk.com/${cat_slug}/${post_name}`;

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: postData[0].post_title,
    description: postData[0].meta_description,
    datePublished: new Date(postData[0].post_date).toLocaleDateString(
      undefined,
      options
    ),
    dateModified: new Date(postData[0].post_date).toLocaleDateString(
      undefined,
      options
    ),
    author: {
      "@type": "Person",
      name: postData[0].post_author,
    },
    publisher: {
      "@type": "Organization",
      name: "Enterprise Talk",
      logo: {
        "@type": "ImageObject",
        url: "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp",
      },
    },
    image: {
      "@type": "ImageObject",
      url: `${webPath}${postData[0].banner_img}`,
      height: "844 px",
      width: "1500 px",
    },
    articleBody: "Full text of the article",
  };

  const schemaData2 = {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    headline: postData[0].post_title,
    author: postData[0].post_author,
    datePublished: new Date(postData[0].post_date).toLocaleDateString(
      undefined,
      options
    ),
    description: postData[0].meta_description,
  };

  const schemaData3 = {
    "@context": "http://schema.org",
    "@type": "SocialMediaPosting",
    headline: postData[0].post_title,
    datePublished: new Date(postData[0].post_date).toLocaleDateString(
      undefined,
      options
    ),
    author: {
      "@type": "Person",
      name: postData[0].post_author,
    },
    publisher: {
      "@type": "Organization",
      name: "Enterprise Talk",
      logo: {
        "@type": "ImageObject",
        url: "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  const schemaData4 = {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    url: `${webPath}${postData[0].banner_img}`,
    caption: "",
    description: postData[0].meta_description,
  };

  const schemaData5 = {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    name: postData[0].post_title,
    description: postData[0].meta_description,
    duration: "Video Duration in ISO 8601 format", // Replace with actual video duration
    thumbnailUrl: postData[0].podcast_link,
    uploadDate: new Date(postData[0].post_date).toLocaleDateString(
      undefined,
      options
    ),
    publisher: {
      "@type": "Organization",
      name: "Enterprise Talk",
      logo: {
        "@type": "ImageObject",
        url: "https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp",
      },
    },
  };

  

  function formatImageUrl(url) {
 
    const parts = url.split('/');
    
   
    let filename = parts.pop();
    
   
    filename = encodeURIComponent(filename);
    

    const modifiedUrl = parts.join('/') + '/' + filename;
    
    return modifiedUrl;
}

const imageUrl = `${webPath}${postData[0].banner_img}`;
const formattedImageUrl = formatImageUrl(imageUrl);


 

const ogTitle = postData[0].post_title;
const ogDescription =  postData[0].post_title;
const ogImage  = formattedImageUrl;
const ogUrl = `https://enterprisetalk.com/${cat_slug}/${post_name}`;
// console.log(ogUrl)
 

 

  return (
    <div id="root">
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <title>{ogTitle}</title>
      <meta name="title" property="og:title" content={ogTitle} />
      <meta property="og:type" content="PostDetails" />
      <meta name="image" property="og:image" content={ogImage} />
      <meta
        name="description"
        property="og:description"
        content={ogDescription}
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image:width" content="844" />
      <meta property="og:image:height" content="172" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content="https://twitter.com/Enterprise_Talk"
      ></meta>
      <link rel="canonical" href={ogUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      <HelmetProvider id="root">
        <Helmet id="root">

        <title>{ogTitle}</title>
      <meta name="title" property="og:title" content={ogTitle} />
      <meta property="og:type" content="PostDetails"  />
      <meta name="image" property="og:image" content={ogImage}  />
      <meta
        name="description"
        property="og:description"
        content={ogDescription}
        
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image:width" content="844" />
      <meta property="og:image:height" content="172" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://twitter.com/Enterprise_Talk" />
      <link rel="canonical" href={ogUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />


          <script type="application/ld+json">
            {JSON.stringify(schemaData, null, 2)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(schemaData2, null, 2)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(schemaData3, null, 2)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(schemaData4, null, 2)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(schemaData5, null, 2)}
          </script>
        </Helmet>
      </HelmetProvider>

      <p style={{ display: "none" }}>{userIp}</p>
      <LazyLoad className={className}>
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
                    <h1 className="fw-bold mt-1 h2 ">
                      {postData[0].post_title}
                    </h1>

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

                      <div className="gap-1 d-flex">
                        <button className="share-btn">
                          <img
                            src={shareIcon}
                            alt="share"
                            style={{ width: "23px", padding: "1px" }}
                          />
                        </button>

                        {/* <LinkedinShareButton url={shareUrl} title={title} > < LinkedinIcon size={32} round={true} /></LinkedinShareButton> */}

                        <SocialShare
                          // title={ogTitle}
                          url={ogUrl}
                          // ogImage={ogImage}
                        />
                      </div>
                    </div>
                  </div>
                  {postData[0].banner_img && postData[0].banner_show === 1 && (
                    <div className="mt-3">
                      <img
                        className="topicImg"
                        src={`${webPath}${postData[0].banner_img}?width=700`}
                        alt={postData[0].post_title}
                      />
                    </div>
                  )}

                  {/* src={
                        postData[0].banner_img.includes("enterprisetalk")
                          ? postData[0].banner_img
                          : `https://staging.enterprisetalk.com${postData[0].banner_img}`
                      } */}

                  {/* <div className="mt-3">
                  <img
                    className="topicImg"
                    src={`${API_ROOT}/uploads/${postData[0].banner_img}`}
                    alt={postData[0].post_title}
                  />
                </div> */}

                  <div style={{ fontSize: "14px" }}>
                    <p className="paddings">
                      {headings.length > 0 && (
                        <div
                          className="contentTableBox mb-5"
                          onClick={handleHeaderClick}
                        >
                          <h2 className="fw-bold px-1 h4 clippath">
                            <div className="d-flex justify-content-between ">
                              <div
                                className="mb-1"
                                style={{ cursor: "pointer" }}
                              >
                                Table of Contents
                              </div>{" "}
                              <div
                                style={{ cursor: "pointer" }}
                                className="px-2"
                              >
                                <FontAwesomeIcon icon={faBars} />
                              </div>
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
                                      className={`text-black mb-1 backLine hover-underline-animations ${
                                        activeHeadingId === heading.id
                                          ? "actived"
                                          : ""
                                      }`}
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
                      {postData[0].podcast_link && (
                        <div className="video-responsive">
                          <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        </div>
                      )}

                      <div
                        className="content mt-2"
                        dangerouslySetInnerHTML={{ __html: updatedHtmlContent }}
                      />
                      {/* <div className="content mt-2">{updatedHtmlContent}</div> */}
                      {/* <div
                      className="content mt-2"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    /> */}
                    </p>
                  </div>

                  <div
                    className="ArticleBox mt-5 mb-5"
                    style={{ alignItems: "center" }}
                  >
                    {loading ? (
                      <p></p> // Display loading message while fetching data
                    ) : (
                      <>
                        <div>
                          <img
                            className="ArticleImg"
                            src={`${webPath}${
                              authorData?.author_photo || "default-author.jpg"
                            }?width=300`}
                            alt={authorData?.author_name}
                          />
                        </div>
                        <div style={{ fontSize: "14px", padding: "10px" }}>
                          <h2 className="fw-bold h6">
                            {authorData?.author_display_name}
                          </h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: authorData?.author_description,
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
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
                        src={`${webPath}${post.banner_img}?width=300`}
                        alt={post.post_title}
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
                      <h5
                        className="fw-bold h5 hoverHead line-clamp"
                        title={post.post_title}
                      >
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
                  <a href={`${advertisementData[0].dest_url}`}>
                    {" "}
                    <img
                      style={{ height: "", width: "100%" }}
                      src={`${webPath}${advertisementData[0].banner_img}?width=400`}
                      alt={advertisementData[0].banner_name}
                    />{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad className={className1}>
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
      </LazyLoad>

      <LazyLoad className={className2}>
        <div className="container container-max ">
          <div className="row mt-5 spaceincontentbottm">
            <div className="col-md-12 mb-2 borderB">
              <div>
                {advertisementData && advertisementData.length > 0 && (
                  <a href={`${advertisementData[2].dest_url}`}>
                    {" "}
                    <img
                      style={{ width: "100%" }}
                      src={`${webPath}${advertisementData[2].banner_img}`}
                      alt={advertisementData[2].banner_name}
                    />{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Searchart;