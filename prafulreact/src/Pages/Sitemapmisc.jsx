import React from 'react';
import { Helmet } from 'react-helmet-async';

function Sitemapmisc() {
  const base_url = "https://enterprisetalk.com/";
  const xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";
  const xmlns_xsi = "http://www.w3.org/2001/XMLSchema-instance";
  const schemaLocation = "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd";

  const namespaceAttrs = {
    xmlns: xmlns,
    'xmlns:xsi': xmlns_xsi,
    'xsi:schemaLocation': schemaLocation
  };

  return (

    <div>

<Helmet>
  <title>XML Sitemap</title>
</Helmet>


      <div style={{backgroundColor:"#f0f2eb", padding:"20px"}}>
        <h1>XML Sitemap</h1>
        <p>This XML file does not appear to have any style information associated with it. The document tree is shown below</p>
      </div>
      <urlset {...namespaceAttrs}>
       
          <ul  className='mt-3'>
            <url className="xmlClasses">
              <li className='mt-2' ><a href="/about" className='text-black' >{base_url  + "about"}</a></li>
              <li className='mt-3' ><a href="/connect" className='text-black' >{base_url  + "contact-us"}</a></li>
              <li className='mt-3' ><a href="/opt-out-form" className='text-black' >{base_url  + "donotsell"}</a></li>
              <li className='mt-3' ><a href="/privacy" className='text-black' >{base_url  + "privacy-policy"}</a></li>
              <li className='mt-3' ><a href="https://resources.enterprisetalk.com/" className='text-black' >{base_url  + "resources"}</a></li>
              
            </url>
            {/* <changefreq>daily</changefreq> */}
          </ul>
     
      </urlset>
    </div>

  );
}

export default Sitemapmisc;
