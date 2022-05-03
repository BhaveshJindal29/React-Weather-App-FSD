import React from 'react'
import './SearchSection.css';

function SearchSection() {
  return (
    <div className='searchMain'>
        <input className="locationTextBox" type="text" id="cityName" size="75" placeholder='Enter City Name...'/>
        <input className="searchButton" type="submit" value="Search"/>
    </div>
  )
}

export default SearchSection