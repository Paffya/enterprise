import React, { useEffect, useState } from "react";
import { API_ROOT } from "../apiConfig";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sitemap = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/category/subcatlist`);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError(
          error.message || "An error occurred while fetching menu items."
        );
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <div className="container container-max">
        <div className="row">
          <div className="col-md-12">
            <h1 className="h5 fw-bold mt-4 borderB">Site Map</h1>
          </div>
        </div>
      </div>

      <div className="container container-max">
        <div className="row">
          <div className="col-md-8">
            <div>
              <ul>
                <li>
                  <h6 className="h6 ">
                    <a href="/" className="text-black  hoverHead ">
                      Home
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a href="/about" className="text-black  hoverHead ">
                      About
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a href="/connect" className="text-black  hoverHead ">
                      Contact Us
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a href="/opt-out-form" className="text-black  hoverHead ">
                      Do Not Sell My Information
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a href="/privacy" className="text-black  hoverHead ">
                      Privacy Policy
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://resources.enterprisetalk.com"
                      className="text-black  hoverHead "
                    >
                      Resources
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/news"
                      className="text-black  hoverHead "
                    >
                      News
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/featured"
                      className="text-black  hoverHead "
                    >
                      Article
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/podcasts"
                      className="text-black  hoverHead "
                    >
                      Podcasts
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/interview"
                      className="text-black  hoverHead "
                    >
                      Featured Interview
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/guest-author"
                      className="text-black  hoverHead "
                    >
                      Guest Posts
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/featured"
                      className="text-black  hoverHead "
                    >
                      Articles
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/future-ready"
                      className="text-black  hoverHead "
                    >
                      Future Ready
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">
                    <a
                      href="https://enterprisetalk.com/topic/learning-center"
                      className="text-black  hoverHead "
                    >
                      Learning Center
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="h6 ">Sub-Category</h6>
                </li>

                <ul>
                  {error ? (
                    <li>
                      <p>Error fetching menu items: {error}</p>
                    </li>
                  ) : (
                    menuItems.map((menuItem) => (
                      <li key={menuItem.id}>
                        <h6 className="h6">
                          <a
                            className="menu-item hoverHead text-black"
                            href={`/tag/${menuItem.subcat_slug}`}
                          >
                            {menuItem.subcat_name}
                          </a>
                        </h6>
                      </li>
                    ))
                  )}
                </ul>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center">
              <div class="border">
                <h4>Contact Us</h4>
              </div>

              <div class="border mt-2">
                <div class="d-flex py-2 ps-3 align-items-center">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                  <p class="ms-4 mt-1">Available 24/7</p>
                </div>
              </div>

              <div class="border mt-2">
                <div class="d-flex py-2 ps-3 align-items-center">
               
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <p class="ms-4 mt-1">
                    <a href="tel:+18005462816" className="text-black">1800-546-2816</a>
                  </p>
                </div>
              </div>

              <div class="border mt-2">
                <div class="d-flex py-2 ps-3 align-items-center">
              
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <p class="ms-4 mt-1">
                    <a href="mailto:media@enterprisetalk.com" className="text-black">
                      Media@Enterprisetalk.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="border mt-2">
                <div class="d-flex py-2 ps-3 align-items-center">
                 
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <p class="ms-4 mt-1">
                    <a href="mailto:sales@enterpriseTalk.com" className="text-black">
                      Sales@EnterpriseTalk.com
                    </a>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
