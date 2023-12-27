import React, { useState, useEffect, useCallback } from "react";
import { Nav, Form } from "react-bootstrap";
import useOnclickOutside from "react-cool-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";


const Search = () => {
  


  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setSearch(!search);
  };

  const closeSearch = () => {
    setSearch(false);
    setSearchQuery(""); // Clear the searchQuery
  };

  const ref = useOnclickOutside(() => {
    if (searchQuery.trim() !== "") {
      fetchData();
    }
    closeSearch();
    
  });

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      // console.log("Sending search query:", searchQuery);
      const response = await fetch(`http://192.168.17.8:3000/api/post/navsearch/${searchQuery}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

        

      if (data.searchQuery === searchQuery) {
        setSearchResults(data.postData);
      } else {
        // If the received data doesn't match the current search query, clear the results
        setSearchResults([]);
      }
    } catch (error) {
      setSearchResults([]);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchData();
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, fetchData]);

  // const handleKeyPress = (e) => {
  //   // Check if the pressed key is Enter (key code 13)
  //   if (e.key === 'Enter') {
  //     // Check if search is true before navigating
  //     if (search) {
  //       // Replace 'yourHref' with the actual href you want to navigate to
  //       window.location.href = `/Searchlist/${searchQuery}`;
        
  //     }
  //   }
  // };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === 'Enter') {
     
      e.preventDefault();
  
      // Check if search is true before navigating
      if (search) {
       
        // console.log('Performing search with query:', searchQuery);
  
        // Replace 'yourHref' with the actual href you want to navigate to
        window.location.href = `/search/all/${searchQuery}`;
      }
    }
  };


  

  

  return (
    <Nav className="my-auto" ref={ref}>
      <Form
        className={
          search === false
            ? "searchbar " //fadeOutWidth
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar"
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          
        )}
        

        {search && searchQuery.trim() !== "" && (
          <div className="searcMainBox">

            {loading && <p></p>}
            {!loading && searchResults.length > 0 && (
              <>
                <ul className="searchBox">
                  {searchResults.map((result) => (
                    <a className="text-black" href={`/${result.cat_slug}/${result.post_name}`} key={result.id}>
                   <li  className="searchField borderB hoverHead">{result.post_title}</li>
                    </a>
                  ))}
                   
                  <a href={`/search/all/${searchQuery}`} className="allResult" 
                  >View All Results</a>
                </ul>
              </>
            )}
            <div>
              {!loading && searchResults.length === 0 && searchQuery.trim() !== "" && (
                <p></p>
              )}
            </div>
          </div>
        )}
        <div
          className={
            search === true
              ? "icon-bg fadeOut"
              : search === false
              ? "icon-bg "
              : "icon-bg"
          }
        >
          {search !== true ? (
            // Opening button (O)
            <FontAwesomeIcon
              onClick={toggle}
              className={
                search === true
                  ? "search-icon fadeOut"
                  : search === false
                  ? "search-icon " //fadeIn
                  : "search-icon"
              }
              icon={faSearch}
            />
          ) : (
            // Close button (X)
            <FontAwesomeIcon
              onClick={closeSearch}
              className="croossIcon"
              icon={faTimes}
            />
          )}
        </div>
      </Form>
    </Nav>
  );
};

export default Search;



