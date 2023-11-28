import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchData();
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchData = async () => {
    setLoading(true);
  
    try {
      console.log("Sending search query:", searchQuery);
      const response = await fetch(`http://192.168.17.8:3000/api/post/search/${searchQuery}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setSearchResults(data.postData.postData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Nav className="my-auto" ref={ref}>
      <Form
        className={
          search === false
            ? "searchbar fadeOutWidth"
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
            
          />
          
        )}
        

        {search && searchQuery.trim() !== "" && (
          <div className="searcMainBox">
            {loading && <p></p>}
            {!loading && searchResults.length > 0 && (
              <>
                <ul className="searchBox">
                  {searchResults.map((result) => (
                    <a className="text-black" href={`/topic/${result.id}`} key={result.id}>
                      <li className="searchField borderB hoverHead">{result.post_title}</li>
                    </a>
                  ))}
                   {searchResults.slice(0,1).map((result) => (
                  <a href={`/ContentCategory/${result.id}`}>View All Results</a>
                  ))}
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
              ? "icon-bg fadeIn"
              : "icon-bg"
          }
        >
          {search !== true ? (
            <FontAwesomeIcon
              onClick={toggle}
              className={
                search === true
                  ? "search-icon fadeOut"
                  : search === false
                  ? "search-icon fadeIn"
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


























// import React, { useState } from "react";
// import { Nav, Form } from "react-bootstrap";
// import useOnclickOutside from "react-cool-onclickoutside";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the faTimes icon

// const Search = () => {
//   const [search, setSearch] = useState();

//   const toggle = () => {
    
//     setSearch(!search);
//   };

//   const closeSearch = () => {
    
//     setSearch(false);
//   };
  
//   const ref = useOnclickOutside(() => {
    
//     if(search != undefined || search != null){
//       closeSearch();
//     }
   
//   });

//   return (
//     <Nav className="my-auto" ref={ref}>
//       <Form
//         className={
//           search === false
//             ? "searchbar fadeOutWidth"
//             : search === true
//             ? "searchbar fadeInWidth"
//             : "searchbar"
//         }
//       >
//         {search === true && (
//           <input
//             ref={ref}
//             className={
//               search === true
//                 ? "search-input fadeIn"
//                 : search === false
//                 ? "search-input fadeOut"
//                 : "search-input"
//             }
//             type="text"
//             name=""
//             placeholder="Search..."
//           />
//         )}
//         <div
//           className={
//             search === true
//               ? "icon-bg fadeOut"
//               : search === false
//               ? "icon-bg fadeIn"
//               : "icon-bg"
//           }
//         >
//           {search !== true ? (
//             <FontAwesomeIcon
//               onClick={toggle}
//               className={
//                 search === true
//                   ? "search-icon fadeOut"
//                   : search === false
//                   ? "search-icon fadeIn"
//                   : "search-icon"
//               }
//               icon={faSearch}
//             />
//           ) : (
//             // Close button (X)
//             <FontAwesomeIcon
//               onClick={closeSearch}
//               className="croossIcon"
//               icon={faTimes}
//             />
//           )}
//         </div>
//       </Form>
//     </Nav>
//   );
// };

// export default Search;
