import React from 'react'

export default function ProductCard({title, seller, desc, img}){
    return (
        <div className="Product-Card">
            
                <img src={img} alt="Product Display Image"/>
            

            <div className="Content">
                <h1>{title}</h1>
                <p>by <h3>{seller}</h3></p>
                <p>{desc}</p>
                <div className="button-container">
                    <button className="add-button">ADD TO CART</button>
                    <button className="rev-button">LEAVE REVIEW</button>
                </div>
            </div>
        </div>
    )
}