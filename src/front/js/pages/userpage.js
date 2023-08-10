import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/userPageStyles.css";
import CarCards from "../component/CarCards";

const UserPage = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/private`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setLoading(false);
      }
    };

    fetchUserData();
    actions.retrieveData();
  }, [store.token] [store.saved]);

  if (loading) {
    return <p className="login-title">Loading user data...</p>;
  }

  if (user) {
    const savedCars = user.saved.map(savedCar => savedCar.car);
    return (
      <div>
        <div className="user-container">
          <h2 className="user-title">Welcome, {user.user}</h2>
          <p className="data-label">
            Email: <span className="data-value">{user.email}</span>
          </p>
          <p className="data-label">
            Phone Number: <span className="data-value">{user.phone_number}</span>
          </p>
          <p className="data-label">
            Number Of Favorites: <span className="data-value">{store.saved.length}</span>
          </p>
        </div>
        <div>
          <div className="favorite-cars">
            <center><h3>Saved Favorite Cars</h3></center>
            <CarCards cars={savedCars} />
          </div>
          {/* Render other user data here */}
        </div>
      </div>
    );
  }

  return <p className="login-title">Error fetching user data</p>;
};

export default UserPage;
