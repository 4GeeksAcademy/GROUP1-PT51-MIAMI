import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Filters from "./FilterModal/Filters";
import LogoutButton from "./LogoutButton";
import { Context } from "../store/appContext";
import "../../styles/cardata.css";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid m-0">
        <div className="d-flex align-items-center">
          <Link to={"/"}>
            <img
              className="logo" // Add the class name here
              src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png"
              style={{ width: "7rem", height: "auto" }}
              alt="Logo"
            />
          </Link>
          <Link to="/catalog">
            <button className="btn btn-primary ml-3">
              <i className="fas fa-book fa-1x"></i>
              Catalog
            </button>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <SearchBar />
          <Filters />

        </div>
        <div className="ml-auto d-flex align-items-center">
        {token && (
  <>
    <Link to="/userpage">
      <button className="navbuttons" style={{ marginRight: '5px' }}>
        <i className="fa-solid fa-user"></i>
      </button>
    </Link>
    <Link to="/home">
      <button className="navbuttons" style={{ marginRight: '5px' }}>
        <i className="fa-solid fa-home"></i>
      </button>
    </Link>
  </>
)}



          {token ? (
            <LogoutButton />
          ) : (

            <div className="d-flex">
              <Link to={"/signup"}>
                <button className="signup">
                  Sign Up
                </button>
              </Link>
              <Link to={"/Login"}>
                <button className="btn btn-primary">
                  <h5>Login</h5>
                </button>
              </Link>
            </div>
          )}
          <button
            onClick={() => actions.retrieveData()}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Quick Links
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Wrap the Quick Links menu in a new div for styling */}
              <div className="quick-links-menu">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to={"/"}>
                      <button className="btn navbar">

                        <i className="fas fa-home fa-2x"></i>
                      </button>

                    </Link>
                  </li>
                  {token ? (
                    <div>
                      <li className="nav-item">
                        <Link to={"/compare"}>
                          <button className="btn btn-secondary">
                            Compare Page
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/userpage"}>
                          <button className="btn btn-secondary">
                            Profile
                          </button>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        {/* "Saved Cars" as a dropdown button */}
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Saved Cars
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          id="drop-down-menu"
                        >
                          {store.saved.map((item, index) => {
                            const car = item.car;
                            if (store.saved.includes(car))
                              alert("Car is already added");
                            else if (!car || !car.car_name) {
                              return null;
                            }
                            console.log("CAR NAME FROM SAVED: ", car.car_name);
                            return (
                              <div key={index} style={{ display: "flex" }}>
                                <li className="carFormatted">
                                  {car.car_name}
                                </li>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    if (store.compareCars.includes(car)) {
                                      return alert("Car already added");
                                    } else {
                                      actions.addCarToCompare(car);
                                    }
                                  }}
                                >
                                  Compare
                                </button>
                                <button
                                  onClick={() => actions.deleteSaved(car.id)}
                                >
                                  Unsave
                                </button>
                              </div>
                            );
                          })}
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <Link to={"/compare"}>
                            <li className="dropdown-item" href="#">
                              <button className="btn btn-success">
                                Compare selected saved cars (3 MAX.)
                              </button>
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

