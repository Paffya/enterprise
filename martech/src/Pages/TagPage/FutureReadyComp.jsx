import React from 'react'

const FutureReadyComp = () => {

    const initialData = [
        {
          id: 1,
          name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
          dateData: "12 jan 2024",
        },
       
      ];


  return (
  


<div className="container mt-5">
    <div className="row borderB">
    <h5 className="fw-bold borderB py-1 h4">Future Ready</h5>

    {initialData.map((item) => (
         <div
                  className="col-md-6 borderR paddings mt-3 mb-4"
                  style={{ padding: "10px" }}
                >
                  
                    <h5 className="fw-bold h2 hoverHead">
                      {item.name}
                    </h5>
                  
                    <p className="mt-1" style={{ fontSize: "13px" }}>
                    By <span class="fw-bold">ET Bureau</span> | Jun 18, 2024
                  </p>
                  <div></div>
                </div>
                     ))}

{initialData.map((item) => (
         <div
                  className="col-md-6  paddings mt-3 mb-4"
                  style={{ padding: "10px" }}
                >
                  
                    <h5 className="fw-bold h2 hoverHead">
                    {item.name}
                    </h5>
                 
                    <p className="mt-1" style={{ fontSize: "13px" }}>
                    By <span class="fw-bold">ET Bureau</span> | Jun 18, 2024
                  </p>
                  <div></div>
                </div>
                  ))}
    </div>
</div>

  )
}

export default FutureReadyComp