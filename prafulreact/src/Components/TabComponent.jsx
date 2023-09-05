import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function TabComponent({ activeKey, onTabChange }) {
  return (
    <Tabs activeKey={activeKey} onSelect={onTabChange} >
      <Tab eventKey="Latest" title={<span className="d-none d-sm-block h2 fw-bold">LATEST</span>}  className="d-none d-sm-block" disabled>
        Content for Tab 1
      </Tab>
      <Tab eventKey="Trending" title={<span className="d-none d-sm-block">TRENDING</span>}>
      <div className="LatestViwAll responsive1">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2 Pincard" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
        <div className="LatestViwAllMob responsive2">View All</div>
      </Tab>
      <Tab eventKey="Quick" title={<span className="d-none d-sm-block">QUICK BYTES</span>} >
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://5.imimg.com/data5/ANDROID/Default/2022/3/DK/EB/MD/91259944/product-jpeg.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://blog.stannahlifts.co.uk/hubfs/Blog_Images/Blog%20images%20%28resized%29/lift%20_breakdown_FEATURED.png"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.coindesk.com/resizer/EOqKUz3MPvY7TLQyoBJu78VsBU8=/1024x671/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IY3LBR6U6FD2TMVPK4TEXNHKK4.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.casekidukaan.com/image/cache/catalog/cases/mirrorfinish/gold/Luxury%20Chrome%20Case%20for%20iPhone%2014%20Gold-550x550.jpeg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://uploads.prod01.london.platform-os.com/instances/831/assets/images/What%20Makes%20a%20Building%20a%20Skyscraper%20by%20Fred%20Mills%20via%20The%20B1M.jpg?updated=1605539718"
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Startup" title={<span className="d-none d-sm-block">STARTUP</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.hindustantimes.com/ht-img/img/2023/03/31/1600x900/eeeeeee_1680246445378_1680246469814_1680246469814.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.easyliaisoning.com/wp-content/uploads/2022/01/Lift.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/08/05/ak_sgx2_050821.jpg?VersionId=xDRC_sIhQY81M41sEZzVHHFdGjooSVP7"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.cnet.com/a/img/resize/7c56919c831da397bce659c77c4d1f535149a586/hub/2022/09/30/44279d55-f21a-458e-bdaf-7c61c17cfc1b/iphone14vs13pro.jpg?auto=webp&fit=crop&height=900&width=1200"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.theconversation.com/files/274348/original/file-20190514-60549-11ssax8.jpg?ixlib=rb-1.1.0&rect=36%2C370%2C4047%2C2020&q=45&auto=format&w=668&h=324&fit=crop"
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Leaders" title={<span className="d-none d-sm-block">LEADERS</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Americas" title={<span className="d-none d-sm-block">AMERICAS</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Europe" title={<span className="d-none d-sm-block">EUROPE</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Asia" title={<span className="d-none d-sm-block">ASIA</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Global" title={<span className="d-none d-sm-block">GLOBAL</span>}>
      <div className="LatestViwAll px-3">View All</div>
        <div class="parent">
          <div class="div1 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07005936/puma-sneakers-for-men-1.jpg?tr=w-1200,h-900"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div2 stDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.designingbuildings.co.uk/w/images/9/9b/Elevator-1121069_640.jpg"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4 ">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
            </div>
          </div>

          <div class="div3 TstDiv ">
            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>

            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://cashmart.sg/wp-content/uploads/2022/06/SGX.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="div4 TstDiv">
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://www.popsci.com/uploads/2022/09/14/377A9081.jpg?auto=webp"
                alt=""
              />
            </div>

            <div className="p-2 p-md-4">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>

              <p className="lineClamp2" style={{ fontWeight: "500" }}>
                Businesses can use various cloud services and cloud-based
                solutions to solve their business challenges. Dynamic cloud
                solutions and services are av...
              </p>
              <p>9 Mins</p>
            </div>
          </div>

          <div class="div5 stDiv imgWrapper">
            <div className="">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=612x612&w=0&k=20&c=7KQm2fkV--RBIJGfjA5Isik6ktrt-rVwt46Qtu5yGMw="
                alt=""
              />
            </div>
            <div className="bgWrapper"></div>
            <div className="imgText">
              <h5 className="h5incard">
                Everything Enterprises Need to Know About the Cloud
              </h5>
              <button className="btn-trans">Download Now</button>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabComponent;