// Search.js  
import React from 'react';  

const Search = ({ setSearchTerm }) => {  
  return (  
    <div style={{ margin: '20px 0' }}>  
      <label htmlFor="search">Search Plants:</label>  
      <input  
        type="text"  
        id="search"  
        placeholder="Type a name to search."  
        onChange={(e) => setSearchTerm(e.target.value)}  
        style={{ marginLeft: '10px' }}  
      />  
    </div>  
  );  
};  

export default Search;