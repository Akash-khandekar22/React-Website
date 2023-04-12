import React from "react";
import "./Common.css";
import { NavLink } from "react-router-dom";

const Common =(props) => {

    return (
        <>
        <div className="cover d-flex justify-content-center align-item-center">
        <section id = "header" className=" d-flex align-item-center bg-white">
            <div className="container-xxl">
                <div className="row h-100 mb-5">
                  <div className=" h-100 col-12 mx-auto">
                    <div className="row h-100 mb-5">
                     <div className=" h-100 bgcolor col-lg-6 col-md-6 col-sm-6 pt-lg-0 order-2 order-lg-1 d-flex pt-5 justify-content-center flex-column">
                        <h1 className="bgcolor text-light"> {props.name} <strong className="bgcolor text-info brand-name">  {props.brand} </strong> </h1>
                        <h5 className="bgcolor my-3 text-light">
                            We are the team of talented web developers and we can help you to grow your business..! 
                        </h5>
                        <div className="bgcolor mt-3">
                            <NavLink to={props.visit}  className="shadow p-auto btn-primary btn-get-started">
                                {props.btn}
                            </NavLink>
                        </div>
                    </div>

                    <div className="bgcolor h-90 py-5 col-lg-6 col-md-6 col-sm-6 order-1 order-lg-2 header-img justify-content-center float-right">
                        <img className="myimage ml-5 w-75 h-100 shadow-lg rounded img img-fluid float-right" src= {props.imgsrc} alt="img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </div> 
</>
)
}

export default Common;