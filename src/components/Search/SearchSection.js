import React,{Component} from 'react'
import './SearchSection.css';

class SearchSection extends Component {

    render(){
        return (
            <div>
                <div className='searchMain'>
                      <input className="locationTextBox" type="text" id="cityName" size="75" placeholder='Enter City Name...'/>
                      <input className="searchButton" type="submit" value="Search"/><br/>
                  </div>
            </div>
          
        )
    }
  
}

export default SearchSection