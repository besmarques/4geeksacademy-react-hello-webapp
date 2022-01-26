import React from "react";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";




const PlanetsSection = props => {
    return (
        <>
        <div className="fs-3 fw-bold mb-5 text-danger border-bottom border-danger border-5">Vehicles</div>
            <div className="pt-3 pb-3 d-flex justify-content-around horizontal-scrollable">
                <div className="card col-3 border border-danger bg-dark ">
                    <div className="row d-flex g-0 border-bottom border-danger">
                        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..." ></img>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Go somewhere</a>
                    </div>
                </div>            
            </div>
        </>
    );
}

export default PlanetsSection