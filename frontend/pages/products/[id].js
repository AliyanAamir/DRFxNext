import ColorRadioGroup from "@/Components/Products/DynamicColor";
import { Heart } from "@/Components/Products/Heart";
import ProductImages from "@/Components/Products/ProductImages";
import RelatedProducts from "@/Components/Products/RelatedProducts";

import Counter from "@/Components/Products/StepperCounter";
import { Tabs } from "@/Components/Products/Tabs";
import SelectSize from "@/Components/Swag/components/Selectsize";
import ShareIcon from '@mui/icons-material/Share';
import { Rating } from "@mui/material";

import Link from "next/link";


export async function getStaticPaths() {
  const products = require("../../data/products.json");
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = require("../../data/products.json");
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );
  return { props: { product } };
}


export default function Product({ product }) {
  return (
    <div className="container">
      <div className="row mb-3 mobile-top-row">
        <span className="mb-4 col text-secondary">
          <Link
            href="/"
            className="text-secondary me-3"
            style={{ textDecorationLine: "none" }}
          >
            Home /{" "}
          </Link>
          <Link
            href="/products"
            className="text-secondary me-3"
            style={{ textDecorationLine: "none" }}
          >
            Shop /{" "}
          </Link>
          <span>{product.name}</span>
        </span>
      </div>
      <div className="row">
        <div className="col">
        <ProductImages/>

        </div>
        <div className="col me-4">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "35rem", height: "45rem" }}
          />
        </div>
        <div className="col-sm-5 mobile-div-product">
          <div className="row">Best Seller</div>

          <strong className="row mt-2 h6">{product.name}</strong>

          <div className="row">
            <span className="col d-flex align-self-center">
              <Rating
                name="simple-controlled"
                size="small"
                style={{ marginLeft: "-1rem", color: "black" }}
              />
            </span>
            <span
              className="col d-flex align-items-start text-secondary"
              style={{ marginInlineStart: "-24.3rem" }}
            >
              Review
            </span>
          </div>
          <div className="row mt-4">{product.price}</div>
          <div className="row mt-4 " style={{ fontSize: "14px" }}>
            {product.description}
          </div>
          
          <div className="row mt-4 " style={{marginLeft:'-22px'}}>
            <div className="col-sm-1 d-flex  align-items-center">
              SIZE
            </div>
            <div className="col d-flex gap-3 ">
            <SelectSize/>

            </div>
          </div>
    
          <div className="row mt-4   d-flex align-items-center">
            COLOR
            <div className="col">
              <ColorRadioGroup colors={product.colors}/>
            </div>
            
          </div>
          <div className="row ">
            
            <Counter/>

            <button className="btn btn-dark btn-lg w-50 align-self-end" style={{borderRadius:'0px', height:'3.5rem' , fontSize:'1rem'}}> ADD TO BASKET →</button>


          </div>
          <div className="row mt-3 " style={{marginLeft:'-1.6rem'}}>
            <div className="col-sm-1" style={{width:'30px'}}>
              <Heart/>
            </div>
              <div className="col" style={{maxWidth:'62%'}} >
              <span>ADD TO WISHLIST</span>
              </div>
              <div className="col-sm-3">
                <ShareIcon/>
              <span>SHARE</span>
              </div>
              
              
          </div>
          <br/>
          
          <div className="row border border-1" style={{maxWidth:'86%' }}/>
          <div className="row mt-3">
            <div className="col-sm-3 text-black-50 h6 mobile-product-cat" style={{marginLeft:'-0.5rem'}}>
            SKU:
            </div>
            <div className="col-sm-3 mobile-product-cat">
              SKU#
            </div>
           
          </div>
          <div className="row">
            <div className="col-sm-3 text-black-50 h6 mobile-product-cat" style={{marginLeft:'-0.5rem'}}>
            CATEGORY:
            </div>
            <div className="col">
              ######
            </div>
           
          </div>
          <div className="row">
            <div className="col-sm-3 text-black-50 h6 mobile-product-cat" style={{marginLeft:'-0.5rem'}}>
            TAGS:
            </div>
            <div className="col-sm-3 mobile-product-cat">
              ######
            </div>
           
          </div>
        </div>
      </div>
      <div className="row mt-5"  >
        <Tabs color={product.colors}/>
      </div>
      <div className="row mt-5" >
          <RelatedProducts/>
      </div>
      <div >
      
      </div>
    </div>
  );
}
