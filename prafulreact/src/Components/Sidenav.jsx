import React, { useState, useEffect } from 'react';
import "../Styles/Content.css";

const Sidenav = () => {
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [activeLink, setActiveLink] = useState('');

 

  const closeNav = () => {
    setSidenavWidth(0);
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };


  const [show, setShow] = useState(false);

  const handleToggleSidenav = () => {
    const newWidth = show ? 0 : 125 ;
    setSidenavWidth(newWidth);
    setShow(!show);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidenav = document.getElementById('mySidenav');
      const main = document.getElementById('main');

      if (sidenav && main && !sidenav.contains(event.target) && !main.contains(event.target)) {
        closeNav();
      }
    };

    

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
    
  }, []);



  
  return (
    <>
      {/* Your content here */}
      <div id='main' className='DesktopResponsive ' style={{ textAlign:"end", marginTop:"-30px", position:"fixed", left:"98%", top:"300px"}}>
        {/* Use any element to open the sidenav */}
        {/* <span onClick={handleToggleSidenav} style={{cursor:"pointer"}} className=''><FontAwesomeIcon icon={faBars}  size="2xl" /></span> */}
        <span onClick={handleToggleSidenav} style={{cursor:"pointer",writingMode: 'vertical-rl',transform:"rotateZ(180deg)"}} className='verticalCat' >Category</span>
      </div>

      {/* Side navigation */}
      <div id="mySidenav" className="sidenav DesktopResponsive"  style={{ height: `${sidenavWidth}px` }}>
        {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
        <a href="#news" className={` ${activeLink === 'news' ? 'active' : ''}`}
        onClick={() => handleLinkClick('news')} >News</a>

              <a href="#article" className={` ${activeLink === 'article' ? 'active' : ''}`}
        onClick={() => handleLinkClick('article')}>Article</a>

              <a href="#quick" className={` ${activeLink === 'QuickBytes' ? 'active' : ''}`}
        onClick={() => handleLinkClick('QuickBytes')}>Quick Bytes</a>

              <a href="#podcast" className={` ${activeLink === 'podcasts' ? 'active' : ''}`}
        onClick={() => handleLinkClick('podcasts')}>Podcasts</a>

              <a href="#hotseat" className={` ${activeLink === 'hot' ? 'active' : ''}`}
        onClick={() => handleLinkClick('hot')}>Hot Seats</a>
              
              <a href="#future" className={` ${activeLink === 'future' ? 'active' : ''}`}
        onClick={() => handleLinkClick('future')}>Future Ready</a>

              <a href="#guest" className={` ${activeLink === 'guest' ? 'active' : ''}`}
        onClick={() => handleLinkClick('guest')}>Guest Author</a>
        
              <a href="#learning" className={` ${activeLink === 'learning' ? 'active' : ''}`}
        onClick={() => handleLinkClick('learning')}>Learning Center</a>
      </div>
    </>
  );
};

export default Sidenav;
