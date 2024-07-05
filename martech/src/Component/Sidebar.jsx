import React, { useState, useEffect, useRef, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Sidebar.css";
import HeaderComp from "./HeaderComp";
import { SearchComp } from "./SearchComp";
import { Subscribe } from "./Subscribe";

const menuData = [
  "Analytics",
  "Artificial intelligence",
  "Big data",
  "Augmented / Virtual mixed / reality",
  "Blockchain",
  "CRX",
  "Cyber Security",
  "Cloud Computing",
  "Data centers",
  "Innovation",
  "Data Management",
  "Marketing tools",
  "Marketing AI",
  "Mobility",
  "Social Media",
  "Analytics",
  "Artificial intelligence",
  "Big data",
  "Augmented / Virtual mixed / reality",
  "Blockchain",
  "CRX",
  "Cyber Security",
  "Cloud Computing",
  "Data centers",
  "Innovation",
  "Data Management",
  "Mobility",
  "Social Media",
  "Cyber Security",
  "Cloud Computing",
  "Marketing tools",
  "Marketing AI",
 
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    console.log("toggle clicked");
    console.log("Before toggle:", isOpen);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    // setIsOpen(!isOpen);
    console.log("After toggle:", isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (!event.target.closest(".nav-title")) {
        console.log("Clicked outside sidebar and navbar");
        setIsOpen(false);
        // Do not close sidebar if clicked inside .main-page
      } else {
        console.log("Clicked outside sidebar and .main-page");
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <FaBars
        className="menu-icon"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      />

      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        role="navigation"
        aria-label="Main menu"
      >
        <FaTimes
          className="close-btn"
          onClick={toggleSidebar}
          aria-label="Close menu"
        />
        <div className="search-comp-display mt-5">
          <SearchComp />
        </div>

        <div className="bb">
          <HeaderComp />
        </div>

        <div>
          <ul className="menu-list mb-5">
            {menuData.map((item, index) => (
              <li key={index}>
                <a className="a-tag" href="/tag">{item}</a>
              </li>
            ))}
            
            <div className="search-comp-display">
            <Subscribe/>
            </div>
           
          </ul>


          
        </div>


        
      </div>
    </div>
  );
};

export default memo(Sidebar);
