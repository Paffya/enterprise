import React, { useState,  useRef,useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DropComp from "./LatestData/DropComp";
import "../Styles/Navbar.css";

function HeaderComp() {
  const [openData, setOpenData] = useState(null); // Change initial state to null for better control
  const dropdownRef = useRef(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenData(null); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    if (openData) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openData]);

  const toggleData = (data) => {
    setOpenData((prevData) => (prevData === data ? null : data)); 
  };

  return (
    <>
      <div className="main-header">
        <ul className="bothsidenav borderB">
          <li
            className="hover-underline-animation hoverHead"
            onClick={() => toggleData("Latest")}
          >
            Latest<span className="smalltraingle"> &#x25BC;</span>
            {!isLargeScreen && openData === "Latest" && (
              <div className="mobile-dropdown open">
                <DropComp
                  section="Latest"
                  maxItems={1}
                  className="mobile-screen"
                />
              </div>
            )}
          </li>
          <li
            className="hover-underline-animation hoverHead"
            onClick={() => toggleData("Leadership")}
          >
            Leadership<span className="smalltraingle"> &#x25BC;</span>
            {!isLargeScreen && openData === "Leadership" && (
              <div className="mobile-dropdown open">
                <DropComp
                  section="Leadership"
                  maxItems={1}
                  className="mobile-screen"
                />
              </div>
            )}
          </li>
          <li
            className="hover-underline-animation hoverHead"
            onClick={() => toggleData("Features")}
          >
            Features<span className="smalltraingle"> &#x25BC;</span>
            {!isLargeScreen && openData === "Fatures" && (
              <div className="mobile-dropdown open">
                <DropComp
                  section="Features"
                  maxItems={1}
                  className="mobile-screen"
                />
              </div>
            )}
          </li>
          <li className="hover-underline-animation hoverHead">Resources</li>
          <li className="hover-underline-animation hoverHead">
            <a className="a-tag hoverHead" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {isLargeScreen && openData && (
        <div ref={dropdownRef} className="large-screen">
          <DropComp section={openData} maxItems={3} />
        </div>
      )}
    </>
  );
}

export default HeaderComp;
