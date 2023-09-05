import React from 'react';

function SelectComponent({ selectedTab, onTabChange }) {

 

    const handleSelectChange = (e) => {
    const selectedTab = e.target.value;
    onTabChange(selectedTab);
  };

  return (
    <div>
      
      <select id="tabSelect" className='selectTab' value={selectedTab} onChange={handleSelectChange}>
        <option value="Latest" disabled>LATEST</option>
        <option value="Trending">TRENDING</option>
        <option value="Quick">QUICK BYTES</option>
        <option value="Leaders">LEADERS</option>
        <option value="Americas">AMERICAS</option>
        <option value="Europe">EUROPE</option>
        <option value="Asia">ASIA</option>
        <option value="Global">GLOBAL</option>
      </select>
    </div>
  );
}

export default SelectComponent;