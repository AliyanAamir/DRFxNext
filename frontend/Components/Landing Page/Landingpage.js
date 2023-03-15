import React from "react";
import styled from "styled-components";
import HowItWorks from "../HowItWorks/HowItWorks";

const Landingpage = () => {
  return (
    <div className="container-xl p-1 mt-5">
      <div>
      <img src="/images/banner-1.png" className="w-100" />

      </div>
      <div className="p-5">
        <HowItWorks />
      </div>
    </div>
  );
};

export default Landingpage;