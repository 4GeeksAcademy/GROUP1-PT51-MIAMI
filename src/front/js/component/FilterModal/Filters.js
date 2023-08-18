import React, {useState, useContext, useEffect } from 'react'
import "../../../styles/filters.css"
import { Context } from '../../store/appContext';
import { useNavigate } from 'react-router-dom';



const Filters = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()
  const { store, actions } = useContext(Context)
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [selectedCarMakes, setSelectedCarMakes] = useState([]);
  const [selectedCarEngines, setSelectedCarEngines] = useState([]);
  const [selectedCarTransmissions, setSelectedCarTransmissions] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [rangeValue, setRangeValue] = useState(null);


  // GETTING CARS FROM STORE
  const cars = store.cars

// Function to handle checkbox change for car types
  const handleCarTypeChange = (carType) => {
    setSelectedCarTypes((prevSelected) =>
      prevSelected.includes(carType)
        ? prevSelected.filter((type) => type !== carType)
        : [...prevSelected, carType]
    );
  };

// Function to handle checkbox change for carMake
const handleCarMakeChange = (carMake) => {
  setSelectedCarMakes((prevSelected) =>
    prevSelected.includes(carMake)
      ? prevSelected.filter((make) => make !== carMake)
      : [...prevSelected, carMake]
    );
  };

// Function to handle checkbox change for carEngines
const handleCarEngineChange = (carEngine) => {
  setSelectedCarEngines((prevSelected) =>
    prevSelected.includes(carEngine)
      ? prevSelected.filter((engine) => engine !== carEngine)
      : [...prevSelected, carEngine]
  );
};

// Function to handle checkbox change for carTransmission
const handleCarTransmissionChange = (carTransmission) => {
  setSelectedCarTransmissions((prevSelected) =>
    prevSelected.includes(carTransmission)
      ? prevSelected.filter((transmission) => transmission !== carTransmission)
      : [...prevSelected, carTransmission]
  );
};

  // Extract unique values for each property
  const uniqueCarTypes = [...new Set(cars.map(car => car.car_type))];
  const uniqueCarMakes = [...new Set(cars.map(car => car.brand))];
  const uniqueCarEngines = [...new Set(cars.map(car => car.engine))];
  const uniqueCarTransmissions = [...new Set(cars.map(car => car.transmission))];


// FUNCTION TO CONTROL RANGE INPUT

const handleRange = (e) => {
  setRangeValue(parseInt(e.target.value))
}
  // Use useEffect to log the updated selectedPrice
  useEffect(() => {
    // filter cars under selected price
    const filteredPrice = cars.filter((car) => car.price <= rangeValue);
    const priceValues = filteredPrice.map((car) => car.price);
    setSelectedPrice(priceValues);
  }, [rangeValue]);




// APPLY FILTERS BUTTON
const handleApplyFilters = () => {
  const filterArray = [{
    brand: selectedCarMakes.length ? selectedCarMakes : "",
    car_type: selectedCarTypes.length ? selectedCarTypes : "",
    engine: selectedCarEngines.length ? selectedCarEngines : "",
    transmission: selectedCarTransmissions.length ? selectedCarTransmissions : "",
    price: selectedPrice.length ? selectedPrice : ""
  }
];
  console.log("Filtered cars: ", filterArray)
  actions.applyFilters(filterArray)
  navigate('/catalog')
}

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <i class="fas fa-search"></i> 
        <h7>Filter</h7>
      </button>
      
      
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Filters</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='carPriceContainer'>
                <div className='d-flex justify-content-center'>
                  Cars under:
                </div>
                <div className='d-flex justify-content-center'>
                  <input onChange={handleRange} type="range" min="22500" max="100000" value={rangeValue} step="500"/>
                </div>
                <div className='d-flex justify-content-center'>
                  <input onChange={handleRange} value={rangeValue}/>
                </div>
              </div>
              <div className='filtersContainer row'>
                <div className="col-3 carTypeContainer">
                  Car Type
                  <div className='carFilterOptions'>
                  {uniqueCarTypes.map((carType, index) => (
                      <div key={index}>
                        <label className='parametersContainer carFormatted'>
                          <input
                            type="checkbox"
                            checked={selectedCarTypes.includes(carType)}
                            onChange={() => handleCarTypeChange(carType)}
                          />
                          {carType}
                        </label>
                      </div>
                    ))}
                    </div>
                </div>
                  <div className="col-3 carMakeContainer">
                  Car Make
                  <div className="carFilterOptions">
                    {uniqueCarMakes.map((carMake, index) => (
                      <div key={index}>
                        <label className="parametersContainer carFormatted">
                          <input
                            type="checkbox"
                            checked={selectedCarMakes.includes(carMake)}
                            onChange={() => handleCarMakeChange(carMake)}
                          />
                          {carMake}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-3 carEngineContainer">
                  Engine
                  <div className="carFilterOptions">
                    {uniqueCarEngines.map((carEngine, index) => (
                      <div key={index}>
                        <label className="parametersContainer carFormatted">
                          <input
                            type="checkbox"
                            checked={selectedCarEngines.includes(carEngine)}
                            onChange={() => handleCarEngineChange(carEngine)}
                          />
                          {carEngine}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-3 carTransmissionContainer">
                  Transmission
                  <div className="carFilterOptions">
                    {uniqueCarTransmissions.map((carTransmission, index) => (
                      <div key={index}>
                        <label className="parametersContainer carFormatted">
                          <input
                            type="checkbox"
                            checked={selectedCarTransmissions.includes(carTransmission)}
                            onChange={() => handleCarTransmissionChange(carTransmission)}
                          />
                          {carTransmission}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={() =>handleApplyFilters()}>Apply Filter(s)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters