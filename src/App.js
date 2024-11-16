import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import AddCarForm from './components/AddCarForm';
import CarList from './components/CarList';

import './App.css';


function App() {

  const [cars, setCars] = useState(["Volvo S60", "Toyota RAV 4"]);

  const addCar = (car) => {
    setCars((prevCars) => [...prevCars, car]);
  };

  return (
    <div className="App">
      <Header title= "Car Managment App" />
      <AddCarForm addCar={addCar} />
      <CarList cars={cars} />
    </div>
  );
}

export default App;
