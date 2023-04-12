import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./Card.css";

const Service = () => {

    return (

        <>
        <div className="mb-4">
            <h1 className="bgcolor text-center"><strong className="bgcolor text-light"> Our Services</strong></h1>
        </div>
        <div className="container-fluid bgcolor mb-0">
            <div className="bgcolor row">
                <div className="bgcolor col-12 mx-auto">
                    <div className=" bgcolor row gy-4">
                    {
                        Sdata.map((val) =>{
                            return(
                                <Card
                                    id     = {val.id}
                                    title  = {val.title}
                                    desc   = {val.desc}
                                    imgsrc = {val.imgsrc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</>   
)
}
export default Service;