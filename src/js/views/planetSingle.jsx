import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const SinglePlanetView = () => {
    
    const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(() => {
        actions.getSinglePlanet(params.theid)
    }, []);

    return (
    <>
    <div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-5 pb-5">
            <div className="pt-3 pb-3 d-flex justify-content-around">
                <div className="col-5">
                    <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="card-img-top border border-primary" alt="..." ></img>
                </div>
                <div className="col-7">
                    <div className="fs-3 ms-5 fw-bold mb-3 text-primary border-bottom border-primary border-5">{store.singlePlanet.name}</div>
                    <div className="fs-5 ms-5 text-light">Diameter: {store.singlePlanet.diameter}</div>
                    <div className="fs-5 ms-5 text-light">Rotation Period: {store.singlePlanet.rotation_period}</div>
                    <div className="fs-5 ms-5 text-light">Orbital Period: {store.singlePlanet.orbital_period}</div>
                    <div className="fs-5 ms-5 text-light">Gravity: {store.singlePlanet.gravity}</div>
                    <div className="fs-5 ms-5 text-light">Population: {store.singlePlanet.population}</div>
                    <div className="fs-5 ms-5 text-light">Climate: {store.singlePlanet.climate}</div>
                    <div className="fs-5 ms-5 text-light">Terrain: {store.singlePlanet.terrain}</div>
                    <div className="fs-5 ms-5 text-light">Surface Water{store.singlePlanet.surface_water}</div>
                    <Link to="/">
                        <button className="fs-5 ms-5 mt-5 text-light btn btn-primary">Return Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default SinglePlanetView