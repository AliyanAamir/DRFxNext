import React from 'react'

const Searchbar = () => {
  return (
    <form class="d-flex mt-2 px-3" role="search">
        <input class="form-control me-2" style={{width:'400px'}} type="search" placeholder="Search" aria-label="Search">
          
        </input>
        <img src='/Icons/search.png' className="mt-1" style={{height:'28px'}} ></img>
        
      </form>
  )
}

export default Searchbar
