import React, {useEffect, useState} from 'react';
import { Tab, Nav, Col, Row, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams  } from 'react-router-dom';
import axios from 'axios';


const Searchtab = () => {

  const { cat, subcat, searchVal } = useParams();
 
  const options = {
    
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  
  const [postData, setPostData] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `http://192.168.17.8:3000/api/post/search/${cat}/${searchVal}`;

        if (subcat) {
          apiUrl = `/${subcat}`;
        }

        apiUrl += `?page=${pagination.page}&limit=${pagination.limit}`;

        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        console.log(jsonData)
        setActiveCat(jsonData.result.category);

        if (jsonData.result.postData) {
          const { postData, pagination: { totalItems, totalPages } } = jsonData.result;

          setPostData(jsonData.result.postData);
          setPagination((prevPagination) => ({
            ...prevPagination,
            totalItems,
            totalPages,
          }));
        } else {
          console.error('Invalid JSON data structure:', jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pagination.page, pagination.limit, cat, subcat, searchVal]);

  const handlePageChange = (newPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));
  };


  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.17.8:3000/api/category/all');
        const data = await response.json();
        setCategories(data.category);// Assuming the API response is an array of categories
      } catch (error) {
        console.error('Error fetching data:', error);
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

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };
 

  const [advertisementData, setAdvertisementData] = useState([]);

  useEffect(() => {
    const fetchAdvertisementData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/advertisement/get_active');
        setAdvertisementData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching advertisement data:', error);
      }
    };
  
    fetchAdvertisementData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  

  
 


  return (
    <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
      <Row className="clearfix">
        <Col sm={12}>
        <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="Filter" className='tabButton' disabled>Filter :</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item >
          <Nav.Link  className='tabButton text-black backgRed' href={`/search/all/${searchVal}`}>All</Nav.Link>
        </Nav.Item> */}
        
      {/* Dynamically generate tabs based on fetched data */}
      {categories.slice(0,9).map((category, index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index} className={`tabButton text-black backgRed ${category.cat_slug === cat ? 'isActive' : ''}`} href={`/search/${category.cat_slug}/${searchVal}`}>{category.cat_name}</Nav.Link>
        </Nav.Item>
      ))}

      <Nav.Item>
        <NavDropdown title="More" id="nav-dropdown-within-tab" className='droptabs text-black colorblack'>
        {categories.slice(10).map((category, index) => (
          <NavDropdown.Item Key="index" className={`colorblack backgRed ${category.cat_slug === cat ? 'isActive' : ''}`} href={`/search/${category.cat_slug}/${searchVal}`}>{category.cat_name}</NavDropdown.Item>
         
          ))}
        </NavDropdown>  
      </Nav.Item>
    </Nav>
        </Col>


        
        <Col sm={12}>
          <Tab.Content>
            
            <Tab.Pane eventKey="first">
   
                <div className='flexAddver mt-4' style={{gap:"11px"}}>

                {postData.slice(0, 3).map((post, result) => (     
<div  className='addvert ' >
<div>
<a href={`/${post.cat_slug}/${post.post_name}`}> 
<figure>
<img  style={{width:"100%", borderRadius:"20px",  height: "auto", objectFit:"cover"}} src={post.banner_img} alt={post.banner_alt} />
</figure>
</a>
</div>
<div className='padLR' id='datas'>
<a href={`/${post.cat_slug}/${post.post_name}`}><h4 className='fw-bold h5 mt-3 hoverHead line-clamp'>{post.post_title}</h4></a>
<p style={{ fontSize: "13px" }}>
              By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
            <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{post.post_title}</p>
</div>
</div>
                ))}

{/* <div className='borderR'></div> */}
{/* <div  className='addvert zoom-in'>
<div>
  <img style={{width:"100%" , borderRadius:"20px",  height: "auto", objectFit:"cover"}} src="https://workdesign.com/wp-content/uploads/2018/05/Marvin_Windows_HeadQuarters_031.jpg" alt="" />
</div>
<div className='padLR'>
<h4 className='fw-bold h5 mt-3 hoverHead'>Questel Plans for Growth by Expanding R&D and Manufacture</h4>
<p style={{ fontSize: "13px" }}>
              By <span className="fw-bold">John Smith</span> | 12
              sept 2023
            </p>
            <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum hic aliquid iusto incidunt perferendis laudantium nostrum culpa ratione laboriosam ipsam explicabo fugiat natus, cumque</p>
</div>
</div>


<div className='borderR'></div>
<div  className='addvert zoom-in'>
<div>
  <img style={{width:"100%" , borderRadius:"20px",  height: "auto", objectFit:"cover"}} src="https://officesnapshots.com/wp-content/uploads/2018/06/marvin-windows-doors-headquarters-eagan-13-1200x800.jpg" alt="" />
</div>
<div className='padLR'>
<h4 className='fw-bold h5 mt-3 hoverHead'>Questel Plans for Growth by Expanding R&D and Manufacture</h4>
<p style={{ fontSize: "13px" }}>
              By <span className="fw-bold">John Smith</span> | 12
              sept 2023
            </p>
            <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rerum hic aliquid iusto incidunt perferendis laudantium nostrum culpa ratione laboriosam ipsam explicabo fugiat natus, cumque</p>
</div>
</div> */}


                </div>

<div className='hr'></div>



                <div className=' ' >
  <div className="row mt-2">




    <div className="col-md-8">

    {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.latest.map((post, index) => (
            <div key={index}>
              <div className='paddings'>
                <Link to={"/Latest"}><h4 className='fw-bold h5 hoverHead'>{post.post_title}</h4></Link>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{post.post_author}</span> | {post.post_date}
                </p>
                <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                  {post.post_content}
                </p>
              </div>
              <p className='hr' />
            </div>
          ))}
        </div>
      )} */}



<div>
      {postData.slice(3,100).map((post) => (
       <a href={`/${post.cat_slug}/${post.post_name}`} > <div key={post.id} className='d-flex mt-3 mb-3 ' style={{ alignItems: 'center' }}>
          <div className='quickImgBox'>
            <img
              style={{ width: '90%', borderRadius: '14px' }}
              src={post.banner_img}
              alt={post.banner_alt}
            />
          </div>

          <div className='' style={{ width: '74%' }}>
           <h5 className='fw-bold hoverHead quickText h5'>{post.post_title}</h5>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
          </div>
        </div>
        </a>
      ))}

<div className='paginationBox mt-5'>
<a href="#datas" className='mt-1 mb-1'>
  <button
    className='PaginatinNextBtn'
    disabled={pagination.page === 1}
    onClick={() => handlePageChange(pagination.page - 1)}
  >
    <FontAwesomeIcon icon={faAngleLeft} />
  </button>
  </a>
  {calculatePageRange().map((page) => (
         <span
         
         >
           <button key={page}
           className={`${pagination.page === page ? 'isActives' : ''} fw-bold btn-pagination`}
           onClick={() => handlePageChange(page)}
           style={{cursor:"pointer"}}>{page}</button>
         </span>
      ))}
  {/* <span>{pagination.page + 1}</span>
  <span>{pagination.page + 2}</span>
  <span>{pagination.page + 3}</span>
  <span>{pagination.page + 4}</span> */}
  <a href="#datas" className='mt-1 mb-1'>
  <button
    className='PaginatinNextBtn'
    disabled={pagination.page === pagination.totalPages}
    onClick={() => handlePageChange(pagination.page + 1)}
  >
    <FontAwesomeIcon icon={faAngleRight} />
  </button>
  </a>
</div>
    </div>


  

   


    

    

    </div>



    <div className="col-md-4">
    <div >
    {advertisementData && advertisementData.length > 0 && (
   <a href={`/${advertisementData[0].dest_url}`}> <img style={{ width:"100%"}} src={`http://192.168.17.8:3000/uploads/ad_banner/${advertisementData[0].banner_img}`} alt={advertisementData[0].banner_name} /></a>
    )}
</div>
    </div>
  </div>
                </div>


                </Tab.Pane>



          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Searchtab;
