import React from 'react'
import '../../css/search.css';
function Search() {
  return (
    <div className="search-bar">
        <form className='search-form d-flex align-items-cente' method='POST' action ="#">
            <input tupe="text" name='query' placeholder='Search' title='Enter search keyword'/>
            <button type='submit' title='Search'> <i className='bi bi-search'></i></button>
        </form>
    </div>
  )
}

export default Search