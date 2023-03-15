import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    
      <div className="text-left text-white" style={{minHeight:'450px',backgroundColor:'black'}}>
        <div className="p-5">
          <section>
            <div className="row mt-3">
              <div className="col-lg-3 ">
                <h5 className="text-uppercase">Contact Us</h5>

                <ul className="list-unstyled mt-5">
                  <li>
                    <Link href="#!" style={{textDecoration: 'none'}} className="text-white">
                    info@cryptaprint.com
                    </Link>
                  </li>
                  
                </ul>
              </div>

              <div className="col-lg-3">
                <h5 className="text-uppercase">Company</h5>

                <ul className="list-unstyled mt-5">
                  <li className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      About Us
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      FAQs
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      Parternership
                    </Link>
                  </li>
                 
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Account</h5>

                <ul className="list-unstyled  mt-5">
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      My Account
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      Find Link Store
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      Customer Service
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      Legal & Privacy
                    </Link>
                  </li>
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Join Newsletter</h5>

                <ul className="list-unstyled mb-0 mt-5">
                  <li  className="mt-3">
                    <Link style={{textDecoration: 'none'}} href="#!" className="text-white">
                    Be the first to know about new arrivals & special offers
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </section>
        </div>
        <hr className=" mx-auto"/>
        <div className="text-center Link-3">
          Copyright ©️ 2022 CRYPTAPRINT LLC. All Rights Reserved.
        </div>
      </div>
    
  );
};

export default Footer;
