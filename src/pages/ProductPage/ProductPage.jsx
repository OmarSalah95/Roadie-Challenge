import React, { useState, useEffect } from 'react'



export default function ProductPage() {
    const [state, setState] = useState({})

    // Use Effect will simulate my Server request to recieve the needed data and set it to state
    useEffect(() =>{
        setTimeout(setState, 5000, {product: {title: "ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE",seller: "Roadie", Description: ""} })
    })




    return (
        <>
            <ProductCard />
        </>
    );
}