import React from 'react'

const Searchbar = () => {
  return (
    <form className="d-flex mt-2 px-4 " role="search">
        <input className="form-control me-2" style={{width:'300px'}} type="search" placeholder="Search" aria-label="Search">
          
        </input>
        <img src='/Icons/search.png' className="mt-1" style={{height:'28px'}} ></img>
        
      </form>
  )
}

export default Searchbar
