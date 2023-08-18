import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'
import '../../styles/starRatingInput.css'
import "../../styles/cardata.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const AboutCar = () => {
    const [rating, setRating] = useState(0)
    const [reviewText, setReviewText] = useState('')
    const {store, actions} = useContext(Context)
    const token = localStorage.getItem("token")
    const actualCar = store.singleCar
    let counter = 0


    const handleSubmit = (e) => {
      if (token) {
        e.preventDefault()
        actions.createReview(rating, reviewText, actualCar.id)
        console.log('Rating:', rating, 'Review Text: ',reviewText, "car id: ", actualCar.id)
        setRating(0)
        setReviewText('')
        
        } else alert("Log in to create a review")
    }
    // const handleStarClick = (selectedRating) => {
    //   setRating(selectedRating);
    // }

    useEffect(() => {
      actions.getCarReviews(actualCar.id)
    }, [actualCar, reviewText, rating])


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
        <div className='reviewContainer' style={{background: '#212529', width: "101%"}}>
          <div className='border text-center border-light-subtle'>
            <h1 style={{color: '#60757d'}}>Car Reviews</h1>
            { token ?
            <form onSubmit={(e) => { 
              if (!rating.length)
                {handleSubmit(e);

                }
              else {
                alert('Fields cannot be empty')
                e.preventDefault()
                }             
              }}>                   
                <div>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={faStar}
                      className={star <= rating ? 'active' : ''}
                      onClick={() => setRating(star)}
                    />)
                  )}
                </div>
                  <input
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder='Review Text'
                  />
                </div>
                <button className="btn btn-success" type="submit">Submit Review</button>
            </form> :
            ""
            }
          </div>
          <div>
            {store.carReviews.map((car, index) => {
              return (
                <div className="ps-4 pt-3 border border-top-0" key={index} style={{color: '#60757d'}}>
                  <h4>User: {car.user}</h4>
                  <div className='d-flex'>
                    <p className='me-4'><strong>{car.rating}</strong><i className="fa-solid fa-star" style={{ color: "#ffd43b" }}></i></p>
                    <p>{car.review_text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>      
    </div>
  );
};
export default AboutCar;