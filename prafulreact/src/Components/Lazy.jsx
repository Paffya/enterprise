// Lazy.js
import React, { lazy, Suspense } from 'react';

// Use React.lazy to lazily import the component
const Homepage = React.lazy(() => import('../Pages/Homepage'));
const About = lazy(() => import('../Pages/About'));
const ContentCategory = lazy(() => import('../Pages/ContentCategory'));

const Connect = lazy(() => import('../Pages/Connect'));
const Author = lazy(() => import('../Pages/Author'));
const Tag = lazy(() => import('./Tag'));
const Topic = lazy(() => import('../Pages/Topic'));
const Searchlist = lazy(() => import('../Pages/Searchlist'));
const PostPreview = lazy(() => import('../Pages/PostPreview'));




const Lazy = () => {
  return (
    <div>
      

      {/* Use Suspense to handle the loading state */}
      <Suspense fallback={<div></div>}>
        <Homepage />
        <About />
        <ContentCategory />
    
        <Connect />
        <Author />
        <Tag />
        <Topic />
        <Searchlist />
        <PostPreview />
      </Suspense>
    </div>
  );
};

export default Lazy;
