import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import CarCards from '../component/CarCards';

const CarViews = () => {
  const { store, actions } = useContext(Context);

  // Filter the cars based on the selected filters
  const filteredCars = () => {
    console.log("Filters value: ", store.filters)
    // If no filters are selected, return all cars
    if (
      !store.filters.some((filter) => filter.brand) &&
      !store.filters.some((filter) => filter.car_type) &&
      !store.filters.some((filter) => filter.engine) &&
      !store.filters.some((filter) => filter.transmission) &&
      !store.filters.some((filter) => filter.price)
    ) {
      return store.cars;
    }
    
    // Apply filters to the cars array
    return store.cars.filter((car) => {
      if (store.filters.some((filter) => filter.brand) && 
          !store.filters.some((filter) => filter.brand.includes(car.brand)) )
          return false;
          if (store.filters.some((filter) => filter.car_type) && 
          !store.filters.some((filter) => filter.car_type.includes(car.car_type)) )
          return false;
          if (store.filters.some((filter) => filter.engine) && 
          !store.filters.some((filter) => filter.engine.includes(car.engine)) )
          return false;      
          if (store.filters.some((filter) => filter.transmission) && 
          !store.filters.some((filter) => filter.transmission.includes(car.transmission)) )
          return false;
          if (store.filters.some((filter) => filter.price) && 
          !store.filters.some((filter) => filter.price.includes(car.price)) )
          return false;

        return true;
    });
  };

  const carsToDisplay = filteredCars();
  return (
    <div>
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle text-center">Cars</h1>
      </div>
      <div className="">
        <div className="bg-black">
              <span>
                <CarCards cars={carsToDisplay}/>
              </span>
        </div>
      </div>      
    </div>
  )
}

export default CarViews