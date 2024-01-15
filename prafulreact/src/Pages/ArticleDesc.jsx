import React, {useState, useEffect} from 'react'
import "../Styles/Article.css"

import axios from 'axios';





const ArticleDesc = () => {

  const options = {

    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [htmlContent, setHtmlContent] = useState('');
  // const limit = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/post/viewpost/91942');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get('http://192.168.17.8:3000/api/post/latest')
      .then(response => {
        console.log('latest respionce ' + response);
        console.log('latest respionce  data ' + response.data);
          setPostData(response.data);
      
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect once on mount





  useEffect(() => {
    // Fetch HTML content from your API
    fetch('http://192.168.17.8:3000/api/post/viewpost/91942')
      .then(response => response.json())
      .then(data => setHtmlContent(data.postData[0].post_content))
      .catch(error => console.error('Error fetching HTML content:', error));
  }, []); // Empty dependency array to run the effect once on mount


  // useEffect(() => {
  //   // Fetch HTML content from your API
  //   fetch('http://192.168.17.8:3000/api/post/91942')
  //     .then(response => response.text())
  //     .then(data => setHtmlContent(data))
  //     .catch(error => console.error('Error fetching HTML content:', error));
  // }, []); // Empty dependency array to run the effect once on mount


 


  return (
    <div>

<div className='container container-max '>
    <div className="row ">
        <div className='hr'></div>



        <div className="col-md-8 borderR mt-2">

{loading ? (
        <p>Loading...</p>
        
      ) : (
        <div >
            {/* Content for the 70% column */}
            <div className='paddings'>
            <h1 className='fw-bold mt-1 h2 hoverHead' >{data.postData[0].post_title}</h1>
            <p style={{ fontSize: "14px" }}>
            By <span className='fw-bold'>{data.postData[0].post_author}</span> | {new Date(data.postData[0].post_date).toLocaleDateString(undefined, options)}
                        </p>

                       
           </div>
           <div className='mt-3'>
           <img className='homeImg' src={data.postData[0].banner_img} alt={data.postData[0].banner_alt} />
           </div>

           <div style={{fontSize:"14px"}}>
            {/* <p className='paddings fw-bold mt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vero praesentium quibusdam officiis itaque distinctio magnam sequi quia, tempora vitae, labore reiciendis natus facere temporibus cupiditate dignissimos nisi! Dolorum, illum!
            </p> */}

            <p className='paddings'>
            <div className="content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </p>
           </div>
           

           <div className=' ArticleBox mt-5 mb-5' style={{alignItems:"center"}}>
            <div >
                <img className='ArticleImg' src="https://people.com/thmb/RpnNLplOGndVrTF-rdBlp0biuxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x39:721x41)/Emma-Watson-c59dff78899047bb839b894665b85a13.jpg" alt="" />
            </div>
            <div style={{fontSize:"14px", padding:"10px"}}>
                <h6 className='fw-bold'>Jane Smith</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, vero praesentium quibusdam officiis itaque distinctio magnam sequi quia, tempora vitae, labore reiciendis natus facere temporibus cupiditate dignissimos nisi! Dolorum, illum!
            </p>
            </div>
           </div>
          
          
          </div>

)}
        </div>
        

        <div className="col-md-4">

            <div className=' borderB paddings'>
                <h5 className='fw-bold'>Related Articles</h5>
            </div>
            <div>
      {postData.map((post, index) => (
        <div key={index} className='paddings'>
          <h4 className='fw-bold h5 hoverHead'>{post.post_title}</h4>
          <p style={{ fontSize: '13px' }}>
            By <span className='fw-bold'>{post.post_author}</span> | {new Date(post.post_date).toLocaleDateString(undefined, options)}
          </p>
          <p className='just-text line-clamp mt-1' style={{ fontSize: '15px' }}>
            {post.post_content}
          </p>
          <p className='hr' />
        </div>
      ))}
    </div>



          <div className='marTop ' style={{ backgroundColor: '#e0e0e0', height: '1500px' }}>
            {/* Content for the 30% column */}
            <p className='bllack'>340*1500</p>

          </div>
        </div>
    
    </div>
</div>


<div className='container container-max mt-3'>
    <div className="row">


    <h5  className='fw-bold borderB py-1 h5'>More from Enterprise Talk</h5>


<div className="col-md-8 borderR">

{postData.map((post, index) => (
<div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
  <div  className='quickImgBox'>
    <img style={{ width:"90%"  , borderRadius:"14px"}} src={post.banner_img} alt={post.banner_alt} />
  </div>

  <div className='' style={{width:"74%"}}>
  <h5 className='fw-bold hoverHead quickText'>{post.post_title}</h5>
  <p style={{ fontSize: "13px" }}>
                      By <span className="fw-bold">John Smith</span> | 12
                      sept 2023
                    </p>
  </div>
</div>
    ))}


<div className='borderB'></div>

{/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
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
</div> */}


<div className='borderB'></div>

{/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
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
</div> */}



<div className='borderB'></div>

{/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
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
</div> */}



<div className='borderB'></div>

{/* <div className='d-flex mt-3 mb-3' style={{alignItems:"center"}}>
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
</div> */}

<div id="podcast"></div>


<div className='borderB'></div>



</div>



<div className="col-md-4">
<div style={{height:"700px", backgroundColor:"#ebebeb"}}>
<p className='bllack'>340*700</p>
</div>
</div>
    
    
    </div>

</div>



<div className='container container-max '>
  <div className='row mt-5  '>
    <div className="col-md-12 mb-5" >
   <div style={{height:"150px", backgroundColor:"#ebebeb"}}>
   <p className='bllack'>1090*200</p>
   </div>
    </div>
  </div>

</div>





    </div>
  )
}

export default ArticleDesc