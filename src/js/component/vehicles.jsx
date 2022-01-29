import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";


const VehicleSection = props => {

    const { store } = useContext(Context);

    return store.vehicles.map((i, name, uid, url) => (
        <>
        
                <div className="card col-3 border border-danger bg-dark p-0 mt-3 mb-3 ms-1 me-1">
                <h5 className="card-title bg-danger text-light p-2 m-0">{i.name}</h5>
                    <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ i.uid + ".jpg"} className="card-img-top g-0 m-0 p-0" alt="..." ></img>
                   
                    <div className="card-body ">
                        
                        <div className="d-flex justify-content-between">
                            <Link to={"/SingleVehicleView/"  + i.uid}>
                                <button className="btn btn-danger">Read more</button>
                            </Link>
                            <Link to="">
                                <button className="btn btn-danger">+</button>
                            </Link>
                        </div>
                    </div>
                </div>            
           
        </>
        )
    );
}

export default VehicleSection