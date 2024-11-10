# Plant Shop
# By Luqman Bashir
# 10/11/2024
Welcome to the Plant Shop! This is a simple React application where users can view, add, edit, and delete plants. Users can also toggle the availability of plants (in-stock status) and filter plants by their name.

## Features
View all plants: Display a list of all available plants.
Add new plants: Add new plants to the list with details such as name, price, image URL, and in-stock status.
Edit plants: Edit the details of an existing plant.
Delete plants: Remove plants from the list.
Toggle availability: Toggle the in-stock status of plants.
Search plants: Search plants by name using a search bar.

## Tech Stack
Frontend: React.js
State Management: React useState and useEffect hooks
Routing: React Router for page navigation
Backend: JSON Server for a fake REST API (running locally)
API:
GET /plants: Fetch all plants
POST /plants: Add a new plant
PATCH /plants/:id: Update the availability (in-stock status) of a plant
DELETE /plants/:id: Delete a plant

## Requirements
Node.js (Recommended version: 14.x.x or later)
npm (or yarn)

## Getting Started
### 1.  Clone the Repository
bash
Copy code
git clone https://github.com/your-username/plant-shop.git
cd plant-shop
2. ### Install Dependencies
Install the necessary packages for the project:

bash
Copy code
npm install
### 3. Start the Backend
This project uses JSON Server to simulate a REST API. Start the JSON server by running the following command:

bash
Copy code
npm run server
This will start the JSON server at http://localhost:6001/plants.

### 4. Start the Frontend
In a separate terminal window, run the following to start the React application:

bash
Copy code
npm start
This will start the React app at http://localhost:3000.

### 5. Open the App
Once the app and server are running, open http://localhost:3000 in your browser to see the plant shop in action.

## File Structure
bash
Copy code
/plant-shop
  /public
    index.html
  /src
    /components
      App.js
      Header.js
      PlantCard.js
      PlantList.js
      PlantPage.js
      NewPlantForm.js
      Search.js
    /pages
      Home.jsx
    App.css
    index.js
  /server
    db.json (fake API data for the plant store)
  package.json

## Features Breakdown
### App.js
The main entry point of the app. It handles the routing for the plant list and plant details pages and includes the logic for fetching, adding, and deleting plants.

### NewPlantForm.js
A form that allows users to add new plants or edit existing ones. It collects information like plant name, image, price, and stock status.

### PlantList.js
Displays the list of plants and includes functionality to toggle the availability (in-stock status) and delete plants.

### PlantCard.js
A component for rendering individual plant cards in the list with options to toggle availability and delete a plant.

### Search.js
A search bar for filtering plants based on their name.

### PlantPage.js
A detailed view of a single plant, where users can edit plant details.

### Header.js
A simple header that provides navigation and information about the app.

## Contributing
Feel free to fork the repository and contribute. To contribute:

## Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.

## License
This project is licensed under the MIT License.