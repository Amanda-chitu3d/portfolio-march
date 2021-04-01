import React from 'react'

function LunchMenu() {
    return (
        <div className="section-center">
               <article className="menu-item">
                <img src="https://picsum.photos/170" alt=""className="menuPhoto"/>
                <div className="item-info">
                <h3>Drinks</h3>
                    <header className="item-info-header ">
                         <h4> Coffee </h4><h4 className="price">$3</h4></header>
                        <header className="item-info-header ">
                        <h4> Tea</h4><h4 className="price">$3</h4></header>
                        <header className="item-info-header ">
                        <h4>Coco Cola</h4><h4 className="price">$2</h4></header>
                </div>
            </article>
        </div>
    )
}

export default LunchMenu
