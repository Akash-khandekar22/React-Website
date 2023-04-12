import React from "react"; 
import "./Card.css";
import { Link } from "react-router-dom";


const Card =(props)=>
{
    return(
        <>
            <div className="bgcolor shadow p-2 h-100 rounded col-md-3 col-10 mx-auto">
              <div className="card bgcolor " >
                <img src = {props.imgsrc} className="card-img-top img-fluid " alt="logo" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text"> {props.desc}</p>
                  <Link to="#" className="btn btn-primary"> Go somewhere</Link>
                </div>
              </div>
            </div>
         </>

  )
}
export default Card;