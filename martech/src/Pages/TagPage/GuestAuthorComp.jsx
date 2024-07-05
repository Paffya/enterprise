import React from 'react'
import { CardComp } from '../CardComp'

const GuestAuthorComp = () => {
  return (
    <div>


      <div className="container container-max mt-5">
        <div className="row">
          <h3 class="fw-bold borderB py-1 h4">Guest Author</h3>

          <div className="col-md-6 ">
            <a href="/">
           <CardComp src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/04/1713444458258-Evan%20Wong.jpg?width=500" />
            </a>
          </div>


          <div className="col-md-5" style={{ margin: "auto" }}>
            <h1 className="h1 fw-bold">
              Innovation Insights: A&W Restaurants' Digital Transformation with
              PAR Technology
            </h1>
            <p>In conversation with By Bureau | 16 Jun, 2024</p>
            <button className="podBtn mt-2">Hear The Podcast</button>
          </div>

          
        </div>
      </div>



    </div>
  )
}

export default GuestAuthorComp