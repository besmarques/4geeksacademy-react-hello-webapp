import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";




const CharSection = props => {
    return (
        <>
        <div className="fs-3 fw-bold mb-5 text-warning border-bottom border-warning border-5">Characters</div>
            <div className="pt-3 pb-3 d-flex justify-content-around horizontal-scrollable">
                <div className="card col-3 border border-warning bg-dark ">
                    <div className="row d-flex g-0 border-bottom border-warning">
                        <div className="col-9 border-end border-warning">
                            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." ></img>
                        </div>
                        <div className="col-3 ">
                            <div class="text-center border-bottom border-warning descrpt ">
                                <div>Eyes</div>
                                <div>Brown</div>
                            </div>
                            <div class="text-center border-bottom border-warning descrpt">
                                <div>Gender</div>
                                <div>Male</div>
                            </div>
                            <div class="text-center border-bottom border-warning descrpt">
                                <div>Height</div>
                                <div>177cm</div>
                            </div>
                            <div class="text-center border-bottom border-warning descrpt">
                                <div>Weight</div>
                                <div>77kg</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body ">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/SingleCharacterView">
                            <button className="btn btn-warning">Go somewhere</button>
                        </Link>
                    </div>
                </div>            
            </div>
        </>
    );
}

export default CharSection