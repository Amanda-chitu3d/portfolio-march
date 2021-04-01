import React from 'react';

function MenuNavBar() {
    return (
        <div className="container">
           <div className="menuSectionTitle">
               <h2>Our Menu</h2>
               <div className="underline"></div>
           </div>
            <div className="btn-container">
                <button type="button" className="filter-btn">all</button>
                <button type="button" className="filter-btn">breakfast</button>
                <button type="button" className="filter-btn">lunch</button>
                <button type="button" className="filter-btn">shakes</button>
                <button type="button" className="filter-btn">dinner</button>
            </div>
        </div>
    )
}

export default MenuNavBar
