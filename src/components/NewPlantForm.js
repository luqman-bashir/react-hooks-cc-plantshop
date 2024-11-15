import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewPlantForm = ({ addPlant, updatePlant, plants }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price, inStock };

    if (id) {
      updatePlant(id, newPlant);
    } else {
      addPlant(newPlant);
    }

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Plant' : 'Add Plant'}</h2>
      <input
        type="text"
        placeholder="Name"
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
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        In Stock
      </label>
      <button type="submit">{id ? 'Update Plant' : 'Add Plant'}</button>
    </form>
  );
};

export default NewPlantForm;
