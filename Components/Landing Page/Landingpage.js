import React from "react";
import styled from "styled-components";
import HowItWorks from "../HowItWorks/HowItWorks";



const Landingpage = () => {
  return (
    
      
    <div className="container-sm p-5">
    <div className="text-start ">
      <h2 className="font-ksroam rotate-5 " style={{fontSize:'70px', marginLeft:'200px'}}>You Collect NFTs</h2>
    </div>
    <div className="image-container d-flex rotate-5  me-3 justify-content-center align-items-center gap-3">
      <img className="w-25 p-1" src="https://images.pexels.com/photos/15009448/pexels-photo-15009448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="image1"/>
      <img className="w-25 p-1" src="https://images.pexels.com/photos/15009448/pexels-photo-15009448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="image2"/>
      <img className="w-25 p-1" src="https://images.pexels.com/photos/15009448/pexels-photo-15009448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image3"/>
    </div>
    <div className="text-end p-2" >
    <h2 className="font-ksroam rotate-5 w-75" style={{fontSize:'70px'}}>We Print Them</h2>
    </div>
    <br/>
    <HowItWorks/>
  </div>

    

   
  );
};

export default Landingpage;
