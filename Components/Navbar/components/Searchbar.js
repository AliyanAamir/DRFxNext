import React from 'react'

const Searchbar = () => {
  return (
    <form class="d-flex" role="search">
        <input class="form-control me-2" style={{width:'600px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
  )
}

export default Searchbar
