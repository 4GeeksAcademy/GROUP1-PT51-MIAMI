import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
import Filters from "./FilterModal/Filters";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container m-0">
				<div>
					<Link to={"/"}>
						<img
						src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png"
						style={{"width": "7rem", "height": "auto"}}
						/>
					</Link>
				</div>
				<div>
					<Link to="/catalog">
					<button className="btn btn-primary">
						<h5>Cars catalog</h5>
					</button>
					</Link>
				</div>
				<div>
					< SearchBar />
				</div>
				<div>
					< Filters />
				</div>
				<div>
					<Link to={"/compare"}>
						<button>
							Compare added cars
						</button>
					</Link>
				</div>
				<div>	
					<Link to={"/signup"}>
					<button className="btn btn-primary">
						<h5>Sign Up</h5>
					</button>
					</Link>
					<Link to={"/Login"}>
					<button className="btn btn-primary"><h5>Login</h5></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
