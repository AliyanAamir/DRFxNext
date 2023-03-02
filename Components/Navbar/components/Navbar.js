import React from "react";
import Link from 'next/link';
import Searchbar from "./Searchbar";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <Link
          className="navbar-brand font-ksroam"
          href="/"
          style={{ fontSize: "3rem", marginLeft: "30px" }}
        >
          CRYPTAPRINT
        </Link>
        <div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse gap-5 "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav gap-3 h2 ">
              <li className="nav-item hover-underline-animation">
                <Link
                  className="nav-link active font-ksroam"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-ksroam hover-underline-animation" href="/shop">
                  SHOP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-ksroam hover-underline-animation" href="/">
                  OFFICIAL MERCH
                </Link>
              </li>
            </ul>
            <Searchbar />
          </div>
        </div>
        <div className="d-flex gap-4">
        <div>
            <Link href="/order">
            <img
              src="./Icons/portfolio.png"
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            />
            </Link>
            
          </div>
          <Link href="/cart" style={{textDecoration:'none'}}>
          <div class="circle" style={{marginTop:'10px'}}>0</div>
          </Link>
          
        </div>
        <div className="d-flex flex-row gap-3 " style={{ marginRight: "30px" }}>
          <a href="https://www.instagram.com/cryptaprint/" target="_blank">
            <img
              src="./Icons/instagram.png"
              style={{ height: "40px", width: "40px" }}
            />
          </a>
          <a href="https://discord.gg/3v4SHKve" target="_blank">
            <img
              src="./Icons/discord.png"
              style={{ height: "40px", width: "40px" }}
            />
          </a>
          <a href="https://www.tiktok.com/@cryptaprint" target="_blank">
            <img
              src="./Icons/tiktok.png"
              style={{ height: "40px", width: "40px" }}
            />
          </a>
          <a href="https://twitter.com/CryptaPrint" target="_blank">
            <img
              src="./Icons/twitter.png"
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
