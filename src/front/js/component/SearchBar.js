import React, { useState, useContext, useEffect } from 'react'
import {Context} from "../store/appContext"
import "../../styles/searchbar.css"
import "../../styles/cardata.css"
import { Link, useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const { store, actions } = useContext(Context)
  const [ inputValue, setInputValue ] = useState("")
  const [ showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  

  const cars = store.cars
  

// FILTERING CAR NAMES ARRAY TO FILTER THE ONE THAT MATCHES INPUTVALUE
  const filteredCars = cars.filter((car) => car.car_name.toLowerCase().includes(inputValue.toLowerCase())
  );

// SETTING INPUT VALUE
  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleClick = (e, carId) => {
    e.preventDefault()
    actions.singleCar(carId)
    navigate("/about/" + carId)
  
  }

  const handleClickComparison = (e, carId) => {
    e.preventDefault()
    actions.singleCar(carId)
    
  }


  return (
    <div className="parentDiv">
          <form>
            <div className='searchBarContainer'>
              <div className='inputContainer' onClick={() => setShowDropdown(true)}>
                <input
                placeholder='Search for a Car'
                value={inputValue}
                onChange={(e) => handleSearch(e)}
                onKeyDown={() => setShowDropdown(true)}
                className='searchBar'/>
              </div>                
              {showDropdown && filteredCars.length > 0 && (
              <div className='custom-dropdown' onMouseLeave={() => setShowDropdown(false)}>
                {filteredCars.map((car, index) =>
                
                (
                    <div className="carsDiv" key={index} onClick={(e) => {
                      setShowDropdown(false)
                      handleClick(e, car.id)
                    }} >
                          <div className="carNames carFormatted" value={car.car_name}>
                            <h4 className='text-secondary' key={car.id}>{car.car_name}</h4>
                          </div>
                          <div className='imagesDiv' style={{"width": "44rem", "height": "auto"}}>
                            <img className="rounded w-100" src={car.images[0].image_url }/>
                          </div>
                    </div>
                ))}
              </div>
             )}
            </div>
          </form> 
    </div>
  )
}

export default SearchBar;