import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import "../../styles/cardata.css";
import "../../styles/carcards.css";

const CarCards = ({ cars }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [isLimit, setIsLimit] = useState(false);
  const token = localStorage.getItem("token");

  const handleClick = (e, carId) => {
    actions.singleCar(carId);
    e.preventDefault();
    navigate("/about/" + carId);
  };

  return (
    <div className="container-fluid row m-0 w-100 justify-content-center" style={{ background: '#A6A4A4' }}>
      {cars.map((car, index) => {
        return (
          <div key={index} className="col-3 m-3 carCard bg bg-dark rounded-4 p-0" style={{ width: "20%" }}>
            <img
              src={car.images.length ? car.images[0].image_url:"https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"}
              className="card-img-top rounded-5"
              alt="..."
              style={{ width: "100%", height: "230px", objectFit: "fill" }}
            />
            <div className="card-body d-flex">
              <div className='w-100'>                
                  <div className='row justify-content-around border-bottom border-black bodyContainer'>
                    <h4 className="card-text col" style={{ color: "rgb(108,117,125)" }}>Model</h4>
                    <p className='carFormatted card-text col'>{car.car_name}</p>
                  </div>
                  <div className='row justify-content-around border-bottom border-black bodyContainer'>
                    <h4 className="card-text col " style={{ color: "rgb(108,117,125)" }}>Make</h4>
                    <p className='carFormatted card-text col'>{car.brand}</p>
                  </div>
                  <div className='row justify-content-around border-bottom border-black bodyContainer'>
                    <h4 className="card-text col" style={{ color: "rgb(108,117,125)" }}>MSRP</h4>
                    <p className='carFormatted card-text col'>{car.price}</p>
                  </div>
                <div className="buttonContainer d-flex justify-content-center pt-3">
                  <button href="#" className="btn btn-danger"
                    onClick={(e) => {
                      handleClick(e, car.id);
                      console.log("Car ID CLICKED: ", car.id)
                      }}>
                    Detailed Specs
                  </button>
                  {token &&
                    <div className="d-flex align-items-center">
                      <button
                        className={`favoritesCards ${store.saved.includes(car.id) ? 'active' : ''}`}
                        onClick={() => {
                          if (store.saved.includes(car.id)) {
                            return alert("Car's already saved");
                          } else {
                            actions.saveFavorites(car);
                          }
                        }}>
                        <i className="fa-solid fa-thumbs-up" style={{ color: "#ffd43b", padding: "0" }}/>
                      </button>                     
                        <button 
                        className='favoritesCards'
                        onClick={() => {
                          if (!store.saved.includes(car.id)) {
                            return alert("Car's not on Saved List");
                          } else {
                            actions.deleteSaved(car.id);
                          }
                        }}>
                          <i className="fa-solid fa-thumbs-down" style={{ color: "#ffd43b", padding: "0" }}/>
                        </button>
                      <button
                        onClick={() => {
                          if (store.compareCars.includes(car)) {
                            return alert("Car already added");
                          } else {
                            actions.addCarToCompare(car);
                          }
                        }}>
                        <div className={`compareButton ${store.compareCars.includes(car) ? 'active' : ''}`}>
                        <i class="fa-solid fa-code-compare"></i>
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          if (!store.compareCars.includes(car)) {
                            return alert("Car is not on compare list");
                          } else {
                            actions.deleteCarToCompare(car);
                          }
                        }}>
                        <div className={`compareButton ${store.compareCars.includes(car) ? 'active' : ''}`}>
                          -<i class="fa-solid fa-code-compare"></i>
                        </div>
                      </button>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CarCards;