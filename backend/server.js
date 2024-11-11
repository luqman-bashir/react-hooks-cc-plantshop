const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 6001;

app.use(cors());
app.use(express.json());

// Define the path to the db.json
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read the db.json file
const readDb = () => {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
};

// GET /plants
app.get('/plants', (req, res) => {
  const data = readDb();
  res.json(data.plants);
});

// POST /plants
app.post('/plants', (req, res) => {
  const newPlant = req.body;
  const data = readDb();
  newPlant.id = data.plants.length + 1; 
  data.plants.push(newPlant);

  // Save updated db.json
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.status(201).json(newPlant);
});

// PATCH /plants/:id
app.patch('/plants/:id', (req, res) => {
  const { id } = req.params;
  const { price, inStock } = req.body;
  
  const data = readDb();
  const plant = data.plants.find(p => p.id === parseInt(id));

  if (plant) {
    if (price !== undefined) plant.price = price;
    if (inStock !== undefined) plant.inStock = inStock;

    // Save updated db.json
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

    res.json(plant);
  } else {
    res.status(404).json({ message: 'Plant not found' });
  }
});

// DELETE /plants/:id
app.delete('/plants/:id', (req, res) => {
  const { id } = req.params;
  
  let data = readDb();
  data.plants = data.plants.filter(p => p.id !== parseInt(id));

  // Save updated db.json
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.status(204).json({});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
