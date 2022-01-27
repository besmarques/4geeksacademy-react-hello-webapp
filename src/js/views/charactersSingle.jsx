import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const SingleCharacterView = () => {
    return (
    <>
    <div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-5 pb-5">
                
                <div className="pt-3 pb-3 d-flex justify-content-around">
                    <div className="col-3 border border-warning">
                        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." ></img>
                    </div>
                    <div className="col-9">
                        <div className="fs-3 ms-5 fw-bold mb-3 text-warning border-bottom border-warning border-5">Char Name</div>
                        <div className="fs-5 ms-5 text-light">Birth Year: </div>
                        <div className="fs-5 ms-5 text-light">Species: </div>
                        <div className="fs-5 ms-5 text-light">Height: </div>
                        <div className="fs-5 ms-5 text-light">Weight: </div>
                        <div className="fs-5 ms-5 text-light">Gender: </div>
                        <div className="fs-5 ms-5 text-light">Hair Color: </div>
                        <div className="fs-5 ms-5 text-light">Skin Color: </div>
                        <div className="fs-5 ms-5 text-light">Homeworld: </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default SingleCharacterView