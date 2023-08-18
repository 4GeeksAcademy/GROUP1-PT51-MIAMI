import React from 'react';
import "../../styles/carousel.css"; // Make sure to adjust the path to your CSS file
import { Link } from 'react-router-dom';

const Carousel = () => {
  const handleSignUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Sign Up Today!</h1>
                  <p>Join Compare Car Pro today to compare your favorite cars.</p>
                  <p>
                    {/* Add onClick event handler to scroll to the top */}
                    <Link to="/signup">
                      <a className="btn btn-lg btn-primary" href="#" onClick={handleSignUpClick}>
                        Sign up
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>User Interface and Experience</h1>
                  <p>A user-friendly interface with intuitive navigation enhances the overall experience.</p>
                </div>
              </div>
            </div>

            {/* Third Slide */}
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Search and Filtering Options</h1>
                  <p>Effective search functionality and advanced filtering options help users narrow down their choices based on preferences such as make, model, price range, mileage, and more.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Time-Saving <span className="text-muted">It’ll blow your mind.</span></h2>
              <p className="lead">Instead of visiting multiple dealerships or manufacturer websites, users can quickly compare various car options on a single platform, saving them time and effort.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Image</title>
                <image href="https://assets.volkswagen.com/is/image/volkswagenag/volkswagen-taigun-homepage-thumb-banner?Zml0PWNyb3AlMkMxJndpZD01MDAmaGVpPTUwMCZmbXQ9anBlZyZxbHQ9NzkmYmZjPW9mZiY4Y2Uy" width="100%" height="100%" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading text-light">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead text-light">Transparent pricing and feature comparisons help users avoid hidden costs and make more accurate cost estimates for their desired features.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Image</title>
              <image href="https://www.paenergyratings.com/blog/wp-content/uploads/2022/10/compare-suppliers-PA-energy.jpg" width="100%" height="100%" />
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading text-light">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead text-light">And yes, user reviews and ratings! Users can benefit from reading reviews and ratings from other car owners, giving them insights into real-world experiences with different vehicles.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Image</title>
              <image href="https://www.salesleadsinc.com/media/1419/customer-reviews.png" width="100%" height="100%" />
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>





  );
};

export default Carousel;
