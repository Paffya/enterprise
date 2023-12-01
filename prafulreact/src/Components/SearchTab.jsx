import React, {useEffect, useState} from 'react';
import { Tab, Nav, Col, Row, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


const Searchtab = () => {

  const { cat } = useParams();
  const options = {
    
    year: 'numeric',
    month: 'short',
    day: 'numeric',
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
        const response = await fetch(`http://192.168.17.8:3000/api/post/topic/${cat}?page=${pagination.page}&limit=${pagination.limit}`);
        const jsonData = await response.json();
  
        // console.log('jsonData:', jsonData);
  
        // Check if jsonData is an object and has the expected structure
        if (typeof jsonData === 'object' && jsonData !== null && 'posts' in jsonData) {
          const { posts } = jsonData;
  
          // Ensure posts is an object with postData and pagination properties
          if (typeof posts === 'object' && posts !== null && 'postData' in posts && 'pagination' in posts) {
            const { postData, pagination } = posts;
  
            // Ensure pagination is an object with totalItems and totalPages properties
            if (typeof pagination === 'object' && pagination !== null && 'totalItems' in pagination && 'totalPages' in pagination) {
              setPostData(postData);
              setPagination((prevPagination) => ({
                ...prevPagination,
                totalItems: pagination.totalItems,
                totalPages: pagination.totalPages,
              }));
            } else {
              console.error('Invalid pagination structure:', pagination);
            }
          } else {
            console.error('Invalid posts structure:', posts);
          }
        } else {
          console.error('Invalid JSON data structure:', jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [pagination.page, pagination.limit, cat]);

  const handlePageChange = (newPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: newPage,
    }));
  };





 


  return (
    <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
      <Row className="clearfix">
        <Col sm={12}>
          <Nav variant="tabs"> 



          <Nav.Item >

            
              <Nav.Link eventKey="Filter" className='tabButton' disabled>Filter :</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  eventKey="first" className='tabButton' >Analytics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='tabButton'>Artificial Intelligence</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='tabButton'>Automation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className='tabButton'>Big Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className='tabButton'>Cloud Computing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth" className='tabButton'>Generative AI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seven" className='tabButton'>Innovation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eight" className='tabButton'>IOT</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>







              <NavDropdown title="More"  id="nav-dropdown-within-tab">
                <NavDropdown.Item eventKey="3.1">Netwroking</NavDropdown.Item>
                <NavDropdown.Item eventKey="3.2">Fintech</NavDropdown.Item>
                <NavDropdown.Item eventKey="3.3">Mobility</NavDropdown.Item>
              </NavDropdown>



            </Nav.Item>




          </Nav>
        </Col>


        
        <Col sm={12}>
          <Tab.Content>
            
            <Tab.Pane eventKey="first">
   
                <div className='flexAddver mt-4' style={{gap:"11px"}}>

                {postData.slice(0, 3).map((post) => (     
<div  className='addvert zoom-in' >
<div>
  <img  style={{width:"100%", borderRadius:"20px", height:"250px", objectFit:"cover"}} src={post.banner_img} alt="" />
</div>
<div className='padLR'>
<h4 className='fw-bold h5 mt-3 hoverHead'>{post.post_title}</h4>
<p style={{ fontSize: "13px" }}>
              By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
            <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>{post.post_title}</p>
</div>
</div>
                ))}

<div className='borderR'></div>
{/* <div  className='addvert zoom-in'>
<div>
  <img style={{width:"100%" , borderRadius:"20px", height:"250px", objectFit:"cover"}} src="https://workdesign.com/wp-content/uploads/2018/05/Marvin_Windows_HeadQuarters_031.jpg" alt="" />
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
  <img style={{width:"100%" , borderRadius:"20px", height:"250px", objectFit:"cover"}} src="https://officesnapshots.com/wp-content/uploads/2018/06/marvin-windows-doors-headquarters-eagan-13-1200x800.jpg" alt="" />
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



                <div className='container container-max ' >
  <div className="row mt-5">




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
      {postData.map((post) => (
       <a href={`/topic/${post.id}`} > <div key={post.id} className='d-flex mt-3 mb-3 ' style={{ alignItems: 'center' }}>
          <div className='quickImgBox'>
            <img
              style={{ width: '90%', borderRadius: '14px' }}
              src={post.banner_img}
              alt="banner_img"
            />
          </div>

          <div className='' style={{ width: '74%' }}>
           <h5 className='fw-bold hoverHead quickText'>{post.post_title}</h5>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
          </div>
        </div>
        </a>
      ))}

<div className='paginationBox'>
  <button
    className='PaginatinNextBtn'
    disabled={pagination.page === 1}
    onClick={() => handlePageChange(pagination.page - 1)}
  >
    <FontAwesomeIcon icon={faAngleLeft} />
  </button>
  <span >{pagination.page}</span>
  <button
    className='PaginatinNextBtn'
    disabled={pagination.page === pagination.totalPages}
    onClick={() => handlePageChange(pagination.page + 1)}
  >
    <FontAwesomeIcon icon={faAngleRight} />
  </button>
</div>
    </div>


  

   


    

    

    </div>



    <div className="col-md-4">
    <div style={{height:"800px", backgroundColor:"#ebebeb"}}>

</div>
    </div>
  </div>
                </div>


                </Tab.Pane>









            <Tab.Pane eventKey="second">

            

            </Tab.Pane>



            <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>



            <Tab.Pane eventKey="fourth">Tab 4 content</Tab.Pane>



            <Tab.Pane eventKey="fifth">Tab 5 content</Tab.Pane>



            <Tab.Pane eventKey="sixth">Tab 6 content</Tab.Pane>


            <Tab.Pane eventKey="seven">Tab 7 content</Tab.Pane>


            <Tab.Pane eventKey="eight">Tab 8 content</Tab.Pane>


          














            
            <Tab.Pane eventKey="3.1">
           
            </Tab.Pane>


            <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
            <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
            <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Searchtab;
