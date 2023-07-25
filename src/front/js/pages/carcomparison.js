import React, { useContext } from "react";
import CarCards from "../component/CarCards";
import { Context } from "../store/appContext";

const CarComparison= () => {
    const {store, actions} = useContext(Context);
    console.log("compareCars value on CarComparison: ", store.compareCars)
    


    return (
        <div>
            <h1>START COMPARING VEHICLE TO VEHICLE</h1>
            <CarCards cars={store.compareCars}/>
        </div>
    )
}



export default CarComparison;