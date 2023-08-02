import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/userPageStyles.css";

const UserPage = () => {
  const { store } = useContext(Context);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/private`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        console.log("User Data:", data); // For debugging (optional)
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [store.token]);

  // Show loading message while fetching user data
  if (loading) {
    return <p className="login-title">Loading user data...</p>;
  }

  // If user data is available, display it
  if (user) {
    return (
      <div className="user-container">
        <h2 className="user-title">Welcome, {user.user}</h2>
        <p className="data-label">Email: <span className="data-value">{user.email}</span></p>
        <p className="data-label">Phone Number: <span className="data-value">{user.phone_number}</span></p>
        {/* Render other user data here */}
      </div>
    );
  }

  // If user data is not available, show an error message
  return <p className="login-title">Error fetching user data</p>;
};

export default UserPage;
