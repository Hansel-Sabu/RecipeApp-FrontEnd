import React from 'react'
import Navbar from './Navbar'

const SearchRecipe = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchRecipe