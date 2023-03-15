import React, { useRef } from "react";
import Slider from "react-slick";
import products from "../../data/products.json";
import Link from "next/link";

const ProductImages = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true, 
    arrows:false,
    verticalSwiping: true, 
    
  };


  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="product-slider-container">
        <button className="btn-imagecarousal" onClick={next} style={{marginRight:'10px'}}>
           <img src="/Icons/up.png/" style={{height:'10px'}}/>
        </button>
      <Slider {...settings} ref={sliderRef}>
        {products.map((product, index) => (
          <div key={index}>
            <div  className="text-decoration-none text-dark ">
              <img
                src={product.image}
                style={{ height: "120px", width:'90px' }}
                alt={product.name}
              />
            </div>
          </div>
        ))}
      </Slider>
      <button className="btn-imagecarousal" onClick={previous} style={{marginRight:'10px'}}>
           <img src="/Icons/down.png/" style={{height:'10px'}}/>
        </button>
    </div>
  );
};

export default ProductImages;