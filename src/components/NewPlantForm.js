import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewPlantForm = ({ addPlant, updatePlant, plants }) => {
  const { id } = useParams(); // Get plant ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);

  // If editing, load the plant's data
  useEffect(() => {
    if (id) {
      const plantToEdit = plants.find((plant) => plant.id === parseInt(id));
      if (plantToEdit) {
        setName(plantToEdit.name);
        setImage(plantToEdit.image);
        setPrice(plantToEdit.price);
        setInStock(plantToEdit.inStock);
      }
    }
  }, [id, plants]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlant = { name, image, price: parseFloat(price), inStock };

    if (id) {
      // Update existing plant if ID is provided
      await updatePlant(id, newPlant);
    } else {
      // Add new plant
      addPlant(newPlant);
    }

    // Reset form fields after submission
    setName('');
    setImage('');
    setPrice('');
    setInStock(true);

    // Redirect back to plant list page
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{id ? 'Edit Plant' : 'Add a New Plant'}</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Plant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          In Stock
        </label>
        <div className="button-group">
          <button type="submit">{id ? 'Update Plant' : 'Add Plant'}</button>
        </div>
      </form>
    </div>
  );
};

export default NewPlantForm;
