import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { FaSearch, FaTimes } from 'react-icons/fa';

const debouncedHandleClickOutside = debounce((event, setIsOpen, searchContainerRef) => {
  if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
    setIsOpen(false);
  }
}, 100);

export const SearchComp = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially closed
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      debouncedHandleClickOutside(event, setIsOpen, searchContainerRef);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => setIsOpen(prevIsOpen => !prevIsOpen);

  const handleSearchIconClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    toggleSearch();
  };

  return (
    <div className="search-container mt-1" ref={searchContainerRef}>
      {isOpen ? (
        <input
          type="text"
          placeholder="Search Here"
          className="search-input"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <FaSearch className="search-icon" onClick={handleSearchIconClick} />
      )}
      {isOpen && <FaTimes className="close-icon" onClick={toggleSearch} />}
    </div>
  );
};