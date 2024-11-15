import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlantList from './PlantList';
import PlantPage from './PlantPage';
import NewPlantForm from './NewPlantForm';
import Search from './Search';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify'; // Ensure toast is used
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Ensure this is used in Search

  // Fetch all plants when the component mounts
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:6001/plants');
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        toast.error("Failed to fetch plants!");
      }
    };

    fetchPlants();
  }, []);

  // Add a new plant
  const addPlant = async (newPlant) => {
    try {
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlant),
      });

      if (response.ok) {
        const addedPlant = await response.json();
        setPlants((prev) => [...prev, addedPlant]);
        toast.success("Plant added successfully!");
      } else {
        throw new Error("Failed to add plant.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Update an existing plant
  const updatePlant = async (id, updatedPlant) => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPlant),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setPlants((prev) =>
          prev.map((plant) => (plant.id === id ? updatedData : plant))
        );
        toast.success("Plant updated successfully!");
      } else {
        throw new Error("Failed to update plant.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Toggle the inStock status of a plant
  const toggleSoldOut = async (id) => {
    const plantToToggle = plants.find((plant) => plant.id === id);
    if (!plantToToggle) return;

    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inStock: !plantToToggle.inStock }),
      });

      if (response.ok) {
        const updatedPlant = await response.json();
        setPlants((prev) =>
          prev.map((plant) => (plant.id === id ? updatedPlant : plant))
        );
        toast.success("Plant updated successfully!");
      } else {
        throw new Error("Failed to update plant.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete a plant
  const deletePlant = async (id) => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPlants(plants.filter((plant) => plant.id !== id));
        toast.success("Plant deleted successfully!");
      } else {
        throw new Error("Failed to delete plant.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Header />
        <NewPlantForm addPlant={addPlant} updatePlant={updatePlant} plants={plants} />
        <Search setSearchTerm={setSearchTerm} />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <PlantList
                plants={filteredPlants}
                toggleSoldOut={toggleSoldOut}
                deletePlant={deletePlant}
              />
            }
          />
          <Route
            path="/plants/:id"
            element={<PlantPage plants={plants} setPlants={setPlants} />}
          />
          <Route
            path="/plants/edit/:id"
            element={
              <NewPlantForm
                updatePlant={updatePlant}
                plants={plants}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
