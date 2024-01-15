import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Error 404 - Not Found</title>
        <meta name="description" content="The page you are looking for can't be found." />
        {/* Add other meta tags as needed */}
      </Helmet>

      <div className="container container-max">
        <div className="row">
          <div className="col-md-12 mt-3 notfound">
            <h1 className="fw-bold">Error 404 - Not Found</h1>
            <p>The page you are looking for can't be found. Go back or browse our recent articles.</p>
            <div className="mt-4 mb-4">
              <a href="/" className="hoverHead text-black goBack">
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
