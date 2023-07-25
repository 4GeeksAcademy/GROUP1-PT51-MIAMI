const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}],
			saved: [],
			cars: [],
			users: [],
			staticCars: [
				{ car_name: 'Car 1' },
				{ car_name: 'Car 2' },
				{ car_name: 'Car 3' },
				],
			token: null,
			filters: [{
				brand: "",
				car_name: "",
				car_type: "",
				engine: "",
				transmission: "",
				year: ""
			}],
			singleCar: [],
			errorMessage: null,
			compareCars: []
		},
		actions: {
			getAllUsers: () => {
				fetch(`${process.env.BACKEND_URL}/users`)
				.then((res) => res.json())
				.then((data) => {
					setStore({users: data})
				})

			},
			getAllCars:  () => {
				 fetch(`${process.env.BACKEND_URL}/cars`)
				.then((res) => res.json())
				.then((data) => {
					setStore({cars: data})
					console.log("These are stored cars in database:", data)
				})
			},
			applyFilters: (filterArray) => {
				setStore({filters: filterArray})
				console.log("filters value:", filterArray)
			},
			singleCar: async (id) => {
				try {
				  const response = await fetch(`${process.env.BACKEND_URL}/cars/${id}`, {
					method: 'GET',
					redirect: 'follow'
				  });
				  if (!response.ok) {
					// Handle error if the response is not successful (optional)
					throw new Error('Network response was not ok');
				  }
				  const data = await response.json();
				  setStore({ singleCar: data });
				} catch (error) {
				  console.error('Error fetching singleCar data:', error);
				  // Handle any error or set error state if needed
				}
			  },
			  setErrorMessage: (message) => {
				setStore({ errorMessage: message });
			  },
	  
			  clearErrorMessage: () => {
				setStore({ errorMessage: null });
			  },
			  login: async (email, password) => {
				try {
				  const response = await fetch(`${process.env.BACKEND_URL}/login`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({ email, password })
				  });
		
				  if (response.ok) {
					// Login successful
					const data = await response.json();
	  
					// Save the authentication token to the store
					setStore({ token: data.token });
					console.log(data.token);
	  
					// Save the token to localStorage for persistent access
					localStorage.setItem("token", data.token);
	  
					// Reset the error message (if any) after successful login
					setStore({ errorMessage: null });
		
					// Redirect to the desired page or perform any necessary action
					// Example: history.push("/dashboard");
				  } else {
					// Login failed
					throw new Error("Invalid email or password");
				  }
				} catch (error) {
				  console.log("Error during login", error);
				  throw error;
				}
			  },
			  addCarToCompare: (car) => {
				const [isLimitReached, setIsLimitReached] = useState(false);
				let compareCars = getStore().compareCars
				if (compareCars.length > 3) {
					setIsLimitReached(true)
					return;
				}
				else
				compareCars.push(car)
				setStore({compareCars : compareCars})
				console.log("compareCars value: ",compareCars)
			  },

			  deleteCarToCompare: (car) => {
				let compareCars = getStore().compareCars
				let deletedCarComparison = compareCars.filter((item) => {
					return item.id != car.id
				})
				setStore({compareCars : deletedCarComparison})
			  }
}
}
}
export default getState;

	