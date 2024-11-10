// PlantList.js  
import React from 'react';  
import PlantCard from './PlantCard';  

const PlantList = ({ plants, toggleSoldOut, deletePlant }) => {  
  return (  
    <div className='plant-container'>  
      {plants.length > 0 ? (  
        plants.map((plant) => (  
          <PlantCard key={plant.id} plant={plant} toggleSoldOut={toggleSoldOut} deletePlant={deletePlant} />  
        ))  
      ) : (  
        <p>No plants found.</p>  
      )}  
    </div>  
  );  
};  

export default PlantList;