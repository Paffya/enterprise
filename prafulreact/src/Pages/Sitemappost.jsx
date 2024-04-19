import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios or fetch for making AJAX requests in React
import { Helmet } from 'react-helmet-async';

function Sitemappost() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('https://app-node.enterprisetalk.com:3000/api/post/sitemap_posts'); // Assuming you have an endpoint to fetch reports
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

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
        {reports.map(report => (
          <ul key={report.id} className='mt-3'>
            <url>
              <li style={{fontSize:"13px", listStyleType:"none", fontWeight:"500" }}> <a href={`${base_url + report.cat_slug + '/' + report.post_name}`} className='text-black'>{base_url + report.cat_slug + '/' + report.post_name}</a></li>
            </url>
            {/* <changefreq>daily</changefreq> */}
          </ul>
        ))}
      </urlset>
    </div>

  );
}

export default Sitemappost;
