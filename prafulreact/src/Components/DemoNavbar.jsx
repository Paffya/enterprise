import React, {useState, useEffect} from 'react'

const DemoNavbar = () => {

    const options = {
   
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      
      const [newsPosts, setNewsPosts] = useState([]);
      const [ArticlePosts, setArticlePosts] = useState([]);
    
      const [newsPod, setNewsPod] = useState([]);
      const [interPosts, setInterPosts] = useState([]);
      const [guestPosts, setGuestPosts] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://app-node.enterprisetalk.com:3000/api/post/leadership');
            const data = await response.json();
            setNewsPosts(data.newsData);
            setArticlePosts(data.artilceData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://app-node.enterprisetalk.com:3000/api/post/featured');
            const data = await response.json();
            setNewsPod(data.podcastData);
            setInterPosts(data.inteviewData);
            setGuestPosts(data.guestPostData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    
  
      

  return (
    <div><Navbar className="DesktopResponsive container-fluid container-max"  >
      
    <Navbar className="w-100" >
    {/* <Sidebar /> */}
      <Container>
      
        <Nav className="w-100 text-center d-flex justify-content-center gap-5">
          <Nav.Link className="text-black fw-bold hover-underline-animation ">
            <Link to="/Latest" className="text-black">Latest</Link>
          </Nav.Link>

          <NavDropdown  
          
            title="Leadership"
            id="basic-nav-dropdown"
            className="custom-dropdown hover-underline-animation "
          >
            <div className="dropdownLeader1">
              <div className="d-flex justify-content-evenly">
                <div className="borderR">
                  <p className="fw-bold text-center mt-2">News</p>

                  {newsPosts.map((post, index) => (
                  <NavDropdown.Item
                  href={`/topic/${post.id}`}
                    className="text-black borderB"
                    key={index}
                  >
                    <div
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "20px",
                        // borderBottom: "1px solid #bdbdbd",
                      }}
                    >
                      <div style={{ width: "34%" }} className="imgMob">
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "84px",
                            objectFit: "cover",
                          }}
                          src={post.banner_img}
                          alt=""
                        />
                      </div>

                      <div style={{ width: "61%" }} className="paraMob">
                        <h5
                          className="fw-bold line-clamp"
                          style={{ fontSize: "15px" , marginTop:"5px", marginBottom:"5px" }}
                        >
                         <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                        </h5>
                        <div className="DesktopResponsive ">
                          <p style={{ fontSize: "12px" }}>
                            By <span className="fw-bold">{post.post_author}</span> |
                           {new Date(post.post_date).toLocaleDateString(undefined, options)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  ))}

                 

                  <a href='/ContentCategory/news' className="text-black ended mx-4">
                    See more
                  </a>
         

                </div>

                {/* <div style={{ borderLeft: "1px solid #bdbdbd" }}></div> */}

                <div>
                  <p className="fw-bold text-center mt-2">Articles</p>
                  {ArticlePosts.map((post, index) => (
                  <NavDropdown.Item
                  href={`/topic/${post.id}`}
                    className="text-black borderB"
                    key={index}
                  >
                    <div
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "20px",
                        // borderBottom: "1px solid #bdbdbd",
                      }}
                    >
                      <div style={{ width: "34%" }} className="imgMob">
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "84px",
                            objectFit: "cover",
                          }}
                          src={post.banner_img}
                          alt=""
                        />
                      </div>

                      <div style={{ width: "61%" }} className="paraMob">
                        <h5 
                          className="fw-bold line-clamp"
                          style={{ fontSize: "15px", marginTop:"5px", marginBottom:"5px" }}
                        >
                         <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                        </h5>
                        <div className="DesktopResponsive ">
                          <p style={{ fontSize: "12px" }}>
                            By <span className="fw-bold">{post.post_author}</span> |
                            {new Date(post.post_date).toLocaleDateString(undefined, options)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  ))}

                 
                  

                  <a href="/ContentCategory/featured" className="text-black ended mx-4">
                    See more
                  </a>
                </div>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="Featured"
            id="basic-nav-dropdown"
            className="custom-dropdown hover-underline-animation "
          >
            <div className="dropdownLeader2">
              <div className="d-flex justify-content-evenly">
                <div className="borderR">
                  <p className="fw-bold text-center mt-2">Podcasts</p>
                  {newsPod.map((post, index) => (
                  <NavDropdown.Item
                  href={`/topic/${post.id}`}
                    className="text-black borderB"
                  >
                    <div
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "20px",
                        // borderBottom: "1px solid #bdbdbd",
                      }}
                    >
                      <div style={{ width: "34%" }} className="imgMob">
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "85px",
                            objectFit: "cover",
                          }}
                          src={post.banner_img}
                          alt=""
                        />
                      </div>

                      <div style={{ width: "61%" }} className="paraMob">
                        <h5
                          className="fw-bold line-clamp"
                          style={{ fontSize: "15px", marginBottom:'5px', marginTop:"5px" }}
                        >
                         <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                        </h5>
                        <div className="DesktopResponsive ">
                          <p style={{ fontSize: "12px" }}>
                            By <span className="fw-bold">{post.post_author}</span> |
                            {new Date(post.post_date).toLocaleDateString(undefined, options)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  ))}

                  

                  <a href="/ContentCategory/podcasts" className="text-black ended mx-4">
                    See more
                  </a>
                </div>

                {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                <div className="borderR">
                  <p className="fw-bold text-center mt-2">
                    featured Interview
                  </p>
                  {interPosts.map((post, index) => (
                  <NavDropdown.Item
                  href={`/topic/${post.id}`}
                    className="text-black borderB"
                  >
                    <div
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "20px",
                        // borderBottom: "1px solid #bdbdbd",
                      }}
                    >
                      <div style={{ width: "34%" }} className="imgMob">
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "85px",
                            objectFit: "cover",
                          }}
                          src={post.banner_img}
                          alt=""
                        />
                      </div>

                      <div style={{ width: "61%" }} className="paraMob">
                        <h5
                          className="fw-bold line-clamp"
                          style={{ fontSize: "15px" , marginBottom:'5px', marginTop:"5px" }}
                        >
                          <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                        </h5>
                        <div className="DesktopResponsive ">
                          <p style={{ fontSize: "12px" }}>
                            By <span className="fw-bold">{post.post_author}</span> |
                            {new Date(post.post_date).toLocaleDateString(undefined, options)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  ))}

                  

                  <a href="/ContentCategory/interview" className="text-black ended mx-4">
                    See more
                  </a>
                </div>

                {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                <div>
                  <p className="fw-bold text-center mt-2">Guest Posts</p>
                  {guestPosts.map((post, index) => (
                  <NavDropdown.Item
                  href={`/topic/${post.id}`}
                    className="text-black borderB"
                  >
                    <div
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "20px",
                        // borderBottom: "1px solid #bdbdbd",
                      }}
                    >
                      <div style={{ width: "34%" }} className="imgMob">
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: "85px",
                            objectFit: "cover",
                          }}
                          src={post.banner_img}
                          alt=""
                        />
                      </div>

                      <div style={{ width: "61%" }} className="paraMob">
                        <h5
                          className="fw-bold line-clamp"
                          style={{ fontSize: "15px", marginBottom:'5px', marginTop:"5px" }}
                        >
                          <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                        </h5>
                        <div className="DesktopResponsive ">
                          <p style={{ fontSize: "12px" }}>
                            By <span className="fw-bold">{post.post_author}</span> |
                            {new Date(post.post_date).toLocaleDateString(undefined, options)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  ))}

              

                  <a href="/ContentCategory/guest-author" className="text-black ended mx-4">
                    See more
                  </a>
                </div>
              </div>
            </div>
          </NavDropdown>

          
          <Nav.Link href="https://resources.enterprisetalk.com/" className="text-black fw-bold hover-underline-animation ">
            Resources
          </Nav.Link>
          <Nav.Link href="/Connect" className="text-black fw-bold hover-underline-animation ">
            Connect
          </Nav.Link>
        </Nav>
      </Container>
      
    </Navbar>
  </Navbar></div>
  )
}

export default DemoNavbar