import React from 'react';

function ImgSelComp({ selectedTab, onTabChange }) {

 

    const handleSelectChange = (e) => {
    const selectedTab = e.target.value;
    onTabChange(selectedTab);
  };

  return (
    <div className='marbot33'>
      
      <select id="tabSelect" className='selectTab' value={selectedTab} onChange={handleSelectChange}>
        {/* <option value="Latest" disabled>THOUGHT LEADERSHIP</option> */}
        <option value="All">All</option>
        <option value="Interview">INTERVIEW</option>
        <option value="Podcasts">PODCASTS</option>
        <option value="Videos">VIDEOS</option>
        <option value="Guest">GUEST AUTHOR</option>
      </select>
    </div>
  );
}

export default ImgSelComp;