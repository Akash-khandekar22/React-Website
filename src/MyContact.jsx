
import React from "react";
import "./MyContact.css";
import { useState } from "react";



const MyContact = () =>
{     
       const [data , setData] = useState({
           
             name: " ",
            email: " ",
            mobile: " "

      });


      const InputData = (event) =>
{
      const {name, value} = event.target;

      setData ((preVal) => {

      return{ 
              ...preVal ,
              [name]: value,
            }
      })
      
     

}


const submitData =(e) =>
{     
      e.preventDefault();

      alert(`my name is ${data.name} and my email is ${data.email} mobile number is ${data.mobile}`)


      setData ({
                name:"",
                email:"",
                mobile:""
               })     

}


    return (
        <>
        <div className=" bgcolor h-100 main_div">
<form className="Myform my-5 shadow pt-3 bg-white rounded" onSubmit={submitData} >
  <h3>Contact Us</h3>
     <div className="mb-3">
        <label 
        for="Name" 
        className="form-label">
         Name
         </label>
        <input  
         onChange = {InputData} 
         type="text"
         className="bg-light form-control" 
         id="exampleInputEmail1"
         aria-describedby="emailHelp"
         name = "name"
         value ={data.name} 
         placeholder="Enter your name"
         
         />
     </div>
     
     <div className="mb-3">
        <label for="Email" className="form-label">Email</label>
        <input  
         onChange = {InputData}
         type="email" 
         className="form-control"
         id="exampleInputPassword1"
         name = "email"
         value={data.email}
         placeholder="Enter your email address"
        
         />
     </div>

     <div className="mb-3">
        <label 
        for="Mobile" 
        className="form-label">
        Mobile
        </label>
        <input  
        onChange = {InputData} 
        type="text" 
        className="form-control" 
        id="exampleInputPassword1"
        name = "mobile"
        value= {data.mobile}
        placeholder="Enter your mobile number"
        />
     </div>
     <div className="mb-3 form-check">
        <input  
        type="checkbox" 
        className="form-check-input" 
        id="exampleCheck1"/>
        <label 
        className="form-check-label" 
        for="exampleCheck1">
        Check me out
        </label>
      </div>
      <div 
      className="text-center">
                 
      <button 
        type="submit" 
        className="w-50 text-center btn btn-primary">
        Submit
      </button>
      
  </div>
</form>
</div>
        </>

    )

};
export default MyContact;