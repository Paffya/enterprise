import React , {useState, useEffect} from 'react'
import "../Styles/Latest.css"
import { Card } from 'react-bootstrap'





const Latest = () => {

  const options = {
    
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.17.8:3000/api/post/latest');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (

    <div className=''>
    
    <div className='container container-max' id="news">


        <div className='row'>
            <div className='col-md-12'>
                <h1 className='fw-bold py-1 mt-3'>Latest</h1>
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

            <div className='flexAddver mt-3' style={{ gap: '11px' }}>
      {posts.slice(0, 3).map((post, index) => (
        <React.Fragment key={index}>
          <div className='addvert zoom-in'>
            <div>
              <img
                style={{ width: '100%', borderRadius: '20px', height: '250px', objectFit: 'cover' }}
                src={post.banner_img}
                alt=""
              />
            </div>
            <div className='padLR'>
              <a href={`/topic/${post.id}`}><h4 className='fw-bold h5 mt-3 hoverHead'>{post.post_title}</h4></a>
              <p style={{ fontSize: '13px' }}>
                By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
              </p>
              <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
                {post.post_content}
              </p>
            </div>
          </div>

          {index < 2 && <div className='borderR'></div>}
        </React.Fragment>
      ))}
    </div>
            </div>

        </div>

    </div>





  <div className='container container-max d-flex gap-2  mt-5'>
  <div><div className='row border-top border-bottom' style={{ padding: '10px' }} >
      {posts.slice(0, 2).map((post, index) => (
        
          <div className='col-md-6 borderR paddings mt-3 mb-4' key={index}>
            <a href={`/topic/${post.id}`}><h3 className='fw-bold hoverHead'>{post.post_title}</h3></a>
            <p style={{ fontSize: '13px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
         
        </div>
      ))}
       </div>
    </div>
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
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <div className=''>
            <a href={`/topic/${post.id}`}><h3 className='fw-bold h5 hoverHead'>{post.post_title}</h3></a>
            <p style={{ fontSize: '13px' }} className='mt-1'>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>
          </div>
          <p className='hr' />
        </React.Fragment>
      ))}
      <div id='quick'></div>
      <p className='hr' />
    </div>


    <div className="col-md-8">
    <div>
      {posts.slice(0, 1).map((post, index) => (
        <div key={index}>
          {/* Content for the 70% column */}
          <div>
            <img className='homeImg' src={post.banner_img} alt="" />
          </div>

          <div className='paddings'>
            <a href={`/topic/${post.id}`}><h1 className='fw-bold mt-1 h2 hoverHead'>{post.post_title}</h1></a>
            <p style={{ fontSize: '14px' }}>
              By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
            </p>

            <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
              {post.post_content}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>

</div>



<div className='container container-max' >
  <div className="row mt-5">

  <h5  className='fw-bold borderB py-1 h4'>Quick Bytes</h5>


  <div className="col-md-8">
      {posts.map((post, index) => (
        <div key={index}>
          {/* Content for each post */}
          <div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div className='quickImgBox'>
              <img style={{ width: '90%', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='' style={{ width: '74%' }}>
              <a href={`/topic/${post.id}`}><h5 className='fw-bold hoverHead quickText'>{post.post_title}</h5></a>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
              </p>
            </div>
          </div>

          <div className='borderB'></div>
        </div>
      ))}

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

  {posts.slice(0, 1).map((post, index) => (
    <div className="col-md-7">
      <div className='podText'>
      <a href={`/topic/${post.id}`}><h1 className='fw-bold hoverHead guestFont2'>{post.post_title}
      <p style={{ fontSize: "18px" }} className='fw-bold mt-2'>In conversation with</p>
      <p className='guestPtag'>
                          By <span className="fw-bold">{post.post_author}</span> | {post.post_date}
                        </p>
                        <button className='btn-pod'>Hear The Podcasts</button>

                        <div id="hotseat"></div>
      </h1> </a>
      
                        </div>
    </div>
  ))}

{posts.slice(0, 1).map((post, index) => (
    <div className="col-md-5 ">
      <img className='ImgBoxGuets'  src={"https://kgv.ae/wp-content/uploads/2023/03/Ashwini-Chaloo.jpg"} alt="" />
      
    </div>
    ))}


  </div>

</div>





<div className='container container-max' >
  <div className="row mt-5">

  <h5  className='fw-bold borderB py-1 h4'>Hot Seats</h5>


  <div className="col-md-6">
      {posts.slice(0, 2).map((post, index) => (
        <div key={index}>
          <div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div style={{ width: '40%', height: '150px' }}>
              <img style={{ width: '90%', height: '150px', objectFit: 'cover', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='mt-2' style={{ width: '60%' }}>
             <a href={`/topic/${post.id}`}> <h4 className='fw-bold hoverHead h5'>{post.post_title}</h4></a>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
              </p>
              {/* Add additional content as needed */}
              <div id={`post-post_${index}`}></div>
            </div>
          </div>

          <div className='borderB'></div>
        </div>
      ))}
    </div>

    <div className="col-md-6">
      {posts.slice(0, 2).map((post, index) => (
        <div key={index}>
          <div className='d-flex mt-3 mb-3' style={{ alignItems: 'center' }}>
            <div style={{ width: '40%', height: '150px' }}>
              <img style={{ width: '90%', height: '150px', objectFit: 'cover', borderRadius: '14px' }} src={post.banner_img} alt="" />
            </div>

            <div className='mt-2' style={{ width: '60%' }}>
             <a href={`/topic/${post.id}`}> <h4 className='fw-bold hoverHead h5'>{post.post_title}</h4></a>
              <p style={{ fontSize: '13px' }}>
                By <span className="fw-bold">{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
              </p>
            </div>
          </div>

          <div className='borderB'></div>
        </div>
      ))}
    </div>



  </div>
</div>





<div className='container container-max' >
<h5  className='fw-bold borderB py-1 h4 mt-5'>Featured Interview</h5>
  <div className="row">
    <div className="col-md-12 justify-content-center intervieBox" >

      
    <Card style={{ width: '21rem', marginRight:"10px" }} className='box-Card'>
      <Card.Img variant="top" src="https://kgv.ae/wp-content/uploads/2023/03/Sameer-Datta-OnDot-jpg.webp" />
      <Card className='p-md-3 cardHover' style={{fontSize:"14px"}}>
      <div id="future"></div>
        <Card.Title className='fw-bold'>Wondershare EdrawMax <br /> <span><p>CEO | BOEAT</p></span> </Card.Title>
        
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2  line-clamp cardText'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>


    <Card style={{ width: '21rem' , marginRight:"10px"}} className='box-Card'>
      <Card.Img variant="top" src="https://kgv.ae/wp-content/uploads/2023/03/01-Kenny-Waribam-XDBS.jpg" />
      <Card className='p-md-3 cardHover' style={{fontSize:"14px"}}>
        <Card.Title className='fw-bold'>Wondershare EdrawMax <br /> <span><p>CEO | BOEAT</p></span></Card.Title>
      
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2  line-clamp cardText'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>


    <Card style={{ width: '21rem' , marginRight:"10px"}} className='box-Card'>
      <Card.Img variant="top" src="https://kgv.ae/wp-content/uploads/2023/03/05-Samarth-Bhargava-Kings-Research.jpg" />
      <Card className='p-md-3 cardHover' style={{fontSize:"14px"}}>
        <Card.Title className='fw-bold'>Wondershare EdrawMax <br /> <span><p>CEO | BOEAT</p></span></Card.Title>
      
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2  line-clamp cardText'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        
      </Card>
    </Card>


    <Card style={{ width: '21rem', marginRight:"10px" }} className='box-Card'>
      <Card.Img variant="top" src="https://kgv.ae/wp-content/uploads/2023/04/10-Kelvin-Cheung-Juns.jpg" />
      <Card className='p-md-3 cardHover' style={{fontSize:"14px"}}>
        <Card.Title className='fw-bold'>Wondershare EdrawMax <br /> <span><p>CEO | BOEAT</p></span></Card.Title>
      
        <Card.Text  className='fw-bold line-clamp'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
        <Card.Text className='mt-2  line-clamp cardText'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt enim quas similique soluta
        </Card.Text>
       
      </Card>
    </Card>
    
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

export default Latest;

