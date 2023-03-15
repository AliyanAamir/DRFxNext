import React, { useState } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import products from "../../data/products.json";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RelatedProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between mb-5 px-3">
        <div className="w-50">
          <span style={{ fontSize: "15 px" }} className="h6 col-sm-3 me-5">
            Related Products
          </span>
          <Link href="/products" className="text-decoration-none gray col-sm-3">
            View All →
          </Link>
        </div>
        <div className="text-end " style={{ width: "-webkit-fill-available" }}>
          <button
            className="carousel-btn me-3 mobile-product-related-btn"
            data-bs-target="#carouselExample"
            onClick={previous}
            style={{ width: "7%" }}
          >
            <ArrowBackIcon />
          </button>
          <button
            className="carousel-btn mobile-product-related-btn"
            data-bs-target="#carouselExample"
            onClick={next}
            style={{ width: "7%" }}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} className="text-center">
        {products.map((product, index) => {
          return (
            <div key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <img
                  src={product.image}
                  style={{ height: "18rem" }}
                  alt={product.name}
                />
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};



export default RelatedProducts;
