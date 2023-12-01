import React, {useState, useEffect} from 'react'
import "../Styles/Latest.css"
import { Card } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom';






const Tag  = () => {

  const options = {
    
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const { subcat } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const limit = 4;
  const limit = 3;
  const cardLimit = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.17.8:3000/api/post/tag/${subcat}`);
        // const response = await axios.get(`http://192.168.17.8:3000/api/post/tag/automation`);
        setData(response.data.posts);
        
      } catch (error) {
        setError(error)
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subcat]);

  

  
//   const [menuItems, setMenuItems] = useState([]);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchMenuItems = async () => {
//     try {
//       const response = await axios.get(`http://192.168.17.8:3000/api/post/tag/${subcat}`);
//       setMenuItems(response.data);
//     } catch (error) {
//       console.error('Error fetching menu items:', error);
//       setError(error.message || 'An error occurred while fetching menu items.');
//     }
//   };

//   fetchMenuItems();
// }, [subcat]);

 

  // const { tag } = useParams();
  // console.log('Tag:', tag);

  
  

  return (

    <div className=''>
     
        
    
    <div className='container container-max' id="news">
   

        <div className='row'>
          
            <div className='col-md-12'>
                <h1 className='fw-bold py-1 mt-3'>{subcat}</h1>
            </div>

            <div className='d-flex mt-3'>
              <div><p className='fw-bold DesktopResponsive'>Go To : </p></div>

             <div className='mx-3 DesktopResponsive'>
               <a href="#news" className=' btn-sm1'>News</a>
              <a href="#article" className=' btn-sm1'>Article</a>
              <a href="#quick" className=' btn-sm1'>Quick Bytes</a>
              <a href="#podcast" className=' btn-sm1'>Podcasts</a>
              <a href="#hotseat" className=' btn-sm1'>Hot Seats</a>
              <a href="#featured" className=' btn-sm1'>Featured Interview</a>
              <a href="#future" className=' btn-sm1'>Future Ready</a>
              <a href="#guest" className=' btn-sm1'>Guest Author</a>
              <a href="#learning" className=' btn-sm1'>Learning Center</a>
              
              </div>

              <div className='MobileResponsive' style={{margin:"auto", display:"none"}}>
              <div><p className='fw-bold'>Go To : </p></div>
                <select name="" id="" className='tabMobile'>
                  <option value="#news" href="#news"> <a href="#news" className=' btn-sm1'>News</a></option>
                  <option value="#article"> <a href="#article" className=' btn-sm1'>Article</a></option>
                  <option value="#quick"><a href="#quick" className=' btn-sm1'>Quick Bytes</a></option>
                  <option value="#podcast"><a href="#podcast" className=' btn-sm1'>Podcasts</a></option>
                  <option value="#hotseat"><a href="#hotseat" className=' btn-sm1'>Hot Seats</a></option>
                  <option value="#featured"><a href="#featured" className=' btn-sm1'>Featured Interview</a></option>
                  <option value="#future"> <a href="#future" className=' btn-sm1'>Future Ready</a></option>
                  <option value="#guest"><a href="#guest" className=' btn-sm1'>Guest Author</a></option>
                  <option value="#learning"><a href="#learning" className=' btn-sm1'>Learning Center</a></option>
                </select>
              </div>
              
            </div>


            <div>
            <h5 className='fw-bold borderB py-1 h4 mt-4'>News</h5>

            <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.news && data.news.length > 0 ? (
        <div className='flexAddver mt-3' style={{ gap: '11px' }}>
          {data.news.slice(0, limit).map((post, index) => (
            <div key={index} className='addvert zoom-in'>
              <div>
                <img style={{ width: '100%', borderRadius: '20px', height: '250px', objectFit: 'cover' }} src={post.p_image} alt='' />
              </div>
              <div className='padLR'>
                <a href={`/topic/${post.post_id}`}><h4 className='fw-bold h5 mt-3 hoverHead line-clamp'>{post.p_title}</h4></a>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{post.p_author}</span> | {new Date(post.publish_date).toLocaleDateString(undefined, options)}
                </p>
                <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                  {post.p_content}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null /* Render nothing when there is no data */}
    </div>
            </div>
           

        </div>

    </div>





  <div className='container container-max d-flex gap-2  mt-5'>
  {loading ? (
        <p>Loading...</p>
        
      ) : (
  <div className='row border-top border-bottom' style={{padding:"10px"}}>
 <div className='col-md-6 borderR paddings mt-3 mb-4'>
            {data.events && data.events.length > 0 ? (
              <React.Fragment>
                <a href={`/topic/${data.events[0].post_id}`}><h3 className='fw-bold hoverHead'>{data.events[0].p_title}</h3></a>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{data.events[0].p_author}</span> | {new Date(data.events[0].publish_date).toLocaleDateString(undefined, options)}
                </p>
              </React.Fragment>
            ) : (
              <p>No data found</p>
            )}
          </div>

          <div className='col-md-6 paddings mt-3 mb-4'>
            {data.events && data.events.length > 1 ? (
              <React.Fragment>
                <a href={`/topic/${data.events[1].post_id}`}><h3 className='fw-bold hoverHead'>{data.events[1].p_title}</h3></a>
                <p style={{ fontSize: '13px' }}>
                  By <span className='fw-bold'>{data.events[1].p_author}</span> | {new Date(data.events[1].publish_date).toLocaleDateString(undefined, options)}
                </p>
              </React.Fragment>
            ) : (
              <p>No data found</p>
            )}
          </div>
  </div>
    )}
</div> 


<div className='container container-max'>
  <div className='row mt-5'>
    <div className="col-md-12 mb-5 borderB" >
   <div style={{height:"150px", backgroundColor:"#ebebeb"}}>
   <div id="article"></div>
   <p className='bllack'>1090*200</p>
   </div>
    </div>
  </div>

</div>



<div className='container container-max' >
  <div className="row">

  <h5  className='fw-bold borderB py-1 h4'>Articles</h5>
  <div className='col-md-4 mt-3'>
      
      
      <div className=' '>
        <h3 className='fw-bold h5 hoverHead '>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
      </div>
<p className='hr' />
      <div className=' mt-3'>
        <h3 className='fw-bold h5 hoverHead '>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
      </div>
<p className='hr' />
      <div className=' mt-3'>
        <h3 className='fw-bold h5 hoverHead '>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
      </div>
      <p className='hr' />
      
      <div className=' mt-3'>
        <h3 className='fw-bold h5 hoverHead '>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
      </div>
      <p className='hr' />

      <div className=' mt-3'>
        <h3 className='fw-bold h5 hoverHead '>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
        <p style={{ fontSize: "13px" }} className='mt-1'>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
      </div>
      <div id="quick"></div>
      <p className='hr' />

      
     
   
    </div>


    <div className="col-md-8">
    <div >
            {/* Content for the 70% column */}
           <div >
           <img className='homeImg' src="https://images.hindustantimes.com/img/2022/10/15/1600x900/BLR_1665817834364_1665817845938_1665817845938.jfif" alt="" />
           </div>
           
           <div className='paddings'>
            <h1 className='fw-bold mt-1 h2 hoverHead' > Oxylabs Introduces a New Product Line: Datasets</h1>
            <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>

                        <p className='just-text line-clamp mt-1' style={{ fontSize: "15px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestiae, esse consequuntur soluta reprehenderit suscipit nesciunt, eos facilis non provident inventore minus eveniet voluptate iure laborum nisi similique neque impedit?
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit veritatis commodi dolorem odio pariatur in, eum incidunt libero repellat similique nesciunt! A, vero suscipit ullam temporibus tempora labore dolorum expedita?
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero atque illo neque a dolorem unde, voluptates fugit rerum cupiditate dolor praesentium doloremque est ullam sapiente esse magni iusto vel!
                        </p>
           </div>

           
           
          </div>
    </div>
  </div>

</div>



<div className='container container-max' >
  <div className="row mt-5">

  <h5  className='fw-bold borderB py-1 h4'>Quick Bytes</h5>


    <div className="col-md-8">

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div  className='quickImgBox'>
        <img style={{ width:"90%"  , borderRadius:"14px"}} src="https://img.freepik.com/premium-photo/business-people-talking-meeting-office-near-window_396254-124.jpg" alt="" />
      </div>

      <div className='' style={{width:"74%"}}>
      <h5 className='fw-bold hoverHead quickText'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h5>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>


    <div className='borderB'></div>

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div className='quickImgBox'>
        <img style={{ width:"90%"  , borderRadius:"14px"}} src="https://img1.wsimg.com/isteam/stock/8538/:/cr=t:0%25,l:7.59%25,w:84.82%25,h:100%25/rs=w:600,h:451.12781954887214,cg:true" alt="" />
      </div>

      <div className='' style={{width:"74%"}}>
      <h5 className='fw-bold hoverHead quickText'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h5>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>


    <div className='borderB'></div>

<div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
  <div className='quickImgBox'>
    <img style={{ width:"90%"  , borderRadius:"14px"}} src="https://www.purdueglobal.edu/blog/careers/workplace-diversity.jpg" alt="" />
  </div>

  <div className='' style={{width:"74%"}}>
  <h5 className='fw-bold hoverHead quickText'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h5>
  <p style={{ fontSize: "13px" }}>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
  </div>
</div>



<div className='borderB'></div>

<div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
  <div className='quickImgBox'>
    <img style={{ width:"90%"  , borderRadius:"14px"}} src="https://njbmagazine.com/wp-content/uploads/2020/04/Diverse-business-775x500.jpg" alt="" />
  </div>

  <div className='' style={{width:"74%"}}>
  <h5 className='fw-bold hoverHead quickText'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h5>
  <p style={{ fontSize: "13px" }}>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
  </div>
</div>



<div className='borderB'></div>

<div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
  <div className='quickImgBox'>
    <img style={{ width:"90%"  , borderRadius:"14px"}} src="https://www.vmcdn.ca/f/files/localprofile/import/2019_03_2017-10-02-diversity-ThinkstockPhotos-639467826.jpg" alt="" />
  </div>

  <div className='' style={{width:"74%"}}>
  <h5 className='fw-bold hoverHead quickText'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h5>
  <p style={{ fontSize: "13px" }}>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
  </div>
</div>

<div id="podcast"></div>

    
    <div className='borderB'></div>

    

    </div>



    <div className="col-md-4">
    <div style={{height:"936px", backgroundColor:"#ebebeb"}}>
    <p className='bllack'>340*900</p>
</div>
    </div>
  </div>
</div>




<div className='container container-max ' >

  <div className='row mt-5 justify-content-between'>
  <h5  className='fw-bold borderB py-1 h4'>Podcasts</h5>
    <div className="col-md-7">
      <div className='podText'>
      <h1 className='fw-bold hoverHead guestFont2'>Questel Plans for Growth by Expanding R&D and Manufacture
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        <div id="hotseat"></div>
      </h1>
      
                        </div>
    </div>

    <div className="col-md-5 ">
      <img className='ImgBoxGuets'  src="https://kgv.ae/wp-content/uploads/2023/03/Ashwini-Chaloo.jpg" alt="" />
      
    </div>


  </div>

</div>





<div className='container container-max' >
  <div className="row mt-5">

  <h5  className='fw-bold borderB py-1 h4'>Hot Seats</h5>


    <div className="col-md-6">

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src="https://teaklab.com/wp-content/uploads/2019/08/oakwood_office_desk_7.jpg" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Oxylabs Introduces a New Product Line: Datasets</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>

    <div className='borderB'></div>

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src="https://files.ekmcdn.com/ronzfurniture/images/bronte-oak-and-grey-large-office-desk-with-drawers-0z4625c-(5)-11994-dv-p.jpg?v=40853AB8-476C-465B-9480-B8AC21B9C3E2" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                        <div id="featured"></div>
      </div>
    </div>


    </div>

    <div className="col-md-6">
    

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src="https://cdn.1stopbedrooms.com/media/catalog/product/o/f/office-by-kathy-ireland-echo-bow-front-desk-and-credenza-with-mobile-file-cabinet-in-modern-gray_qb13408165.jpg" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>

    <div className='borderB'></div>

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"40%", height:"150px"}}>
        <img style={{ width:"90%", height:"150px", objectFit:"cover"  , borderRadius:"14px"}} src="https://www.pennyware.net/cdn/shop/products/denver-office-desk-and-1-drawer-384012.jpg?v=1644950096" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Oxylabs Introduces a New Product Line: Datasets</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>
   
    </div>



  </div>
</div>





<div className='container container-max' >
<h5  className='fw-bold borderB py-1 h4 mt-5'>Featured Interview</h5>
  <div className="row">
  <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.interview && data.interview.length > 0 ? (
        <div className="col-md-12 justify-content-center intervieBox">
          {data.interview.slice(0, cardLimit).map((interview, index) => (
           <a href={`/topic/${interview.post_id}`}> <Card key={index} style={{ width: '21rem', marginRight: '10px' }} className='box-Card'>
              <Card.Img variant="top" src={interview.p_image} />
              <Card className='p-md-3 cardHover' style={{ fontSize: '14px' }}>
                <div id="future"></div>
                <Card.Title className='fw-bold'>
                  {/* Names <br /> */}
                  <span>
                    {/* <p>Title</p> */}
                  </span>
                </Card.Title>
                <Card.Text className='fw-bold line-clamp hoverHead'>{interview.p_title}</Card.Text>
                <Card.Text className='mt-1 line-clamp cardText'>{interview.p_content}</Card.Text>
              </Card>
            </Card></a>
          ))}
        </div>
      ) : null /* Render nothing when there is no data */}
    </div>
  </div>

</div>



<div className='container container-max d-flex gap-2  mt-5' >

  <div className='row  border-bottom ' >
  <h5  className='fw-bold borderB py-1 h4'>Future Ready</h5>
<div className='col-md-6 borderR paddings mt-3 mb-4' style={{padding:"10px"}}>
  <h3 className='fw-bold hoverHead'>Questel Plans for Growth by Expanding R&D and Manufacture</h3>
  <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                        <div id="guest"></div>
</div>

<div className='col-md-6  paddings mt-3 mb-4' style={{padding:"10px"}}>
<h3 className='fw-bold  hoverHead'>Quasar Partner with PTC to Empower IoT Customer with High-Performance Data Solution</h3>
  <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
</div>
  </div>
</div>





<div className='container container-max mt-5' >
  
  <div className="row">
  <h5  className='fw-bold borderB py-1 h4'>Guest Author</h5>
    <div className="col-md-6 guestImg">
      <img className='ImgBoxGuets'  src="https://preview.redd.it/on-the-armchair-expert-podcast-v0-y585l9tcw5ma1.jpg?width=640&crop=smart&auto=webp&s=b049546d06800a129fc0fb4db61850f8bf6536a6" alt="" />
    </div>

    <div className="col-md-6  guestText" >
    <div className='align-center'>
      <h2 className='fw-bold hoverHead guestFont'>Questel Plans for Growth by Expanding R&D and Manufacture
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>
                        <div id="learning"></div>
      </h2>
      
                        </div>
    </div>


  </div>
</div>





<div className='container container-max mt-5  borderB' >
  <div className="row mb-2">
  <h5  className='fw-bold borderB py-1 h4'>Learning Center</h5>
    <div className="col-md-12  learningBox" style={{gap:"13px"}}>

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"38%", height:"140px"}}>
        <img style={{ width:"93%", height:"140px", objectFit:"cover"  , borderRadius:"14px"}} src="https://files.ekmcdn.com/ronzfurniture/images/bronte-oak-and-grey-large-office-desk-with-drawers-0z4625c-(5)-11994-dv-p.jpg?v=40853AB8-476C-465B-9480-B8AC21B9C3E2" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Questel Plans for Growth by Expanding R&D and Manufacture</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>

   
    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"38%", height:"140px"}}>
        <img style={{ width:"93%", height:"140px", objectFit:"cover"  , borderRadius:"14px"}} src="https://files.ekmcdn.com/ronzfurniture/images/bronte-oak-and-grey-large-office-desk-with-drawers-0z4625c-(5)-11994-dv-p.jpg?v=40853AB8-476C-465B-9480-B8AC21B9C3E2" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Questel Plans for Growth by Expanding R&D and Manufacture</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>
   

    <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
      <div style={{width:"38%", height:"140px"}}>
        <img style={{ width:"93%", height:"140px", objectFit:"cover"  , borderRadius:"14px"}} src="https://files.ekmcdn.com/ronzfurniture/images/bronte-oak-and-grey-large-office-desk-with-drawers-0z4625c-(5)-11994-dv-p.jpg?v=40853AB8-476C-465B-9480-B8AC21B9C3E2" alt="" />
      </div>

      <div className='mt-2' style={{width:"60%"}}>
      <h4 className='fw-bold hoverHead h5'>Questel Plans for Growth by Expanding R&D and Manufacture</h4>
      <p style={{ fontSize: "13px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
      </div>
    </div>

    </div>
  </div>

</div>






<div className='container container-max '>
  <div className='row mt-5 '>
    <div className="col-md-12 mb-5 borderB" >
   <div style={{height:"150px", backgroundColor:"#ebebeb"}}>
   <p className='bllack'>1090*200</p>
   </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default Tag;

