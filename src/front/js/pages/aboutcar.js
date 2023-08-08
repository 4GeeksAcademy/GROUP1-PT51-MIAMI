import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import "../../styles/cardata.css"
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css'


const AboutCar = () => {
  
    const {store} = useContext(Context)
    const actualCar = store.singleCar
    console.log("actualCar data: ",actualCar)
    let counter = 0

  return (
    <div className='bg bg-secondary'>
        <div className="container">
          <div className="row mb-4 justify-content-between">
            <div className="col-5 carFormatted">
              <section className='bg-dark text-light mt-2 p-2 rounded'>
                <h3 style={{ color: "rgb(108,117,125)" }}>Model</h3>
                <h5>{actualCar && actualCar.car_name}</h5>
              </section>
              <section className='bg-dark text-light mt-2 p-2 rounded'>
                <h3 style={{ color: "rgb(108,117,125)" }}>Make</h3>
                <h5>{actualCar && actualCar.brand}</h5>
              </section>
              <section className='bg-dark text-light mt-2 p-2 rounded'>
                <h3 style={{ color: "rgb(108,117,125)" }}>Car Type</h3>
                <h5>{actualCar && actualCar.car_type}</h5>
              </section>
              <section className='bg-dark text-light mt-2 p-2 rounded'>
                <h3 style={{ color: "rgb(108,117,125)" }}>Transmission</h3>
                <h5>{actualCar && actualCar.transmission}</h5>
              </section>
              <section className='bg-dark text-light my-2 p-2 rounded'>
                <h3 style={{ color: "rgb(108,117,125)" }}>MSRP</h3>
                <h5>{actualCar && actualCar.price}</h5>
              </section>          
          </div>
            {actualCar && actualCar.images && actualCar.images.length > 0 ? (
              
              actualCar.images.map(({ index, image_url }) => {
                counter++;

                return (
                    <img
                      key={index}
                      className="border border-opacity-50 mt-2 rounded"
                      src={image_url}
                      alt="Car"
                      style={{width: counter === 1 ? "57%" : "100%", height: "auto", objectFit: "fill", padding: "0" }}
                    />
                );
              })
              ) : (
              <h1>Loading</h1>
              )}
        </div>
      </div>      
    </div>
  );
};
export default AboutCar;