import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container">
			<div className="background">
			</div>
			<section className="hero text-center text-capitalize position-absolute top-50 start-50 translate-middle text-white" style={{fontSize:48,zIndex:"1000"}}>
			<h1 style={{fontSize:48,zIndex:"1000"}} >Vehicles that drive the world</h1>
				<p className="fs-5 py-2 ps-1">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
			</section>
			<div className="sight-info">
				<p>cars on sight</p>
			</div>
		</div>	);
};
