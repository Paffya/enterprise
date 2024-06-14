// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // You can use axios or fetch for making AJAX requests in React
// import { Helmet } from 'react-helmet-async';

// function SitemapCategory() {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get('https://app-node.enterprisetalk.com:3000/api/category/sitemap-subcat-list'); // Assuming you have an endpoint to fetch reports
//         setReports(response.data);
//       } catch (error) {
//         console.error('Error fetching reports:', error);
//       }
//     };

//     fetchReports();
//   }, []);

//   const base_url = "https://enterprisetalk.com/";

//   const generateXml = () => {
//     let xmlString = `<?xml version="1.0" encoding="UTF-8"?>`;
//     xmlString += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

//     reports.forEach(report => {
//       xmlString += `
//         <url>
//           <loc>${base_url + 'tag' + "/" + report.subcat_slug}</loc>
//         </url>
//       `;
//     });

//     xmlString += `</urlset>`;
//     return xmlString;
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>XML Sitemap</title>
//       </Helmet>

//       {/* Set content type to application/xml */}
//       <pre style={{ whiteSpace: 'pre-wrap' }}>{generateXml()}</pre>
//     </div>
//   );
// }

// export default SitemapCategory;
