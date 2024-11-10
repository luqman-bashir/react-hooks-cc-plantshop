import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ plant, toggleSoldOut, deletePlant }) => {
  // Parse plant.price as a number and ensure it's a valid number
  const price = !isNaN(parseFloat(plant.price)) ? parseFloat(plant.price).toFixed(2) : 'N/A';

  return (
    <div className="plant-card">
      <h3>
        <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
      </h3>
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <p>Price: ${price}</p>
      <p>{plant.inStock ? 'In Stock' : 'Sold Out'}</p>
      <button onClick={() => toggleSoldOut(plant.id)}>
        {plant.inStock ? 'Mark as Sold Out' : 'Mark as In Stock'}
      </button>
      <button onClick={() => deletePlant(plant.id)} className="delete-button">
        Delete
      </button>
      
      {/* Edit Button */}
      <Link to={`/plants/edit/${plant.id}`} className="edit-button">
        Edit
      </Link>
    </div>
  );
};

export default PlantCard;
