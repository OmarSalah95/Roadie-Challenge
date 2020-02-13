import React from 'react'

export default function ProductCard({title, seller, desc, productImg, addReview}){
    return (
        <div className="Product-Card">
            
            <img src={productImg} alt="Product Display"/>
            

            <div className="Content">
                <h1>{title}</h1>
                <p>by </p>
                <h3>{seller}</h3>
                <p>{desc}</p>
                <div className="button-container">
                    <button className="add-button">ADD TO CART</button>
                    <button className="rev-button" onClick={() => addReview() }>LEAVE REVIEW</button>
                </div>
            </div>
        </div>
    )
}