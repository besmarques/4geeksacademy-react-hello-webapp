import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const SinglePlanetView = () => {
    
    const { store } = useContext(Context);
	const params = useParams();

    return (
    <>
    <div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-5 pb-5">
                
                <div className="pt-3 pb-3 d-flex justify-content-around">
                    <div className="col-5 border border-primary">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="card-img-top" alt="..." ></img>
                    </div>
                    <div className="col-7">
                        <div className="fs-3 ms-5 fw-bold mb-3 text-primary border-bottom border-primary border-5">Char Name</div>
                        <div className="fs-5 ms-5 text-light">Model: </div>
                        <div className="fs-5 ms-5 text-light">Manufacturer: </div>
                        <div className="fs-5 ms-5 text-light">Class: </div>
                        <div className="fs-5 ms-5 text-light">Cost: </div>
                        <div className="fs-5 ms-5 text-light">Speed: </div>
                        <div className="fs-5 ms-5 text-light">Length: </div>
                        <div className="fs-5 ms-5 text-light">Cargo Capacity: </div>
                        <div className="fs-5 ms-5 text-light">Mimimum Crew: </div>
                        <div className="fs-5 ms-5 text-light">Passengers: </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default SinglePlanetView