import React from 'react'

import TextCard from '../../Component/TextCard';

const LearningComp = () => {

    const LearningData = [
        {
          id: 1,
          name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
          dateData: "12 jan 2024",
        },
        {
          id: 2,
          name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
          dateData: "12 jan 2024",
        },
        {
          id: 3,
          name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
          dateData: "12 jan 2024",
        },
       
      ];


  return (
    <div>

    <div className="container mt-5 mb-5">
    <div className="row">
    <h5 className="fw-bold borderB py-1 h4">Learning Center</h5>
      {LearningData.map((item) => (
        <div className="col-md-4 mt-4" key={item.id}>
         <a href="/learning-center" class="d-flex w-100" style={{textDecoration:"none", color:"inherit"}}>
            <div style={{width:"50%"}}>
                <img src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/04/1713248185726-All You Need to Know About Hyper-automation@1.5x.webp?width=500" alt="All You Need to Know About Hyper-automation" style={{width:"92%", height:"130px", objectFit:"cover", borderRadius:"14px"}} />
                    </div>
                   <div style={{width:"50%"}}>
                   
                   <TextCard title={item?.name}/>
                   </div>
                        </a>
        </div>
      ))}
    </div>
    </div>


    </div>
  )
}

export default LearningComp