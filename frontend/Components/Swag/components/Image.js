import React from "react";

const Image = ({image}) => {
  
  return (
    <img src={`/images/${image}`} alt="dadsa" className='w-100' style={{position:"",maxHeight:'25rem',zIndex:"10"}}/>
  );
};

export default Image;