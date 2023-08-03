import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'
import "../../styles/cardata.css"

const CarCards = ({cars}) => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()
  const [isLimit, setIsLimit] = useState(false)
  const token = localStorage.getItem("token")
  const handleClick = (e, carId) => {
    actions.singleCar(carId)
    e.preventDefault()
    navigate("/about/" + carId)
  }

  return (
    <div className="bg bg-secondary" style={{"display": "flex"}}>
    {cars.map((car, index) => {
        return (
            <div key={index} className="card bg bg-dark d-flex rounded-4">
            <img
              src={car.images[0].image_url}
              className="card-img-top rounded-5"
              alt="..."
              style={{ width: "100%", height: "auto"}}
            />
            <div className="card-body d-flex">
                <div className='w-100'>     
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-title col" style={{color: "rgb(108,117,125)"}}>Model</h4>
                    <p className='carFormatted col'>{car.car_name}</p>
                  </div>               
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-text col " style={{color: "rgb(108,117,125)"}}>Make</h4>
                    <p className='carFormatted col'>{car.brand}</p>
                  </div>            
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-text col" style={{color: "rgb(108,117,125)"}}>Car Type</h4>
                    <p className='carFormatted col'>{car.car_type}</p>
                  </div>               
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-text col" style={{color: "rgb(108,117,125)"}}>Engine</h4>
                    <p className='carFormatted col'>{car.engine}</p>
                  </div>             
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-text col" style={{color: "rgb(108,117,125)"}}>Transmission</h4>
                    <p className='carFormatted col'>{car.transmission}utomatic</p>
                  </div>
                  <div className='row justify-content-around border-bottom border-black'>
                    <h4 className="card-text col" style={{color: "rgb(108,117,125)"}}>MSRP</h4>
                    <p className='carFormatted col'>{car.price}</p>
                  </div>            
                  <div className="buttonContainer d-flex justify-content-center">
                      <button href="#" className="btn btn-danger"
                      onClick={(e) => {handleClick(e, car.id)}}>
                        Detailed Specs
                      </button>
                      {token ? 
                      <div>
                        <button
                        className="favoritesCards">
                        <div
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                          if (store.saved.includes(car.id)) {
                            return alert("Car's already saved")
                          } else actions.saveFavorites(car);
                        }}
                        >
                          Save<i className="fa-solid fa-star" style={{ color: "#ffd43b" }}></i>
                        </div>
                        </button>
                        <button>
                        <div
                        onClick={() => {
                          if (store.compareCars.includes(car)) {
                            return alert("Car already added")
                          } else {
                            actions.addCarToCompare(car);
                          }
                          }}>
                          Add to compare
                        </div>
                          </button>
                          <button
                            onClick={() => {
                              if (!store.compareCars.includes(car) ) {
                                return alert("Car is not on compare list")
                              }  else {
                                actions.deleteCarToCompare(car);
                              }
                              }}>
                          <div>
                            Delete from compare
                            </div>
                          </button>
                      </div> : ""}
                  </div>
                </div>
            </div>
          </div>
        )
    })}
    </div>
  )
}

export default CarCards