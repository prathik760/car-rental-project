import React, { useState } from 'react';
import './Managecar.css';

const initialCars = [
  {
    id: 1,
    name: 'Audi A6',
    model: '2023',
    price: '$120/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'BMW X5',
    model: '2022',
    price: '$140/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
];

const ManageCars = () => {
  const [cars, setCars] = useState(initialCars);

  const handleDelete = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div className="manage-cars">
      <h2>Manage Cars</h2>
      <button className="add-car-btn">+ Add New Car</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Fuel</th>
            <th>Transmission</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.fuel}</td>
              <td>{car.transmission}</td>
              <td>{car.price}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCars;
