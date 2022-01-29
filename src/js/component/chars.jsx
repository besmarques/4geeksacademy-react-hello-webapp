import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";




const CharSection = props => {
    
const { store } = useContext(Context);
   
    //console.log(store.people);
  
    return store.people.map((i, name, uid, url) => (
        <>
            <div className="card col-2 border border-warning bg-dark p-0 mt-3 mb-3 ms-1 me-1">
            <h5 className="card-title bg-warning text-dark p-2 m-0">{i.name}</h5>
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+ i.uid + ".jpg"} className="card-img-top g-0 m-0 p-0" alt="..." ></img>
                <div className="card-body ">
                    
                    <div className="d-flex justify-content-between">
                        <Link to={"/SingleCharacterView/" + i.uid} state={i.uid}>
                            <button className="btn btn-warning">Read more</button>
                        </Link>
                        <Link to="">
                            <button className="btn btn-warning">+</button>
                        </Link>
                    </div>
                </div>
            </div> 
           
        </>
    )
    );
}

    

    

    
    
    /*return (
        <>
        <div className="fs-3 fw-bold mb-5 text-warning border-bottom border-warning border-5">Characters</div>
            <div className="pt-3 pb-3 d-flex justify-content-around horizontal-scrollable">
                
                <div className="card col-3 border border-warning bg-dark">
                    <div className="row d-flex g-0 border-bottom border-warning">
                        <div className="col-9 border-end border-warning">
                            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." ></img>
                        </div>
                        <div className="col-3 ">
                            <div className="text-center border-bottom border-warning description ">
                                <div>Eyes</div>
                                <div>Brown</div>
                            </div>
                            <div className="text-center border-bottom border-warning description">
                                <div>Gender</div>
                                <div>Male</div>
                            </div>
                            <div className="text-center border-bottom border-warning description">
                                <div>Height</div>
                                <div>177cm</div>
                            </div>
                            <div className="text-center border-bottom border-warning description">
                                <div>Weight</div>
                                <div>77kg</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body ">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between">
                            <Link to="/SingleCharacterView">
                                <button className="btn btn-warning">Go somewhere</button>
                            </Link>
                            <Link to="">
                                <button className="btn btn-warning">+</button>
                            </Link>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
}*/

export default CharSection