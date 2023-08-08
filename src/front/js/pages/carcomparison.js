import React, { useContext } from "react";
import CarCards from "../component/CarCards";
import { Context } from "../store/appContext";

const CarComparison= () => {
    const {store, actions} = useContext(Context);
    console.log("compareCars value on CarComparison: ", store.compareCars)
    


    return (
        <div>
            <div className="cardsTitleHolder text-light bg-opacity-50 p-3" style={{color: "#0D0D0D"}}>
                <h1 className="descriptionTitle text-center m-0" style={{color: '#004f6d'}}>Compare your favorites</h1>
            </div>
            <div className="row d-flex" style={{background: "rgb(174, 179, 183)"}}>
                <div className="col text-end">
                    <CarCards cars={store.compareCars}/>
                </div>
            </div>
        </div>
    )
}



export default CarComparison;