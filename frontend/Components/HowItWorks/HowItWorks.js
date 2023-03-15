import React, { useState } from "react";
import Ownership from "../on_toggle/components/Ownership";
import Quality from "../on_toggle/components/Quality";
import Secure from "../on_toggle/components/Secure";


const HowItWorks = () => {
 
  

  return (
    <div >
      <div className="text-center">
        <h2 className="font-ksroam " style={{ fontSize: "50px" }}>
          HOW CRYPTAPRINT WORKS
        </h2>
      </div>
      <div className="w-100" >
        <br />
        <div >
          <img src="/images/how-it-works.svg" style={{}} className="w-100"/>
        </div>
        <br />
        <div className="row gap-3 justify-content-center w-100 p-1 ">
          <div
            className="flex flex-col mt-10 bg-gray rounded "
            style={{ maxWidth: "30%" }}
          >
            <p className="capitalize font-ksroam text-center h2">Connect</p>
            <p className="text-body-tertiary">
              Through a web3 public API we identify the NFTs you own to create a
              one-of-a-kind experience. (No Signing Required)
            </p>
          </div>
          <div
            className="flex flex-col  bg-gray rounded"
            style={{ maxWidth: "30%" }}
          >
            <p className="capitalize font-ksroam text-center h2">
              Choose your swag
            </p>
            <p className="text-body-tertiary">
              Your NFTs are automatically loaded onto each product. All you have
              to do is choose which one!
            </p>
          </div>
          <div
            className="flex flex-col   bg-gray  rounded"
            style={{ maxWidth: "30%" }}
          >
            <p className="capitalize font-ksroam text-center h2">
              Quality Delivered fast
            </p>
            <p className="text-body-tertiary">
              Your products are printed in-house and delivered within 5-10 days.{" "}
            </p>
          </div>
        </div>
        <div className="row gap-5">

        
        <div className="col gap-6 m-4">
          <Quality/>
          <Secure/>
          <Ownership/>
          
        </div>
        <div className="col">
            <img  src="/images/image-1.png" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
