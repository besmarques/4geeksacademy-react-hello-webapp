import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";




const PlanetsSection = props => {
    return (
        <>
        <div className="fs-3 fw-bold mb-5 text-primary border-bottom border-primary border-5">Vehicles</div>
            <div className="pt-3 pb-3 d-flex justify-content-around horizontal-scrollable">
                <div className="card col-3 border border-primary bg-dark ">
                    <div className="row d-flex g-0 border-bottom border-primary">
                        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..." ></img>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        

                        <div className="d-flex justify-content-between">
                            <Link to="/SinglePlanetView">
                                <button className="btn btn-primary">Go somewhere</button>
                            </Link>
                            <Link to="">
                                <button className="btn btn-primary">+</button>
                            </Link>
                        </div>
                    </div>
                </div>            
            </div>
        </>
    );
}

export default PlanetsSection