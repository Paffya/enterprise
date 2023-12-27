// Lazy.js
import React, { lazy, Suspense } from 'react';

// Use React.lazy to lazily import the component
const Homepage = lazy(() => import('../Pages/Homepage'));


const Lazy = () => {
  return (
    <div>
      

      {/* Use Suspense to handle the loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the lazily loaded component */}
        <Homepage />
      </Suspense>
    </div>
  );
};

export default Lazy;
