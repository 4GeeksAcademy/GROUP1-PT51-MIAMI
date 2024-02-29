import React, { useState, useContext, useEffect, useRef } from 'react';
import { Context } from '../store/appContext';
import '../../styles/searchbar.css';
import '../../styles/cardata.css';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  const cars = store.cars;

  const filteredCars = cars.filter((car) =>
    car.car_name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleClick = (e, carId) => {
    e.preventDefault();
    actions.singleCar(carId);
    navigate('/about/' + carId);
    setShowDropdown(false);
  };

  const handleClickComparison = (e, carId) => {
    e.preventDefault();
    actions.singleCar(carId);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <div className="parentDiv">
      <form>
        <div className="searchBarContainer" ref={searchContainerRef}>
          <div className="inputContainer" onClick={() => setShowDropdown(true)}>
            <input
              placeholder="Search for a Car"
              value={inputValue}
              onChange={(e) => handleSearch(e)}
              className="searchBar"
            />
          </div>
          {showDropdown && filteredCars.length > 0 && (
            <div className="custom-dropdown">
              {filteredCars.map((car, index) => (
                <div
                  className="carsDiv"
                  key={index}
                  onClick={(e) => {
                    setShowDropdown(false);
                    handleClick(e, car.id);
                  }}>
                  <div className="carNames carFormatted" value={car.car_name}>
                    <h4 className="text-secondary" key={car.id}>
                      {car.car_name}
                    </h4>
                  </div>
                  <div className="imagesDiv" style={{ width: '44rem', height: 'auto' }}>
                    {car.images.length ? <img className="rounded w-100" src={car.images[0].image_url} /> : ''}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
