import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Scrolltop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className='ScroolTopBtn' onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} border={"transparent"}/>
    </button>
  );
};

export default Scrolltop;
