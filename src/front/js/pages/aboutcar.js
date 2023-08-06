import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import "../../styles/cardata.css"
  const AboutCar=()=>{
    const{store,actions} = useContext(Context)
    const actualCar = store.singleCar
    console.log(actualCar)
    
  return (
    <div className='bg bg-secondary'>
        <div className="container">
        <div className="row mb-4 justify-content-between">
          <div className="col-5 carFormatted">
            <section className='bg-dark text-light mt-2 p-2 rounded'>
              <h2>Car Name</h2>
              <h5>{actualCar && actualCar.car_name}</h5>
            </section>
            <section className='bg-dark text-light mt-2 p-2 rounded'>
              <h2>Car brand</h2>
              <h5>{actualCar && actualCar.brand}</h5>
            </section>
            <section className='bg-dark text-light mt-2 p-2 rounded'>
              <h2>Car Type</h2>
              <h5>{actualCar && actualCar.car_type}</h5>
            </section>
            <section className='bg-dark text-light mt-2 p-2 rounded'>
              <h2>Transmission</h2>
              <h5>{actualCar && actualCar.transmission}</h5>
            </section>
            <section className='bg-dark text-light my-2 p-2 rounded'>
              <h2>Price</h2>
              <h5>{actualCar && actualCar.price}</h5>
            </section>
          
          </div>
          {actualCar && actualCar.images && actualCar.images.length > 0 ? (
              actualCar.images.map(({image_url})=><img
                className="border border-warning border-4 border-opacity-50 w-50"
                src={image_url}
                alt="Car"
              />)
            ) : (
              <h1>Loading</h1>
            )}
          </div>
          </div>      
    </div>
  

        )}
export default AboutCar;