import React, { useEffect, useState } from "react";
import { Tab, Nav, Col, Row, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import {API_ROOT,webPath} from "../apiConfig";

const Author = () => {
  const { cat, subcat } = useParams();

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const [postData, setPostData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${API_ROOT}/api/post/topic/${cat}`;

        if (subcat) {
          apiUrl += `/${subcat}`;
        }

        apiUrl += `?page=${pagination.page}&limit=${pagination.limit}`;

        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        // console.log('jsonData:', jsonData);

        // Check if jsonData is an object and has the expected structure
        if (
          typeof jsonData === "object" &&
          jsonData !== null &&
          "posts" in jsonData
        ) {
          const { posts } = jsonData;

          // Ensure posts is an object with postData and pagination properties
          if (
            typeof posts === "object" &&
            posts !== null &&
            "postData" in posts &&
            "pagination" in posts
          ) {
            const { postData, pagination } = posts;

            // Ensure pagination is an object with totalItems and totalPages properties
            if (
              typeof pagination === "object" &&
              pagination !== null &&
              "totalItems" in pagination &&
              "totalPages" in pagination
            ) {
              setPostData(postData);
              setPagination((prevPagination) => ({
                ...prevPagination,
                totalItems: pagination.totalItems,
                totalPages: pagination.totalPages,
              }));
            } else {
              console.error("Invalid pagination structure:", pagination);
            }
          } else {
            console.error("Invalid posts structure:", posts);
          }
        } else {
          console.error("Invalid JSON data structure:", jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pagination.page, pagination.limit, cat, subcat]);

  const handlePageChange = (newPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_ROOT}/api/category/subcatlist`
        );
        const data = await response.json();
        setCategories(data); // Assuming the API response is an array of categories
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  const calculatePageRange = () => {
    const totalPageCount = pagination.totalPages;
    const currentPage = pagination.page;

    const pageRange = 5; // Change this value to set the number of pages to display

    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    let endPage = startPage + pageRange - 1;

    if (endPage > totalPageCount) {
      endPage = totalPageCount;
      startPage = Math.max(1, endPage - pageRange + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <div className="container container-max">
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={12}>
            {/* style={{backgroundColor:"#ededed"}} */}
            <div className="container container-max mt-3 mb-3">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="fw-bold py-1 mt-3">ET BUREAU</h1>
                  <p>The platform covers e entire enterprise technology space-
                    including emerging technologies like RPA, AI, cloud,
                    automation, and the entire gamut of digital transformation
                    tools, strategies and management decisions</p>
                  <p className="py-4">
                    <a href="/" className="hoverHead redColor">
                      https://enterprisetalk.com/
                    </a>
                  </p>
                </div>

                <div className="authorImg col-md-4 py-3">
                  <img
                    className="imgofauthor"
                    src="https://th.bing.com/th/id/R.c9c9904d93d37519ff2dc20a5d49822d?rik=%2b8eGxeUiX6ieLw&riu=http%3a%2f%2fstatic6.businessinsider.com%2fimage%2f56055b87dd0895cb7b8b4645-2400%2felon-musk-387.jpg&ehk=yx7rWOWwuAqxzomXOnkBGh%2bBSK18QWQB8ZwlnXvYDrw%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="borderB"></div>

            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="Filter" className="tabButton" disabled>
                  Filter :
                </Nav.Link>
              </Nav.Item>

              {/* Dynamically generate tabs based on fetched data */}
              {categories.slice(0, 7).map((category, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    eventKey={index}
                    className={`tabButton text-black backgRed ${
                      category.subcat_slug === subcat ? "isActive" : ""
                    }`}
                    href={`/topic/${cat}/${category.subcat_slug}`}
                  >
                    {category.subcat_name}
                  </Nav.Link>
                </Nav.Item>
              ))}

              <Nav.Item>
                <NavDropdown
                  title="More"
                  id="nav-dropdown-within-tab"
                  className="droptabs text-black colorblack"
                >
                  {categories.slice(7).map((category, index) => (
                    <NavDropdown.Item
                      Key="index"
                      className={`colorblack backgRed ${
                        category.subcat_slug === subcat ? "isActive" : ""
                      }`}
                      href={`/topic/${cat}/${category.subcat_slug}`}
                    >
                      {category.subcat_name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="flexAddver mt-4" style={{ gap: "11px" }}>
                  {postData.slice(0, 3).map((post) => (
                    <div className="addvert hover01">
                      <a href={`/${post.cat_slug}/${post.post_name}`}>
                        <div>
                          <figure>
                            <img
                              style={{
                                width: "100%",
                                borderRadius: "20px",
                                height: "auto",
                                objectFit: "cover",
                              }}
                              src={`${webPath}${post.banner_img}`}
                              alt={post.banner_alt}
                            />
                          </figure>
                        </div>{" "}
                      </a>
                      <div className="padLR" id="datas">
                        <a href={`/${post.cat_slug}/${post.post_name}`}>
                          <h4 className="fw-bold h5 mt-3 hoverHead line-clamp">
                            {post.post_title}
                          </h4>
                        </a>
                        <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">{post.post_author}</span>{" "}
                          |{" "}
                          {new Date(post.post_date).toLocaleDateString(
                            undefined,
                            options
                          )}
                        </p>
                        <p
                          className="just-text line-clamp mt-1"
                          style={{ fontSize: "15px" }}
                        >
                          {post.post_title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hr"></div>

                <div className=" ">
                  <div className="row mt-2">
                    <div className="col-md-8">
                      <div>
                        {postData.slice(3, 100).map((post) => (
                          <a href={`/${post.cat_slug}/${post.post_name}`}>
                            {" "}
                            <div
                              key={post.id}
                              className="d-flex mt-3 mb-3 "
                              style={{ alignItems: "center" }}
                            >
                              <div className="quickImgBox">
                                <img
                                  style={{ width: "90%", borderRadius: "14px" }}
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div className="" style={{ width: "74%" }}>
                                <h5 className="fw-bold hoverHead quickText h5 line-clamp">
                                  {post.post_title}
                                </h5>
                                <p style={{ fontSize: "13px" }}>
                                  By{" "}
                                  <span className="fw-bold">
                                    {post.post_author}
                                  </span>{" "}
                                  |{" "}
                                  {new Date(post.post_date).toLocaleDateString(
                                    undefined,
                                    options
                                  )}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}

                        <div className="paginationBox mt-5">
                          <a href="#datas" className="mt-1 mb-1">
                            <button
                              className="PaginatinNextBtn"
                              disabled={pagination.page === 1}
                              onClick={() =>
                                handlePageChange(pagination.page - 1)
                              }
                            >
                              <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                          </a>
                          {calculatePageRange().map((page) => (
                            <span>
                              <button
                                key={page}
                                className={`${
                                  pagination.page === page ? "isActives" : ""
                                } fw-bold btn-pagination`}
                                onClick={() => handlePageChange(page)}
                                style={{ cursor: "pointer" }}
                              >
                                {page}
                              </button>
                            </span>
                          ))}
                          {/* <span>{pagination.page + 1}</span>
  <span>{pagination.page + 2}</span>
  <span>{pagination.page + 3}</span>
  <span>{pagination.page + 4}</span> */}
                          <a href="#datas" className="mt-1 mb-1">
                            <button
                              className="PaginatinNextBtn"
                              disabled={
                                pagination.page === pagination.totalPages
                              }
                              onClick={() =>
                                handlePageChange(pagination.page + 1)
                              }
                            >
                              <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div>
                        <a href="/">
                          {" "}
                          <img
                            style={{ width: "100%" }}
                            src="https://enterprisetalk.com/wp-content/uploads/2022/12/Advertorial-banner-2.jpg"
                            alt="banner"
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="second"></Tab.Pane>

              <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>

              <Tab.Pane eventKey="fourth">Tab 4 content</Tab.Pane>

              <Tab.Pane eventKey="fifth">Tab 5 content</Tab.Pane>

              <Tab.Pane eventKey="sixth">Tab 6 content</Tab.Pane>

              <Tab.Pane eventKey="seven">Tab 7 content</Tab.Pane>

              <Tab.Pane eventKey="eight">Tab 8 content</Tab.Pane>

              <Tab.Pane eventKey="3.1"></Tab.Pane>

              <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
              <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
              <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Author;
