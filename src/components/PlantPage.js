import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PlantPage = ({ plants }) => {
  const { id } = useParams();
  const plant = plants.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return <p>Plant not found.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{plant.name}</h1>
      <img src={plant.image} alt={plant.name} style={{ width: '200px', height: '200px' }} />
      <p>Price: ${plant.price.toFixed(2)}</p>
      <p>{plant.inStock ? 'In Stock' : 'Sold Out'}</p>
      <Link to={`/plants/edit/${plant.id}`} className="edit-button">Edit</Link>
    </div>
  );
};

export default PlantPage;
